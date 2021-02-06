import axios from 'axios'

const http = axios.create({
    baseURL: 'https://node-feedbacktg.herokuapp.com/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default http
