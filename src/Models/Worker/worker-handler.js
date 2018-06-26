import { computed, action } from 'mobx';
import api from './api';


const wlist = {
  workerlist: [],
  fetch: action(function () {
    return api.fetch();
  }),
  delete: action(function (id) {
    api.delete(id);
  }),
  create: action(function (worker) {
    return api.create(worker);
  }),
  update: action(function (worker, id) {
    return api.update(worker, id);
  }),
};

module.exports = wlist;
