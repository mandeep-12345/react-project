import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
const employee = {
  name: "Alan Ford",
  id: "00005152",
  appointmentOn: 1348896220039,
  email: "alan.form@email.nl",
  phone: "+31123456789",
  status: "InProgress",
  door: "Mark",
  time: 1643896220039,
  image: "https://www.w3schools.com/w3css/img_avatar3.png",
  role: "Boltaart Bosbessen",
  summary: "Some relevant summary description.",
}

ReactDOM.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
