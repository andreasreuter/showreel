import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { close, view, share } from "../../icons"
import "./ArtistDetails.css"
import { withSitemap } from "../../components/Sitemap"
import { Photography } from "../../components/MyVideo"
import Carousel, { CarouselItem } from "../../components/Carousel"
import Image from "../../components/Image"
import Residence from "../../components/Residence"
import Biography from "../../components/Biography"
import LoaderGif from "../../components/LoaderGif"
import { Query } from "react-apollo"
import { ARTIST_GQL, MY_VIDEO_GQL, ARTS_OF_ARTIST_GQL } from "../../graphql"

const ArtistDetails = ({
    firstName,
    lastName,
    categoryOfArt,
    residence,
    biography,
    practiceSinceYear
  }) => {
    const { artistId } = useParams()
    const history = useHistory()

    const handleClose = () => {
      history.goBack()
    }

    return (
      <Query query={ARTIST_GQL} variables={{ artistId }}>
        {({ loading, data }) => {
          if (loading) {
            return (<LoaderGif/>)
          }

          const {
            artist: {
              firstName,
              lastName,
              categoryOfArt,
              practiceSinceYear,
              residence,
              biography
            }
          } = data

          return (
            <div className="artist-details card-view card-view--padding">
              <div className="card-view__close">
                <Button
                  variant="text"
                  size="small"
                  withIcon={close}
                  onClick={handleClose}
                />
              </div>
              <div className="card-view__title">
                <div className="layout--columns layout--columns-2">
                  <header>
                    <div className="heading heading--variant-h2 heading--color-primary">
                      <h2>{firstName} <span>{lastName}</span></h2>
                    </div>
                    <div className="heading heading--variant-h4 heading--color-primary">
                      <h4>{categoryOfArt}</h4>
                    </div>
                  </header>
                  <Residence name={residence}/>
                </div>
              </div>
              <Carousel>
                <Query query={MY_VIDEO_GQL} variables={{ artistId }}>
                  {({ loading, data }) => {
                    if (loading) {
                      return (<LoaderGif/>)
                    }

                    const {
                      artist: {
                        firstName,
                        lastName,
                        photography
                      }
                    } = data

                    return (
                      <CarouselItem>
                        <Link to={artistId + "/watch"}>
                          <Photography
                            url={photography}
                            alt={`${firstName} ${lastName} my video`}
                            watchMyVideo
                          />
                        </Link>
                      </CarouselItem>
                    )
                  }}
                </Query>
                <Query query={ARTS_OF_ARTIST_GQL} variables={{ artistId }}>
                  {({ loading, data }) => {
                    if (loading) {
                      return (<LoaderGif/>)
                    }

                    const { arts } = data

                    return (
                      arts.map(({ artId, url, title }, index) => (
                        <CarouselItem key={index}>
                          <Link to={artistId + "/arts/" + artId}>
                            <Image url={url} alt={title}/>
                          </Link>
                        </CarouselItem>
                      ))
                    )
                  }}
                </Query>
              </Carousel>
              <div className="toolbar">
                <div className="layout--columns layout--columns-3">
                  <Button variant="contained" size="small" withIcon={view} className="page-views page-views--padding">
                    280 views
                  </Button>
                  <Button variant="contained" size="small" withIcon={share} className="share share--padding">
                    Share
                  </Button>
                  <Button variant="contained" size="small" color="secondary">
                    Follow
                  </Button>
                </div>
              </div>
              <Biography foldedText={biography} text={biography}/>
              <div>
                <div className="heading heading--variant-h3 heading--color-primary">
                  <h3>Practice since</h3>
                </div>
                <p>{practiceSinceYear}</p>
              </div>
              <div className="toolbar">
                <div className="layout--columns layout--columns-2">
                  <Button variant="outlined" size="large" color="primary">
                    Contact Artist
                  </Button>
                  <Button variant="contained" size="large" color="primary">
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }

export default withSitemap(ArtistDetails)
