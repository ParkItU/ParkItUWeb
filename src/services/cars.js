// services/cars.js

import api from '../plugins/api';

class CarService {
    async getAllCars() {
        try {
            const response = await api.get('/cars/');
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar carros:', error);
            throw error;
        }
    }

    async getCarImage(carId) {
        try {
            const response = await api.get(`/cars/${carId}/image`);
            return response.data.url;
        } catch (error) {
            console.error(`Erro ao obter imagem do carro ${carId}:`, error);
            throw error;
        }
    }
}

export default new CarService();
