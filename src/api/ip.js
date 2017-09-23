import axios from 'axios'

export default function getIP () {
  return axios.get('https://api.ipify.org?format=json')
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      if (error)
        return Promise.reject(error.response.data)
      else
        return Promise.reject({})
    })
}

