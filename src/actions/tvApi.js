import axios from 'axios';

export const baseUrl = 'http://localhost:3001';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function getTV() {
    return instance.get('/api/TVs');
}

export function createTV() {
    return instance.post('/api/TVs', {
        moduleId: null
    });
}

export function putTV(id, data) {
    return instance.put(`/api/TVs/${id}`, data);
}

export function deleteTV(id) {
    return instance.delete(`/api/TVs/${id}`);
}
