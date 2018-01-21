import axios from 'axios';

export const api = {
    createEvent: (data) => {
        return axios({
            url: '/api/event',
            method: 'POST',
            data,
        });
    }
};