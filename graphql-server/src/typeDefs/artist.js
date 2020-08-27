"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  type Artist {
    artistId: String
    firstName: String
    lastName: String
    categoryOfArt: String
    practiceSinceYear: Int
    residence: String
    biography: String
    myVideo: String
    photography: String
  }
`

export default typeDefs
