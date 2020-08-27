"use strict"

import courseReducer from "../reducers/course"
import artistReducer from "../reducers/artist"
import { isEmpty } from "lodash"

export default {
  Query: {
    course: async (_source, { courseId }, { dataSources }) => {
      const results = await dataSources.coursesAPI.course(courseId)

      let course = {}

      if (!isEmpty(results)) {
        course = courseReducer(results[0])
      }

      return (course)
    },
    courses: async (_source, _args, { dataSources }) => {
      const results = await dataSources.coursesAPI.allCourses()

      const courses = results.map(result => {
        return (courseReducer(result))
      })

      courses.sort((a, b) => (
        a.sequence - b.sequence
      ))

      return (courses)
    }
  },

  Course: {
    artist: async (_source, _args, { dataSources }) => {
      let artist = {}

      if (!isEmpty(_source)) {
        const { artistId } = _source
        const results = await dataSources.artistsAPI.artist(artistId)

        if (!isEmpty(results)) {
          artist = artistReducer(results[0])
        }
      }

      return (artist)
    }
  }
}
