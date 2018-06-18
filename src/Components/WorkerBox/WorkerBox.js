import React, { Component } from 'react';
import WorkerList from '../WorkeList/WorkerList';
import Worker from '../Worker/Worker';
import box from './controller';
import '../../Styles/App.css';

class WorkerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      worker: {},
      dialog: false,
    };
    this.loadWorkers = box.loadWorkers.bind(this);
    this.modalChange = box.modalChange.bind(this);
    this.deleteWorker = box.deleteWorker.bind(this);
    this.setWorker = box.setWorker.bind(this);
    this.workerUpdate = box.workerUpdate.bind(this);
    this.dialogOpen = box.dialogOpen.bind(this);
    this.dialogClose = box.dialogClose.bind(this);
  }
  componentDidMount() {
    this.loadWorkers();
  }
  render() {
    return (
      <div>
        <WorkerList
          workerList={this.state.list}
          onWorkerDelete={this.deleteWorker}
          onSetWorker={this.setWorker}
          onUpdateDialog={this.dialogOpen}
        />
        <Worker
          onModalChange={this.modalChange}
          currentWorker={this.state.worker}
          onWorkerUpdate={this.workerUpdate}
          open={this.state.dialog}
          onDialogOpen={this.dialogOpen}
          onDialogClose={this.dialogClose}
        />
      </div>
    );
  }
}

export default WorkerBox;
