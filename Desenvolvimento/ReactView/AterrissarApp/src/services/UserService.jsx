import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/user';

const LOGIN_API_URL = 'http://localhost:8080/auth';

class UserService{

  getUsers(){
    return axios.get(USERS_REST_API_URL);
  }

  createUser(user){
    return axios.post(USERS_REST_API_URL + '/register', user);
  }

  userLogin(credentials){
    return axios.post(LOGIN_API_URL + '/login' + credentials);
  }
}

export default new UserService()