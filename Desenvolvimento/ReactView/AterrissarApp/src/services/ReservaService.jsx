import axios from 'axios'

const RESERVAS_REST_API_URL = 'http://localhost:8080/reserva';

class ReservaService{

  getReservas(){
    return axios.get(RESERVAS_REST_API_URL);
  }

  getReservaById(id) {
    return axios.get(RESERVAS_REST_API_URL + '/' + id);
  }

  createReserva(reserva){
    return axios.post(RESERVAS_REST_API_URL, reserva);
  }
}

export default new ReservaService()