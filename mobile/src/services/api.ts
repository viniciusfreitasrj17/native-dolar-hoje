import axios from "axios";

const services = axios.create({
  baseURL: "http://192.168.100.4:3333/",
  // baseURL: "http://localhost:3333/",
});

export default services;
