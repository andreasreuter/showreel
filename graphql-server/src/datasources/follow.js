"use strict"

import DynamoDBDataSource from "./apollo-dynamodb"

class FollowAPI extends DynamoDBDataSource {
  constructor() {
    super()
  }

  async allFollow(userId) {
    const data = await this.retrieve({
      "ExpressionAttributeNames": {
        "#user_id": "user_id"
      },
      "ExpressionAttributeValues": {
        ":user_id": {
          "S": userId
        }
      },
      "ConsistentRead": false,
      "FilterExpression": "#user_id = :user_id",
      "TableName": "follow"
    })

    return (data.Items)
  }

  async addFollow({ userId, artistId }) {
    const data = await this.batchWrite({
      "RequestItems": {
        "follow": [{
          "PutRequest": {
            "Item": {
              "user_id": userId,
              "artist_id": artistId
            }
          }
        }]
      },
      "ReturnConsumedCapacity": "TOTAL"
    })

    return (data.UnprocessedItems)
  }

  async deleteFollow({ userId, artistId }) {
    const data = await this.delete({
      "Key": {
        "user_id": userId,
        "artist_id": artistId
      },
      "TableName": "follow"
    })

    return (data)
  }
}

export default FollowAPI
