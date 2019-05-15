import axios from 'axios';

export const baseUrl = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {},
});

export function getCompositions() {
    return instance.get('/api/compositions');
}

export function createComposition() {
    return instance.post('/api/compositions', {
        moduleId: null
    });
}
