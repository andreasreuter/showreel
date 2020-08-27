import React, { useState } from "react"
import "./SignIn.css"
import logo from "../../images/logo.png"
import { withModal } from "../../components/Modal"
import CheckBox from "../../components/CheckBox"
import { FacebookButton } from "../../components/Facebook"
import authReducer from "../../reducers/auth"
import userReducer from "../../reducers/user"
import { Mutation } from "@apollo/react-components"
import { ADD_USER_GQL, LOCAL_AUTH_USER_GQL } from "../../graphql"
import { has, get } from "lodash"

const SignIn = ({ onClose }) => {
  const [agreed, setAgreed] = useState(0)

  const receiveUserData = (accessToken) => {
    return (
      new Promise((resolve, reject) => {
        window.FB.api("/me", {
            fields: "first_name, last_name, email, picture, location",
            accessToken: accessToken
          }, (response) => {
            if (!has(response, "error")) {
              resolve(response)
            } else {
              reject(get(response, "error"))
            }
          })
      })
    )
  }

  return (
    <div className="sign-in">
      <img className="logo" src={logo} alt="logo"/>
      <CheckBox onClick={() => setAgreed(!agreed)}>
        I agree to <b>Terms of Use</b> and <b>Privacy Policy</b>, and to receive emails.
      </CheckBox>
      <Mutation
        mutation={ADD_USER_GQL}
        update={(cache, { data: { addUser: user } }) => {
          cache.writeQuery({
            query: LOCAL_AUTH_USER_GQL,
            data: { authUser: user }
          })
        }}
      >
        {addUser => (
          <FacebookButton
            disabled={!agreed}
            onAfterAuth={(response) => {
              if (response.status === "connected") {
                const { authResponse } = response
                const { accessToken } = authResponse

                receiveUserData(accessToken)
                  .then((userData) => {
                    const user = userReducer(userData)
                    const auth = authReducer(authResponse)

                    addUser({
                      variables: {
                        user: Object.assign(user, auth)
                      }
                    })
                  })
                  .catch((error) => {
                    console.warn(error)
                  })
              }
            }}
          />
        )}
      </Mutation>
      <div className="google-privacy-policy">
        This site is protected by reCAPTCHA and the Google Privacy Policy Terms of Service apply.
      </div>
    </div>
  )
}

export default withModal(SignIn)
