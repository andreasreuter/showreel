"use strict"

import DynamoDBDataSource from "./apollo-dynamodb"

class ArtistsAPI extends DynamoDBDataSource {
  constructor() {
    super()
  }

  async artist(artistId) {
    const data = await this.retrieve({
      "ExpressionAttributeNames": {
        "#artist_id": "artist_id"
      },
      "ExpressionAttributeValues": {
        ":artist_id": {
          "S": artistId
        }
      },
      "ConsistentRead": false,
      "FilterExpression": "#artist_id = :artist_id",
      "TableName": "artists"
    })

    return (data.Items)
  }

  async allArtists() {
    const data = await this.retrieve({
      "TableName": "artists"
    })

    return (data.Items)
  }
}

export default ArtistsAPI
