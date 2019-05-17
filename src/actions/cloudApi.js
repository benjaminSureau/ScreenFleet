import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function postFile(files) {
    return instance.post('/api/upload');
}

export function getImage(keyFile) {
    return instance.get('/api/getImage');
}

export function getAllFiles() {
    return instance.get('/api/getAllFiles');
}
