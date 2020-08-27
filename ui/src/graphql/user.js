import gql from "graphql-tag"

const USER_GQL = gql`
  query User($userId: String!) {
    user(userId: $userId) {
      firstName
      lastName
      email
      photography
      location
      accessToken
      expiresIn
    }
  }
`

const LOCAL_AUTH_USER_GQL = gql`
  {
    authUser
  }
`

const ADD_USER_GQL = gql`
  mutation AddUser($user: UserInput!) {
    addUser(user: $user) {
      userId
      firstName
      lastName
      email
      photography
      location
      accessToken
      expiresIn
    }
  }
`

export {
  USER_GQL,
  LOCAL_AUTH_USER_GQL,
  ADD_USER_GQL,
}
