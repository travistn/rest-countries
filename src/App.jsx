import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home';
import Country from './containers/Country';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:countryName' element={<Country />} />
      </Routes>
    </>
  );
};

export default App;
