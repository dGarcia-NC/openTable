import axios from "axios"
import { getCookie, deleteCookie } from "cookies-next"
import { useContext } from "react"
import { AuthenticationContext } from "../app/context/AuthContext"

const useAuth = () => {

  const { setAuthState } = useContext(AuthenticationContext)

  const signin = async ({ email, password }: { email: string, password: string }, handleClose: () => void) => {
    setAuthState({
      data: null,
      error: null,
      loading: false,
    })
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signin', {
        email,
        password
      })
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      })
      handleClose()
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      })
    }
  }
  const signup = async (
    { email, password, firstName, lastName, city, phone }:
      { email: string, password: string, firstName: string, lastName: string, city: string, phone: string },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: false,
    })
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        email,
        password, firstName,
        lastName,
        city,
        phone,
      })
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      })
      handleClose()
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      })
    }
  }

  const fetchUser = async () => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    })
    try {
      const jwt = getCookie('jwt')
      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        })
      }

      const response = await axios.get('http://localhost:3000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })

      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      })
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      })
    }
  }

  const signout = () => {
    deleteCookie('jwt')
    setAuthState({
      data: null,
      error: null,
      loading: false,
    })
  }

  return {
    signin,
    signup,
    signout,
  }
}

export default useAuth
