import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

import Postview from './Postview'
import Loadingpage from './Loadingpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loadingpage />} />
          <Route path="/postview" element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
