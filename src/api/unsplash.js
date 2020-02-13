import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID cc5d2593dd12b09a7925fb9c8ff2836609a2f333cfb2cffb5320ff9ea61614b3'
    }
})