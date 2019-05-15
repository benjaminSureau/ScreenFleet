import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function getModules() {
    return instance.get('/api/modules');
}

export function getModule(id) {
    return instance.get(`/api/modules/${id}`);
}

export function createModule(data) {
    return instance.post('/api/modules', data);
}

export function putModule(id, data) {
    return instance.put(`/api/modules/${id}`, data);
}

export function deleteModule(id) {
    return instance.delete(`/api/modules/${id}`);
}
