const workers = {
  handleChange(e) {
    const { worker } = this.state;
    worker[e.target.id] = e.target.value;
    this.setState({ worker });
  },
  handleSubmit(curwrk, e) {
    e.preventDefault();
    if (!curwrk._id) {
      const wrk = {
        name: '', bdate: '', position: '', salary: '',
      };
      wrk.name = this.state.worker.name;
      wrk.bdate = this.state.worker.bdate;
      wrk.position = this.state.worker.position;
      wrk.salary = this.state.worker.salary;
      this.props.onModalChange(wrk);
    } else {
      console.log(curwrk);
      const cw = curwrk;
      console.log(this.state.worker);
      cw.name = this.state.worker.name;
      cw.bdate = this.state.worker.bdate;
      cw.position = this.state.worker.position;
      cw.salary = this.state.worker.salary;
      console.log(cw);
      this.props.onWorkerUpdate(cw._id, cw);
    }
  },
  handleClickOpen() {
    this.props.onDialogOpen();
  },
  handleClose() {
    this.props.onDialogClose();
  },
};
export default workers;
