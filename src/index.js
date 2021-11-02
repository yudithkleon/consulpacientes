import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppRouters } from './routers/AppRouters';
import {store} from './Redux/store/store'
import { DashBoardRouters } from './routers/DashBoardRouters';

ReactDOM.render(
  <Provider store={store}>
   <DashBoardRouters/> 
  </Provider>,
  document.getElementById('root')
);

