"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  input UserInput {
    userId: String
    firstName: String
    lastName: String
    email: String
    photography: String
    accessToken: String
    expiresIn: Int
  }

  type User {
    userId: String
    firstName: String
    lastName: String
    email: String
    photography: String
    accessToken: String
    expiresIn: Int
  }
`

export default typeDefs
