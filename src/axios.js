import axios from 'axios'

const customAxios = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    'Authorization': localStorage.getItem("token")
  }
})

export default customAxios