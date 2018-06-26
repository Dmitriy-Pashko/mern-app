import axios from 'axios';
import api from '../Worker/Model/api';

const list = {
  handleDelete(id, e) {
    e.preventDefault();
    api.delete(id);
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export default list;
