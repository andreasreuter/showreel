import gql from "graphql-tag"

const ART_WITH_ARTIST_GQL = gql`
  query ArtWithArtist($artId: String!, $artistId: String!) {
    art(artId: $artId, artistId: $artistId) {
      title
      url
    },
    artist(artistId: $artistId) {
      firstName
      lastName
    }
  }
`

const FAVORITE_ART_GQL = gql`
  query FavoriteArt($artistId: String!) {
    favoriteArt(artistId: $artistId) {
      artId
      title
      url
    }
  }
`

const ARTS_OF_ARTIST_GQL = gql`
  query Arts($artistId: String!) {
    arts(artistId: $artistId) {
      artId
      title
      url
    }
  }
`

export {
  ART_WITH_ARTIST_GQL,
  FAVORITE_ART_GQL,
  ARTS_OF_ARTIST_GQL,
}
