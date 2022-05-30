import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import ContextSearch from "./context";





function HomePage( name, category ) {

  const [searchValue, SetSearchValue] = useState('');
  const [knives, setKnives] = useState([]);

  let existsSearchValue = name.name.filter(elem => elem.name.includes(searchValue) && elem.category.includes(knives));
  
  return (
    <ContextSearch.Provider value={{searchValue, SetSearchValue, knives, setKnives}}>
    <div className="App">       
        <Header />
        <Main key={name.name} name={existsSearchValue} />
        <Footer />
    </div>
    </ContextSearch.Provider>
  )
}

export default HomePage;