"use strict"

import hubSpotReducer from "../reducers/hubspot"
import { isEmpty } from "lodash"

export default {
  Mutation: {
    addArtLover: async (_source, { artLover }, { dataSources }) => {
      const result = await dataSources.hubSpotAPI.addArtLover(artLover)

      let contact = {}

      if (!isEmpty(result)) {
        contact = hubSpotReducer(result)
      }

      return (contact)
    },
    addArtist: async (_source, { artist }, { dataSources }) => {
      const result = await dataSources.hubSpotAPI.addArtist(artist)

      let contact = {}

      if (!isEmpty(result)) {
        contact = hubSpotReducer(result)
      }

      return (contact)
    }
  }
}
