import api from '../plugins/api'

class GarageService {
    async getAllGarages() {
        const response = await api.get('/garages/')
        return response.data
    }
}

export default new GarageService()