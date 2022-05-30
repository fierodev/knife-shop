import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import arrowOfObjects from './Main/store';




function App() {
 const [getSearchValue, SetGetSearchValue] = useState('');
 
  // console.log('searchValue=>',getSearchValue);

  const getNameObject= arrowOfObjects.map(e=>{return e});

 


  return (
     <BrowserRouter>
          <Routes>
            <Route path='/'  element={ <HomePage key={getNameObject} name={getNameObject} searchValue={SetGetSearchValue}/>} />
            <Route path='/login' element={ <LoginPage />} />
            
          </Routes>
        
     </BrowserRouter>
    
  );
}

export default App;
