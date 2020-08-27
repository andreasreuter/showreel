"use strict"

import followReducer from "../reducers/follow"
import { isEmpty } from "lodash"

export default {
  Query: {
    follow: async (_source, { userId } , { dataSources }) => {
      const results = await dataSources.followAPI.allFollow(userId)

      const follow = results.map(result => {
        return (followReducer(result))
      })

      return (follow)
    }
  },
  Mutation: {
    addFollow: async (_source, { follow }, { dataSources }) => {
      const result = await dataSources.followAPI.addFollow(follow)

      if (isEmpty(result)) {
        return (true)
      }

      return (false)
    },
    deleteFollow: async (_source, { follow }, { dataSources }) => {
      const result = await dataSources.followAPI.deleteFollow(follow)

      if (isEmpty(result)) {
        return (true)
      }

      return (false)
    }
  }
}
