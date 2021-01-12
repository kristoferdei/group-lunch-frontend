import Axios, { AxiosRequestConfig } from 'axios'

export interface Credentials {
  username: string
  fullName: string
  email: string
  password: string
}

interface LoginApiResponse {
  accessToken: string
  username: string
  fullName: string
  email: string
}

export const tokenKey = 'token_key'
export const userKey = 'user_key'
export const nameKey = 'name_key'
export const emailKey = 'email_key'

const storeToken = (accessToken: string, username: string, fullName: string, email: string): any => {
  localStorage.setItem(tokenKey, accessToken)
  localStorage.setItem(userKey, username)
  localStorage.setItem(nameKey, fullName)
  localStorage.setItem(emailKey, email)
}

export const onLogin = async (data: Credentials): Promise<any> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    headers: { 'Access-Control-Allow-Origin': '*' },
    url: 'http://localhost:4000/auth/login',
    data,
  }

  try {
    const {
      data: { accessToken, username, fullName, email },
    } = await Axios.request<LoginApiResponse>(requestConfig)
    storeToken(accessToken, username, fullName, email)
    return {
      accessToken,
    }
  } catch (e) {
    console.error(e)
    return { error: e.response.data.message }
  }
}

export const onRegister = async (data: Credentials): Promise<any> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'http://localhost:4000/auth/register',
    data,
  }

  try {
    const { data: token, username, fullName, email } = await Axios.request(requestConfig)
    storeToken(token, username, fullName, email)
    return {
      token,
    }
  } catch (e) {
    console.error(e)
    return { error: e.response.data.message }
  }
}
