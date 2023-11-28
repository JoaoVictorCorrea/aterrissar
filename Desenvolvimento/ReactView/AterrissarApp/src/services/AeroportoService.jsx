import axios from 'axios'

const AEROPORTOS_REST_API_URL = 'http://localhost:8080/aeroporto';

class AeroportoService{

  getAeroportos(){
    return axios.get(AEROPORTOS_REST_API_URL);
  }

  getAeroportoById(id) {
    return axios.get(AEROPORTOS_REST_API_URL + '/' + id);
  }

  createAeroporto(aeroporto){
    return axios.post(AEROPORTOS_REST_API_URL, aeroporto);
  }
}

export default new AeroportoService()