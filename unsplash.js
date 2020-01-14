import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 67bb72b93646f63e54e8a8522cad20a26936170426016056d4eeb86faa3f78c2' 
    }
})