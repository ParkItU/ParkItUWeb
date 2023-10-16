import api from '../plugins/api'

class CarService {
    async getAllCars() {
        const response = await api.get('/cars/')
        return response.data
    }
}

export default new CarService()