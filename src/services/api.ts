import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org',
  params: { api_key: process.env.API_KEY }
})
