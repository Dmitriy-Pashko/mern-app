import axios from 'axios';

const api = {
  fetch() {
    return axios.get('http://localhost:3001/api/workers');
  },
  delete(id) {
    axios.delete(`http://localhost:3001/api/workers/${id}`);
  },
  create(worker) {
    return axios.post('http://localhost:3001/api/workers', worker);
  },
  update(worker, id) {
    return axios.put(`http://localhost:3001/api/workers/${id}`, worker);
  },

};

module.exports = api;
