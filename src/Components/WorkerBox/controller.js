import axios from 'axios';

const _ = require('lodash');

const box = {
  loadWorkers() {
    axios.get(this.props.url)
      .then((response) => {
        this.setState({ list: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  modalChange(worker) {
    axios.post(this.props.url, worker)
      .then((response) => {
        const { list } = this.state;
        const newList = list.concat([response.data]);
        this.setState({ list: newList });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteWorker(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(() => {
        const newList = this.state.list.filter((w) => { return w._id !== id; });
        this.setState({ list: newList });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setWorker(curWorker) {
    this.setState({
      worker: curWorker,
    });
  },
  workerUpdate(id, worker) {
    axios.put(`${this.props.url}/${id}`, worker)
      .then(() => {
        console.log(worker);
        const newList = _.cloneDeep(this.state.list);
        console.log(newList);
        const wrk = _.find(newList, { _id: id });
        console.log(wrk);
        wrk.name = worker.name;
        wrk.bdate = worker.bdate;
        wrk.position = worker.position;
        wrk.salary = worker.salary;
        this.setState({ list: newList });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  dialogOpen() {
    this.setState({ dialog: true });
  },
  dialogClose() {
    this.setState({ dialog: false });
  },
};
export default box;
