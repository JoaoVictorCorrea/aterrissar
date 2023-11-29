import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/user';

class UserService{

  getUsers(){
    return axios.get(USERS_REST_API_URL);
  }

  createUser(user){
    return axios.post(USERS_REST_API_URL + '/register/', user);
  }

  userLogin(credentials){
    return axios.post(USERS_REST_API_URL + '/auth/login/' + credentials);
  }
}

export default new UserService()