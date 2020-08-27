import React, { useState } from "react"
import Sitemap from "./Sitemap"
import { burger } from "../../icons"
import { Button } from "../Button"
import useAuthUser from "../../hooks"

const withSitemap = (Component) => {
  const WithSitemapComponent = (props) => {
    const [hide, setHide] = useState(1)
    const authUser = useAuthUser()

    return (
      <>
        {!hide
          ? (
            <Sitemap user={authUser} onClose={() => setHide(1)}/>
          )
          : (
            <>
              <Button
                variant="contained"
                withIcon={burger}
                onClick={() => setHide(0)}
                className="sitemap__button"
              />
              <Component {...props}/>
            </>
          )
        }
      </>
    )
  }

  return (WithSitemapComponent)
}

export { withSitemap }
