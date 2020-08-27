"use strict"

import gql from "graphql-tag"

const typeDefs = gql`
  type Course {
    courseId: String
    artistId: String
    artist: Artist
    title: String
    description: String
    level: String
    courseNumber: Int
    courseVideo: String
    photography: String
    startAt: Int
    endAt: Int
    relatedCourses: [String]
    countOfSessions: Int
  }
`

export default typeDefs
