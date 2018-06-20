import axios from 'axios';

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
};
export default box;
