"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  input FollowInput {
    userId: String
    artistId: String
  }

  type Follow {
    userId: String
    artistId: String
  }
`

export default typeDefs
