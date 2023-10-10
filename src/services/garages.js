import api from '../plugins/api'

class GarageService {
    async getAllGarages() {
        const response = await api.get('https://backendparkitu-dev.fl0.io/api/garages')
        return response.data
    }
}

export default new GarageService()