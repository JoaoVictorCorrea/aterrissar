import axios from 'axios'

const VOOS_REST_API_URL = 'http://localhost:8080/voo';

class VooService{

  getVoos(){
    return axios.get(VOOS_REST_API_URL);
  }

  createVoo(voo){
    return axios.post(VOOS_REST_API_URL, voo);
  }
}

export default new VooService()