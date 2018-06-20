import axios from 'axios';

const list = {
  handleDelete(id, e) {
    e.preventDefault();
    console.log(id);
    axios.delete(`http://localhost:3001/api/workers/${id}`)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default list;
