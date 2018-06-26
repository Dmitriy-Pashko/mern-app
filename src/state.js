import { observable } from 'mobx';

const store = observable({
  workers: [],
  workerList: [],
});

module.exports = store;
