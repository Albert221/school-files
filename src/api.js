import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const addFile = (file, uploadProgress) => axios
    .post(`${API_URL}/file`, new FormData(file), {
        onUploadProgress: event => {
            uploadProgress(Math.round(event.loaded * 100 / event.total));
        }
    });