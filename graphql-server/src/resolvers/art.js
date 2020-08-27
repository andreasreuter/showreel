"use strict"

import artReducer from "../reducers/art"
import { isEmpty } from "lodash"

export default {
  Query: {
    art: async (_source, { artId, artistId }, { dataSources }) => {
      const results = await dataSources.artsAPI.artOfArtist(artId, artistId)

      let art = {}

      if (!isEmpty(results)) {
        art = {
          ...artReducer(results[0])
        }
      }

      return (art)
    },
    favoriteArt: async (_source, { artistId }, { dataSources }) => {
      const results = await dataSources.artsAPI.favoriteArtOfArtist(artistId)

      let art = {}

      if (!isEmpty(results)) {
        art = {
          ...artReducer(results[0])
        }
      }

      return (art)
    },
    arts: async (_source, { artistId }, { dataSources }) => {
      const results = await dataSources.artsAPI.allArtsOfArtist(artistId)

      const arts = results.map(result => {
        return (artReducer(result))
      })

      return (arts)
    }
  }
}
