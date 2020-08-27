import { useState, useEffect } from "react"
import { useQuery } from "@apollo/react-hooks"
import { LOCAL_AUTH_USER_GQL } from "../graphql"

export default function useAuthUser() {
  const [authUser, setAuthUser] = useState(0)
  const { error, data } = useQuery(LOCAL_AUTH_USER_GQL)

  useEffect(() => {

  }, [error])

  useEffect(() => {
    if (error) {
      setAuthUser(0)
    } else {
      setAuthUser(data?.authUser)
    }
  }, [error, data])

  return (authUser)
}
