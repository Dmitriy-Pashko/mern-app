import { observable, action } from 'mobx';

const store = observable({
  worker: {},
  workerList: [],
  setWorker: action(function (newWorker) {
    this.worker = newWorker;
  }),
});

module.exports = store;
