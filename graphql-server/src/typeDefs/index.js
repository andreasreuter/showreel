"use strict"

import gql from "graphql-tag"
import artist from "./artist"
import art from "./art"
import user from "./user"
import follow from "./follow"
import hubSpot from "./hubspot"
import course from "./course"

const typeDefs = gql`
  type Query {
    artist(artistId: String): Artist
    artists: [Artist]
    art(artId: String, artistId: String): Art
    favoriteArt(artistId: String): Art
    arts(artistId: String): [Art]
    user(userId: String): User
    follow(userId: String): [Follow]
    course(courseId: String): Course
    courses: [Course]
  }

  type Mutation {
    addUser(user: UserInput): User
    addFollow(follow: FollowInput): Boolean
    deleteFollow(follow: FollowInput): Boolean
    addArtLover(artLover: ArtLoverInput): Contact
    addArtist(artist: ArtistInput): Contact
  }

  ${artist}
  ${art}
  ${user}
  ${follow}
  ${hubSpot}
  ${course}
`

export default typeDefs
