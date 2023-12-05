// garages.js

import api from '../plugins/api'

export default {
    getAllGarages: async () => {
        try {
            const response = await api.get('/garages');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar garagens:', error);
            throw error;
        }
    },
};