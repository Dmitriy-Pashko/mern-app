import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WorkerList from '../WorkeList/WorkerList';
import Worker from '../Worker/Worker';
import box from './controller';
import '../../Styles/App.css';

class WorkerBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.loadWorkers = box.loadWorkers.bind(this);
  }
  componentDidMount() {
    this.loadWorkers();
  }
  render() {
    const { list } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={props => <WorkerList {...props} list={list} />} />
          <Route path="/create" component={Worker} />
          <Route path="/update/:id" component={Worker} />
        </div>
      </BrowserRouter>
    );
  }
}

export default WorkerBox;
