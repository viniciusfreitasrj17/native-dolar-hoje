import axios from 'axios';

const services = axios.create({
  baseURL: '';
})

export default services;