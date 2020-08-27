"use strict"

import DynamoDBDataSource from "./apollo-dynamodb"
import moment from "moment"

class UsersAPI extends DynamoDBDataSource {
  constructor() {
    super()
  }

  async user(userId) {
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
      "TableName": "users"
    })

    return (data.Items)
  }

  async addUser({ userId, firstName, lastName, email, photography, accessToken, expiresIn }) {
    // Retrieve current time along with time offset
    const today = moment()
    
    const data = await this.batchWrite({
      "RequestItems": {
        "users": [{
          "PutRequest": {
            "Item": {
              "user_id": userId,
              "first_name": firstName,
              "last_name": lastName,
              "email": email,
              "photography": photography,
              "access_token": accessToken,
              "expires_in": expiresIn,
              "sign_up_date": today.format()
            }
          }
        }]
      },
      "ReturnConsumedCapacity": "TOTAL"
    })

    return (data.UnprocessedItems)
  }
}

export default UsersAPI
