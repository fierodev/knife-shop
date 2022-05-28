import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function HomePage() {
  return (
    <div className="App">       
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default HomePage;