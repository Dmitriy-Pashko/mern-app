import wlist from '../../Models/Worker/worker-handler';

const box = {
  loadWorkers() {
    wlist.fetch();
  },
};
export default box;
