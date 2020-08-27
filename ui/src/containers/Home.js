import React from "react"
import { withSitemap } from "../components/Sitemap"
import { withSignIn } from "./SignIn"
import DiscoverArtist from "./DiscoverArtist"
import LoaderGif from "../components/LoaderGif"
import useAuthUser from "../hooks"
import { Query } from "react-apollo"
import { ALL_ARTISTS_GQL } from "../graphql"

const Home = () => {
  const authUser = useAuthUser()

  return (
    <Query query={ALL_ARTISTS_GQL}>
      {({ loading, data }) => {
        if (loading) {
          return (<LoaderGif/>)
        }

        const { artists } = data

        return (
          <DiscoverArtist user={authUser} artists={artists}/>
        )
      }}
    </Query>
  )
}

export default withSitemap(withSignIn(Home))
