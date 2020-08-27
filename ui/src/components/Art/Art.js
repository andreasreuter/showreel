import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { closeWhite, viewWhite, shareWhite } from "../../icons"
import "./Art.css"
import Image from "../Image"
import LoaderGif from "../LoaderGif"
import { Query } from "react-apollo"
import { ART_WITH_ARTIST_GQL } from "../../graphql"

const Art = () => {
  const { artistId, artId } = useParams()
  const history = useHistory()

  const handleClose = () => {
    history.push("/")
  }

  return (
    <Query query={ART_WITH_ARTIST_GQL} variables={{ artistId, artId }}>
      {({ loading, data }) => {
        if (loading) {
          return (<LoaderGif/>)
        }

        const {
          art: {
            title,
            url
          }
        } = data

        return (
          <div className="art">
            <div className="heading heading--variant-h1 heading--color-secondary">
              <h1>{title}</h1>
            </div>
            <div className="close">
              <Button
                variant="text"
                size="small"
                withIcon={closeWhite}
                onClick={handleClose}
              />
            </div>
            <div className="toolbar social-toolbar">
              <div className="layout--columns layout--columns-2">
                <Button
                  variant="text"
                  size="small"
                  color="secondary"
                  withIcon={viewWhite}
                  className="page-views page-views--padding"
                >
                  280 views
                </Button>
                <Button
                  variant="text"
                  size="small"
                  color="secondary"
                  withIcon={shareWhite}
                  className="share share--padding"
                >
                  Share
                </Button>
              </div>
            </div>
            <div className="art__image">
              <Image url={url} alt={title}/>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Art
