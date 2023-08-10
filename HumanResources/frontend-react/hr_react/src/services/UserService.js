import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/usr/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }
  getUserById(id) {
    return axios.get(USER_API_BASE_URL + "/" + id);
  }
  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }
  deleteUser(id) {
    return axios.delete(USER_API_BASE_URL + "/" + id);
  }
}

export default new UserService();
