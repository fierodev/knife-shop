import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../App.css';
import CardLayout from './CardLayout';

function Main() {
  return (
    <div className='Sidebar-block'>
        <Sidebar />
        <div className='ms-3 mt-3'>
          <CardLayout />
        </div>
        
    </div>
  )
}

export default Main