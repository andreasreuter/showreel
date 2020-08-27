"use strict"

import DynamoDBDataSource from "./apollo-dynamodb"

class ArtsAPI extends DynamoDBDataSource {
  constructor() {
    super()
  }

  async artOfArtist(artId, artistId) {
    const data = await this.retrieve({
      "ExpressionAttributeNames": {
        "#art_id": "art_id",
        "#artist_id": "artist_id"
      },
      "ExpressionAttributeValues": {
        ":art_id": {
          "S": artId
        },
        ":artist_id": {
          "S": artistId
        }
      },
      "ConsistentRead": false,
      "FilterExpression": "#art_id = :art_id And #artist_id = :artist_id",
      "TableName": "arts"
    })

    return (data.Items)
  }

  async favoriteArtOfArtist(artistId) {
    const data = await this.retrieve({
      "ExpressionAttributeNames": {
        "#artist_id": "artist_id",
        "#favorite": "favorite"
      },
      "ExpressionAttributeValues": {
        ":artist_id": {
          "S": artistId
        },
        ":favorite": {
          "BOOL": true
        }
      },
      "ConsistentRead": false,
      "FilterExpression": "#artist_id = :artist_id And #favorite = :favorite",
      "TableName": "arts"
    })

    return (data.Items)
  }

  async allArtsOfArtist(artistId) {
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
      "TableName": "arts"
    })

    return (data.Items)
  }
}

export default ArtsAPI
