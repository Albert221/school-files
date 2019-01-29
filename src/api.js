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
        sectionId: sectionId
    })
    .then(response => response.data);

export const removeSubject = id => axiosInstance
    .delete(`/subject/${id}`);

export function uploadFile(file, uploadProgress) {
    const formData = new FormData();
    formData.append('file', file);

    return axiosInstance
        .post('/file/upload', formData, {
            onUploadProgress: event => {
                uploadProgress(Math.round(event.loaded * 100 / event.total));
            },
            validateStatus: () => true
        })
        .then(response => response.data.filename);
}

export const addFile = ({ name, description, filename, subjectId }) => axiosInstance
    .post(`/subject/${subjectId}/file`, {
        name: name,
        description: description,
        filename: filename
    })
    .then(response => response.data);

export const fetchFiles = subjectId => axiosInstance
    .get(`/subject/${subjectId}/file`)
    .then(response => response.data)
    .then(data => data.map(file => ({
        id: file.id,
        name: file.name,
        description: file.description,
        filename: file['metadata.filename'],
        size: file['metadata.size'],
        downloaded: file.downloads
    })))

export const sendFileUrl = fileId => `${API_URL}/file/${fileId}/file`;