import axios from 'axios';

const API_URL = 'http://localhost:8181';

const axiosInstance = axios.create({
    baseURL: API_URL,
    transformRequest: [
        ...axios.defaults.transformRequest,
        (data, headers) => {
            const jwt = sessionStorage.getItem('userJwt');
            if (!jwt || jwt === '') {
                return;
            }

            headers['Authorization'] = `Bearer ${jwt}`;
            return data;
        }
    ]
});

export const signIn = (email, password) => axiosInstance
    .post('/auth/local', {
        identifier: email,
        password: password
    })
    .then(response => response.data.jwt);

export const fetchMenu = () => axiosInstance
    .get('/sections')
    .then(response => response.data);

export const addSection = name => axiosInstance
    .post('/sections', {
        name: name
    })
    .then(response => response.data);

export const removeSection = id => axiosInstance
    .delete(`/sections/${id}`);

export const addFile = (file, uploadProgress) => axiosInstance
    .post('/file', new FormData(file), {
        onUploadProgress: event => {
            uploadProgress(Math.round(event.loaded * 100 / event.total));
        },
        validateStatus: () => true
    })
    .then(response => {
        return response.headers.location.split('/').pop();
    });