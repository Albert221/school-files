import axios from 'axios';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    transformRequest: [
        ...axios.defaults.transformRequest,
        (data, headers) => {
            const jwt = sessionStorage.getItem('userJwt');
            if (!jwt || jwt === '') {
                return data;
            }

            headers['Authorization'] = `Bearer ${jwt}`;
            return data;
        }
    ]
});

export const signIn = (email, password) => axiosInstance
    .post('/signin', {
        email: email,
        password: password
    })
    .then(response => response.data.token);

export const fetchMenu = () => axiosInstance
    .get('/section')
    .then(response => response.data);

export const addSection = name => axiosInstance
    .post('/section', {
        name: name
    })
    .then(response => response.data);

export const removeSection = id => axiosInstance
    .delete(`/section/${id}`);

export const addSubject = (name, sectionId) => axiosInstance
    .post('/subject', {
        name: name,
        sectionId, sectionId
    })
    .then(response => response.data);

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