import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app/app';
import './styles/bootstrap.min.css';
/* import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; */
import './styles/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


