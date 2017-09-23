import axios from 'axios'

export default function getIP () {
  return axios.get('https://api.ipify.org?format=json')
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error.response.data))
}

