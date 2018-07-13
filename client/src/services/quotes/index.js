import {API_ENDPOINT, QUOTES_ENDPOINT} from '../../Constants'
import fetch from 'isomorphic-fetch'

export const fetchQuotes = () => {
  return fetch(`${API_ENDPOINT}${QUOTES_ENDPOINT}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(response => {
    return response.json()
  }).then(response => {
    return response
  })
}
