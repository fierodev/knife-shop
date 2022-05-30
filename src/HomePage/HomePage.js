import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



function HomePage( name, searchValue, getSearchValue) {

  searchValue(getSearchValue='work');

 console.log("searchValue", searchValue)

  return (
    <div className="App">       
        <Header />
        <Main key={name.name} name={name.name} />
        <Footer />
    </div>
  )
}

export default HomePage;