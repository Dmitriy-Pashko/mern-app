import axios from 'axios';

const api = {
  fetch() {
    return axios.get('http://localhost:3001/api/workers');
  },
};

module.exports = api;
