import api from './Model/api';

const workers = {
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
      api.create(wrk)
        .then(() => {
          this.props.history.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api.create(wrk, id)
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
