import axios from "axios";

const PERSONNEL_API_BASE_URL = "http://localhost:8080/api/hr/personnel";

class PersonnelService {
  getPersonnel() {
    return axios.get(PERSONNEL_API_BASE_URL);
  }

  getPersonnelById(id) {
    return axios.get(PERSONNEL_API_BASE_URL + "/" + id);
  }

  createPersonnel(personnel) {
    return axios.post(PERSONNEL_API_BASE_URL, personnel);
  }

  deletePersonnel(id) {
    return axios.delete(PERSONNEL_API_BASE_URL + "/" + id);
  }

  updatePersonnel(personnel, id) {
    return axios.put(PERSONNEL_API_BASE_URL + "/" + id, personnel);
  }
}

export default new PersonnelService();
