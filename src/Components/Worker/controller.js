import axios from 'axios';

const workers = {
  createWorker(worker) {
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
  handleChange(e) {
    const { worker } = this.state;
    worker[e.target.id] = e.target.value;
    this.setState({ worker });
  },
  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const wrk = {
      name: '', bdate: '', position: '', salary: '',
    };
    wrk.name = this.state.worker.name;
    wrk.bdate = this.state.worker.bdate;
    wrk.position = this.state.worker.position;
    wrk.salary = this.state.worker.salary;
    if (!id) {
      axios.post('http://localhost:3001/api/workers', wrk)
        .then(() => {
          this.props.history.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios.put(`http://localhost:3001/api/workers/${id}`, wrk)
        .then(() => {
          this.props.history.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
};
export default workers;
