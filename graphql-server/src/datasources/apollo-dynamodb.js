"use strict"

import { DataSource } from "apollo-datasource"
import { InMemoryLRUCache } from "apollo-server-caching"
import aws from "aws-sdk"
import { get } from "lodash"
import DynamoDBConfig from "../libs/dynamodb-config"

class DynamoDBDataSource extends DataSource {
  constructor() {
    super()

    this.context
    this.cache
    this.config
    this.client
    this.documentClient
  }

  initialize({ context, cache }) {
    aws.config.update({
      region: get(context, "region", "local"),
      endpoint: get(context, "endpoint", "http://localhost:8000"),
      accessKeyId: get(context, "accessKeyId", ""),
      secretAccessKey: get(context, "secretAccessKey", ""),
      prefix: get(context, "prefix", ""),
    })

    // How to authorize users and control permissions in your GraphQL API.
    // https://www.apollographql.com/docs/apollo-server/security/authentication
    this.context = context

    this.config = new DynamoDBConfig(this.context)

    // Set up custom or default caching.
    this.cache = cache || new InMemoryLRUCache()

    this.client = new aws.DynamoDB()
    this.documentClient = new aws.DynamoDB.DocumentClient()
  }

  async retrieve(params) {
    return (
      this.client.scan(this.config.update(params))
        .promise()
    )
  }

  async batchWrite(params) {
    return (
      this.documentClient.batchWrite(this.config.update(params))
        .promise()
    )
  }

  async batchGet(params) {
    return (
      this.documentClient.batchGet(this.config.update(params))
        .promise()
    )
  }

  async delete(params) {
    return (
      this.documentClient.delete(this.config.update(params))
        .promise()
    )
  }
}

export default DynamoDBDataSource
