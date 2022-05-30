import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import ContextSearch from "./context";





function HomePage( name ) {

  const [searchValue, SetSearchValue] = useState('');

  let exists = name.name.filter(elem => elem.name.includes(searchValue));
  

  return (
    <ContextSearch.Provider value={{searchValue, SetSearchValue}}>
    <div className="App">       
        <Header />
        <Main key={name.name} name={exists} />
        <Footer />
    </div>
    </ContextSearch.Provider>
  )
}

export default HomePage;