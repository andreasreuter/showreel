"use strict"

import userReducer from "../reducers/user"
import { isEmpty } from "lodash"

export default {
  Query: {
    user: async (_source, { userId }, { dataSources }) => {
      const results = await dataSources.usersAPI.user(userId)

      let user = {}

      if (!isEmpty(results)) {
        user = userReducer(results[0])
      }

      return (user)
    }
  },
  Mutation: {
    addUser: async (_source, { user }, { dataSources }) => {
      const result = await dataSources.usersAPI.addUser(user)

      if (isEmpty(result)) {
        return (user)
      }
      
      return ({})
    }
  }
}
