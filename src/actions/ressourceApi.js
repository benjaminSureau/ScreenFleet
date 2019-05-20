import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function getRessources() {
    return instance.get('/api/resources');
}

export function getRessourceById(id) {
    return instance.get(`/api/resources/${id}`);
}

export function createRessource(data) {
    return instance.post('/api/resources', data);
}

export function putRessource(id, data) {
    return instance.put(`/api/resources/${id}`, data);
}

export function deleteRessource(id) {
    return instance.delete(`/api/resources/${id}`);
}
