import axios from 'axios';

export const baseUrl = 'http://localhost:3800';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'multipart/form-data'
    },
});

export function postFile(formData) {
    return instance.post('/api/upload', formData);
}

export function getImage(keyFile) {
    return instance.get('/api/getImage');
}

export function getAllFiles() {
    return instance.get('/api/getAllFiles');
}
