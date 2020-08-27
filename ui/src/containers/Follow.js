import React from "react"
import { Query, Mutation } from "react-apollo"
import { FOLLOW_GQL, DELETE_FOLLOW_GQL, ADD_FOLLOW_GQL } from "../graphql"
import { FollowButton } from "../components/Button"
import LoaderGif from "../components/LoaderGif"

const Follow = ({ userId, artistId }) => (
  <Query query={FOLLOW_GQL} variables={{ userId }}>
    {({ loading, data }) => {
      if (loading) {
        return (<LoaderGif/>)
      }

      const { follow } = data

      if (follow.some(e => e.artistId === artistId)) {
        return (
          <Mutation
            mutation={DELETE_FOLLOW_GQL}
            refetchQueries={() => {
              return [{
                query: FOLLOW_GQL,
                variables: { userId }
              }]
            }}
            update={(cache) => {
              cache.writeData({ data: { follow: [] } })
            }}
          >
            {deleteFollow => (
              <FollowButton
                onClick={(event) => {
                  deleteFollow({ variables: { follow: { userId, artistId } } })
                }}
              >
                Following
              </FollowButton>
            )}
          </Mutation>
        )
      }

      return (
        <Mutation
          mutation={ADD_FOLLOW_GQL}
          refetchQueries={() => {
            return [{
              query: FOLLOW_GQL,
              variables: { userId }
            }]
          }}
          update={(cache) => {
            cache.writeData({ data: { follow: [] } })
          }}
        >
          {addFollow => (
            <FollowButton
              onClick={(event) => {
                addFollow({ variables: { follow: { userId, artistId } } })
              }}
            >
              Follow
            </FollowButton>
          )}
        </Mutation>
      )
    }}
  </Query>
)

export default Follow
