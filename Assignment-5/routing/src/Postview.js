import React from 'react';
import './Postview.css';
import  { useEffect, useState } from 'react';

import Header from './Components/Header';
import Card from './Components/card';




const Postview = () => {
  const [people, setPeople] = useState([]);
  const getUserData = () => {
    fetch("http://localhost:3004/user")
    .then(response=>response.json())
    .then(res=> setPeople(res))
    .catch(error=>console.log(error))
  }
  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
    <div className="site-container">
    </div>
      <Header></Header>
      <Card people={people}></Card>
      <div className="site-container">
      </div>
    </>
  );
}

 
export default Postview;
