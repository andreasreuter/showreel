"use strict"

import { has, get, update, mapKeys } from "lodash"

export default class DynamoDBConfig {
  constructor(context) {
    this.context = context
  }

  update(params) {
    let modified = params

    if (has(params, "TableName")) {
      modified = update(
        params,
        "TableName",
        (tableName) => this.context.prefix + tableName
      )
    } else if (has(params, "RequestItems")) {
      modified = update(
        params,
        "RequestItems",
        () => mapKeys(
          get(params, "RequestItems"),
          (value, key) => this.context.prefix + key
        )
      )
    }

    return (modified)
  }
}
