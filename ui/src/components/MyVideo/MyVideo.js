import React, { useState }  from "react"
import { useParams, useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { closeWhite, shareWhite } from "../../icons"
import "./MyVideo.css"
import LoaderGif from "../LoaderGif"
import { Query } from "react-apollo"
import { MY_VIDEO_GQL } from "../../graphql"

const MyVideo = ({ location }) => {
  const [hide, setHide] = useState(1)
  const { artistId } = useParams()
  const history = useHistory()

  const handleClose = () => {
    history.goBack()
  }

  const videoEnded = (event) => {
    setHide(0)
  }

  return (
    <Query query={MY_VIDEO_GQL} variables={{ artistId }}>
      {({ loading, data }) => {
        if (loading) {
          return (<LoaderGif/>)
        }

        const {
          artist: {
            firstName,
            lastName,
            myVideo
          }
        } = data

        return (
          <div className="my-video">
            <div className="heading heading--variant-h1 heading--color-secondary">
              <h1>{firstName} <span>{lastName}</span></h1>
            </div>
            <div className="close">
              <Button
                variant="text"
                size="small"
                withIcon={closeWhite}
                onClick={handleClose}
              />
            </div>
            <div className={`toolbar social-toolbar ${!hide ? "toolbar--show" : "toolbar--hide"}`}>
              <div className="layout--columns layout--columns-2">
                <Button variant="text" size="small" color="secondary" withIcon={shareWhite}>
                  Share
                </Button>
                <Button variant="contained" size="small" color="secondary">
                  Follow
                </Button>
              </div>
            </div>
            <div className="my-video__container">
              <video muted playsInline autoPlay onEnded={videoEnded}>
                <source src={myVideo} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default MyVideo
