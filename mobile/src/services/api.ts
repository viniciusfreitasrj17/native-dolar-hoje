import axios from "axios";

const services = axios.create({
  baseURL: "http://api-dolar.vinicius17-node.meu-br.com/",
  // baseURL: "http://localhost:3333/",
});

export default services;
