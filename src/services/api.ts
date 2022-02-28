import axios from 'axios'

export const umamiApi = axios.create({
  baseURL: process.env.UMAMI_API_URL
})
