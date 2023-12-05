// src/services/carsingarage.js
import api from '../plugins/api'

export default {
    getCarsInGarage: async (garageId) => {
        try {
            console.log(`Fetching cars in garage with ID ${garageId}`);
            const response = await api.get(`/carsingarage?idGarage=${garageId}`);
            const carsInGarage = response.data;

            // Mapear cada carro e aguardar a Promise ser resolvida
            const cars = await Promise.all(carsInGarage.map(async (car) => {
                const carDetails = await api.get(`/cars/${car.idCar}`);
                return {
                    ...car,
                    details: carDetails.data,
                };
            }));

            console.log('Cars in garage:', cars);
            return cars;
        } catch (error) {
            console.error('Error fetching cars in garage:', error);
            throw error;
        }
    },
};