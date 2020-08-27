"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  input ArtLoverInput {
    email: String
  }

  input ArtistInput {
    firstName: String
    lastName: String
    email: String
    website: String
    categoryOfArt: String
    instagramHandle: String
  }

  type Contact {
    id: Int
  }
`

export default typeDefs
