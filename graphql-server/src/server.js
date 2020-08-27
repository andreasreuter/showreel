"use strict"

import express from "express"
import { ApolloServer } from "apollo-server-express"
import typeDefs from "./typeDefs"
import resolvers from "./resolvers"
import cors from "cors"
import dotenv from "dotenv"
import chalk from "chalk"
import fs from "fs"
import https from "https"
import {
  ArtistsAPI,
  ArtsAPI,
  UsersAPI,
  FollowAPI,
  HubSpotAPI,
  CoursesAPI,
} from "./datasources"

const app = express()

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
})

apollo.applyMiddleware({
  app,
  path: "/graphql"
})

app.use(express.static(__dirname, { dotfiles: "allow" }))

// Enable proxy x-Forwadded-*.
app.enable("trust proxy")

// Enables CORS.
app.use(cors())

// Set port.
app.set("port", process.env.PORT || 4000)

const server = https.createServer(
  {
    cert: fs.readFileSync("./server.crt"),
    key: fs.readFileSync("./server.key")
  },
  app
)

server.listen(app.get("port"), error => {
  if (error) {
    console.log(chalk.red(error.message))
  } else {
    console.log(chalk.green(`Browse graph api to https://localhost:${app.get("port")}${apollo.graphqlPath}`))
  }
})
