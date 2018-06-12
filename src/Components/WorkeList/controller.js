const list = {
  handleDelete(id, e) {
    e.preventDefault();
    this.props.onWorkerDelete(id);
  },
  handleUpdate(worker) {
    const modal = true;
    this.props.onSetWorker(worker, modal);
  },
};
export default list;
