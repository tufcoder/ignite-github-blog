import axios from 'axios'

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: GITHUB_TOKEN,
  }
})
