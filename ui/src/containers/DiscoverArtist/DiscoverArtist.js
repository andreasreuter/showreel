import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import Follow from "../Follow"
import { FollowButton } from "../../components/Button"
import { view, share } from "../../icons"
import "./DiscoverArtist.css"
import { Photography } from "../../components/MyVideo"
import Image from "../../components/Image"
import Residence from "../../components/Residence"
import Biography from "../../components/Biography"
import LoaderGif from "../../components/LoaderGif"
import { Query } from "react-apollo"
import { MY_VIDEO_GQL, FAVORITE_ART_GQL } from "../../graphql"

const ListItem = ({
  user: { userId } = {},
  artist: {
    artistId,
    firstName,
    lastName,
    categoryOfArt,
    practiceSinceYear,
    residence,
    biography
  }
}) => (
  <div className="wrapper--padding">
    <div className="list-item__title">
      <div className="layout--columns layout--columns-2">
        <Link to={artistId}>
          <div className="heading heading--variant-h2 heading--color-primary">
            <h2>{firstName} <span>{lastName}</span></h2>
          </div>
          <div className="heading heading--variant-h4 heading--color-primary">
            <h4>{categoryOfArt}</h4>
          </div>
        </Link>
        <Residence name={residence}/>
      </div>
    </div>
    <div className="thumbnails">
      <div className="layout--columns layout--columns-2">
        <div className="thumbnail__column">
          <Query query={MY_VIDEO_GQL} variables={{ artistId }}>
            {({ loading, data }) => {
              if (loading) {
                return (<LoaderGif/>)
              }

              const {
                artist: {
                  photography
                }
              } = data

              return (
                <Link to={artistId + "/watch"}>
                  <Photography url={photography} alt={`${firstName} ${lastName} my video`}/>
                </Link>
              )
            }}
          </Query>
        </div>
        <div className="thumbnail__column">
          <Query query={FAVORITE_ART_GQL} variables={{ artistId }}>
            {({ loading, data }) => {
              if (loading) {
                return (<LoaderGif/>)
              }

              const {
                favoriteArt: {
                  artId,
                  url
                }
              } = data

              return (
                <Link to={artistId + "/arts/" + artId}>
                  <Image url={url} alt={`${firstName} ${lastName} demo art`}/>
                </Link>
              )
            }}
          </Query>
        </div>
      </div>
    </div>
    <Biography
      foldedText={biography}
      text={biography}
      moreLink={artistId}
    />
    <div>
      <div className="heading heading--variant-h3 heading--color-primary">
        <h3>Practice since</h3>
      </div>
      <p>{practiceSinceYear}</p>
    </div>
    <div className="toolbar">
      <div className="layout--columns layout--columns-3">
        <Button
          variant="contained"
          size="small"
          withIcon={view}
          className="page-views page-views--padding"
        >
          280 views
        </Button>
        <Button
          variant="contained"
          size="small"
          withIcon={share}
          className="share share--padding"
        >
          Share
        </Button>
        {userId
          ?
            <Follow userId={userId} artistId={artistId}/>
          :
            <FollowButton
              onClick={(event) => { console.log("click follow") }}
            >
              Follow
            </FollowButton>
        }
      </div>
    </div>
  </div>
)

const DiscoverArtist = ({ user, artists }) => (
  <div className="discover-artist">
    {artists.map((artist, index, thisArtists) => (
      <div key={index}>
        <ListItem user={user} artist={artist}/>
        { thisArtists.length - 1 > index &&
          <hr/>
        }
      </div>
    ))}
  </div>
)

export default DiscoverArtist
