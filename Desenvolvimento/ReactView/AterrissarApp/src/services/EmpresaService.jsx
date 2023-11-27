import axios from 'axios'

const EMPRESAS_REST_API_URL = 'http://localhost:8080/empresa';

class EmpresaService{

  getEmpresas(){
    console.log("Testes");
    return axios.get(EMPRESAS_REST_API_URL);
  }

  createEmpresa(empresa){
    return axios.post(EMPRESAS_REST_API_URL, empresa);
  }
}

export default new EmpresaService()