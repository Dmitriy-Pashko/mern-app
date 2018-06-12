import React from 'react';
import ReactDOM from 'react-dom';
import WorkerBox from './Components/WorkerBox/WorkerBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkerBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
