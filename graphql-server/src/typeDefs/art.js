"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  type Art {
    artId: String
    title: String
    url: String
  }
`

export default typeDefs
