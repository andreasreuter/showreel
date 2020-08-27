import gql from "graphql-tag"

const ALL_ARTISTS_GQL = gql`
  {
    artists {
      artistId
      firstName
      lastName
      categoryOfArt
      practiceSinceYear
      residence
      biography
    }
  }
`

const ARTIST_GQL = gql`
  query Artist($artistId: String!) {
    artist(artistId: $artistId) {
      firstName
      lastName
      categoryOfArt
      practiceSinceYear
      residence
      biography
    }
  }
`

const MY_VIDEO_GQL = gql`
  query Artist($artistId: String!) {
    artist(artistId: $artistId) {
      firstName
      lastName
      myVideo
      photography
    }
  }
`

export {
  ALL_ARTISTS_GQL,
  ARTIST_GQL,
  MY_VIDEO_GQL,
}
