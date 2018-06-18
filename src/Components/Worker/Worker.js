import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    this.handleClickOpen = workers.handleClickOpen.bind(this);
    this.handleClose = workers.handleClose.bind(this);
    this.handleChange = workers.handleChange.bind(this);
    this.handleSubmit = workers.handleSubmit.bind(this);
  }
  render() {
    const { currentWorker } = this.props;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Create Worker</Button>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Worker</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new worker please fill all of the fields below
            </DialogContentText>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={(e) => { this.handleSubmit(currentWorker, e); }} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Worker;
