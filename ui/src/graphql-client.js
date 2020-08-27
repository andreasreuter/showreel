import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"
import { createHttpLink } from "apollo-link-http"

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage
})

const link = createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URL })

const client = new ApolloClient({
  cache,
  link,
})

export { client }
