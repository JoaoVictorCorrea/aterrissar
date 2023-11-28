import axios from 'axios'

const EMPRESAS_REST_API_URL = 'http://localhost:8080/empresa';

class EmpresaService{

  getEmpresas(){
    return axios.get(EMPRESAS_REST_API_URL);
  }

  getEmpresaById(id) {
    return axios.get(EMPRESAS_REST_API_URL + '/' + id);
  }

  createEmpresa(empresa){
    return axios.post(EMPRESAS_REST_API_URL, empresa);
  }
}

export default new EmpresaService()