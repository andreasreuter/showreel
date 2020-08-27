"use strict"

import artistReducer from "../reducers/artist"
import { isEmpty } from "lodash"

export default {
  Query: {
    artist: async (_source, { artistId }, { dataSources }) => {
      const results = await dataSources.artistsAPI.artist(artistId)

      let artist = {}

      if (!isEmpty(results)) {
        artist = artistReducer(results[0])
      }

      return (artist)
    },
    artists: async (_source, _args, { dataSources }) => {
      const results = await dataSources.artistsAPI.allArtists()

      const artists = results.map(result => {
        return (artistReducer(result))
      })

      artists.sort((a, b) => (
        a.sequence - b.sequence
      ))

      return (artists)
    }
  }
}
