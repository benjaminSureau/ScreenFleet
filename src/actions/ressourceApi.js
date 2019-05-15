import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function getRessources() {
    return instance.get('/api/ressources');
}

export function getRessourceById(id) {
    return instance.get(`/api/ressources/${id}`);
}

export function createRessource(data) {
    return instance.post('/api/ressources', data);
}

export function putRessource(id, data) {
    return instance.put(`/api/ressources/${id}`, data);
}

export function deleteRessource(id) {
    return instance.delete(`/api/ressources/${id}`);
}
