import axios from 'axios'

export default function getIP () {
  return axios.get('https://api.ipify.org?format=json')
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      if (error) {
        console.log(error)
        return Promise.reject(error)
      }
      else
        return Promise.reject({})
    })
}

