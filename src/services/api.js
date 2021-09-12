
import axios from 'axios'

const api = {
  call: () => axios.create({
    baseURL: 'https://first-project-reactjs.000webhostapp.com/wp-api/wp-json'
  }),
  callWithToken: () => axios.create({
    baseURL: 'https://first-project-reactjs.000webhostapp.com/wp-api/wp-json',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('access_token')
    }
  })
}

export default api