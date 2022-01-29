import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-f3139/us-central1/api", //The API url (cloud function)
});

export default instance;
