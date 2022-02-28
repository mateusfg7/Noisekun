import { umamiApi } from './api'

export async function getUmamiToken(): Promise<string> {
  const token = await umamiApi.post('/api/auth/login', {
    username: process.env.UMAMI_LOGIN_USER,
    password: process.env.UMAMI_LOGIN_PASSWORD
  })

  return token.data.token
}
