import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.8.170:8000",
});

export default instance;
