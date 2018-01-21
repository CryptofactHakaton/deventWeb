import axios from 'axios';

export const api = {
    getList: () => {
        return axios({
            url: '/api/events',
            method: 'GET',
        });
    },
    createEvent: (data) => {
        return axios({
            url: '/api/event',
            method: 'POST',
            data,
        });
    },
    getEvent: (id) => {
        return axios({
            url: `/api/events/${id}`,
            method: 'GET',
        });
    },
    buyTicket: (id, email, addr) => {
        return axios({
            url: `/api/event/${id}/buy`,
            method: 'POST',
            data: {
                email,
                addr,
            },
        });
    },
};
