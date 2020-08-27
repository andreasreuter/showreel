"use strict"

import { ApolloServer } from "apollo-server-lambda"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"
import dotenv from "dotenv"
import {
  ArtistsAPI,
  ArtsAPI,
  UsersAPI,
  FollowAPI,
  HubSpotAPI,
  CoursesAPI,
} from "./datasources"

// Configure Dotenv to read environment variables from .env file automatically.
dotenv.config()

const {
  REGION,
  API_KEY,
  API_SECRET,
  API_URL,
  PREFIX,
  HUBSPOT_API_KEY
} = process.env

// Apply apollo server.
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    artistsAPI: new ArtistsAPI(),
    artsAPI: new ArtsAPI(),
    usersAPI: new UsersAPI(),
    followAPI: new FollowAPI(),
    hubSpotAPI: new HubSpotAPI(),
    coursesAPI: new CoursesAPI(),
  }),
  context: () => ({
    region: REGION,
    accessKeyId: API_KEY,
    secretAccessKey: API_SECRET,
    endpoint: API_URL,
    prefix: PREFIX,
    hubSpotAPIKey: HUBSPOT_API_KEY,
  }),
  playground: {
    endpoint: "/dev/graphql"
  },
})

exports.graphqlHandler = apollo.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
