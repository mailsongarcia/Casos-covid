import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.covid19api.com/country/'
})