import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import arrowOfObjects from './Main/store';
import NewTool from './NewTool/NewTool';






function App() {

  const getNameObject= arrowOfObjects.map(e=>{return e});

  const getCategoryObject= arrowOfObjects.map(e=>{return e});

  return (
     <BrowserRouter>
          <Routes>
            <Route path='/'  element={ <HomePage key={getNameObject} name={getNameObject} category={getCategoryObject}/>} />
            <Route path='/login' element={ <LoginPage />} />
            <Route path='/newtool' element={ <NewTool />} />
          </Routes>
     </BrowserRouter>
    
  );
}

export default App;
