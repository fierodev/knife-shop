import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../App.css';
import CardLayout from './CardLayout';
import arrowOfObjects from './store';

function Main() {

 


  return (
    <div className='Sidebar-block'>
        <Sidebar />
        <div className='ms-5 mt-3 d-flex flex-wrap'>
          {arrowOfObjects.map( prop => {
            return <CardLayout key={prop.name} name={prop.name} image={prop.image} description={prop.description} />
            })}
        </div>
        
    </div>
  )
}

export default Main