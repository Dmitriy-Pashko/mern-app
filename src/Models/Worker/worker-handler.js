import { computed, action } from 'mobx';
import store from './state';
import api from './api';


const wlist = {
  workerlist: [],
  setWorkeList: action(function (list) {
    store.workerList = list;
  }),
  fetch: action(function () {
    return api.fetch()
      .then((data) => {
        this.setWorkeList(data);
        return data;
      });
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
