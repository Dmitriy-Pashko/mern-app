import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import WorkerBox from './Components/WorkerBox/WorkerBox';

ReactDOM.render(<WorkerBox url="http://localhost:3001/api/workers" />, document.getElementById('root'));
