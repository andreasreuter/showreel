import gql from "graphql-tag"

const FOLLOW_GQL = gql`
  query Follow($userId: String!) {
    follow(userId: $userId) {
      userId
      artistId
    }
  }
`

const ADD_FOLLOW_GQL = gql`
  mutation AddFollow($follow: FollowInput!) {
    addFollow(follow: $follow)
  }
`

const DELETE_FOLLOW_GQL = gql`
  mutation DeleteFollow($follow: FollowInput!) {
    deleteFollow(follow: $follow)
  }
`

export {
  FOLLOW_GQL,
  ADD_FOLLOW_GQL,
  DELETE_FOLLOW_GQL,
}
