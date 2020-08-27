import React, { useEffect } from "react"
import "./FacebookButton.css"

const FacebookButton = ({ disabled, onAfterAuth }) => {
  useEffect(() => {
    const fbRoot = document.createElement("div")
    fbRoot.id = "fb-root"
    document.body.appendChild(fbRoot)

    const script = document.createElement("script")

    script.src = "https://connect.facebook.net/en_GB/sdk.js"
    script.async = true
    script.defer = true
    script.crossorigin = "anonymous"

    document.head.appendChild(script)

    window.fbAsyncInit = () => {
      window.FB.init({
        appId            : "1081093752265064",
        autoLogAppEvents : true,
        xfbml            : true,
        version          : "v6.0"
      })

      // TODO: useAuth hooks should subscribe to FB auth events and handle
      // the user database.
      window.FB.Event.subscribe("auth.authResponseChange", onAfterAuth)
    }

    return (() => {
      document.body.removeChild(fbRoot)
      document.head.removeChild(script)
    })
  })

  return (
    <div className={`facebook-button ${disabled ? "facebook-button--disabled" : ""}`}>
      <div
        className="fb-login-button"
        data-width="100%"
        data-size="large"
        data-button-type="login_with"
        data-scope="public_profile, email, user_location"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    </div>
  )
}

export { FacebookButton }
