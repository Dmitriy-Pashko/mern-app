import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import workers from './controller';

class Worker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: {
        name: '',
        bdate: '',
        position: '',
        salary: '',
      },
    };
    this.handleChange = workers.handleChange.bind(this);
    this.handleSubmit = workers.handleSubmit.bind(this);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <TextField
          autoFocus
          margin="dense"
          onChange={this.handleChange}
          id="name"
          label="Add full name"
          type="email"
          value={this.state.name}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          onChange={this.handleChange}
          id="bdate"
          label="Enter Birthday Date"
          type="email"
          value={this.state.bdate}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          onChange={this.handleChange}
          id="position"
          label="Enter Position"
          type="email"
          value={this.state.position}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          onChange={this.handleChange}
          id="salary"
          label="Enter Salary"
          type="email"
          value={this.state.salary}
          fullWidth
        />
        <Button onClick={(e) => { this.handleSubmit(e); }} color="primary">
          Submit
        </Button>
      </div>
    );
  }
}

export default Worker;
