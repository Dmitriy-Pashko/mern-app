import { computed, action } from 'mobx';
import api from './api';


const list = {
  workerlist: computed,
  fetch: action(function () {
    return api.fetch();
  }),
};

module.exports = list;
