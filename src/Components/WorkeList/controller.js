const list = {
  handleDelete(id, e) {
    e.preventDefault();
    this.props.onWorkerDelete(id);
  },
  handleUpdate(worker) {
    this.props.onSetWorker(worker);
    this.props.onUpdateDialog();
  },
};
export default list;
