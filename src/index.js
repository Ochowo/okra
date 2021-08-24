import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/index';

const App = () => <Routes />;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
