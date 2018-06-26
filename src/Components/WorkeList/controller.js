import wlist from '../../Models/Worker/worker-handler';

const list = {
  handleDelete(id, e) {
    e.preventDefault();
    wlist.delete(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default list;
