import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GastoDataContext from './Context/DataContext';

ReactDOM.render(
  <GastoDataContext>
    <App/>
  </GastoDataContext>,
  document.getElementById('root')
);
