import React, { useState } from "react"
import SignIn from "./SignIn"
import { BareSignInButton } from "../../components/Button"
import useAuthUser from "../../hooks"

// TODO: it isn't finished but this hook should activate sign in for different
// screens. Maybe in conjunction with React Router.

const withSignIn = (Component) => {
  const WithSignInComponent = (props) => {
    const authUser = useAuthUser()
    const [hide, setHide] = useState(1)

    return (
      <>
        {!authUser && (
          <>
            {!hide && (
              <SignIn onClose={() => setHide(1)}/>
            )}

            <BareSignInButton handleClick={() => setHide(0)}>
              Log in
            </BareSignInButton>
          </>
        )}

        <Component {...props}/>
      </>
    )
  }

  return (WithSignInComponent)
}

export { withSignIn }
