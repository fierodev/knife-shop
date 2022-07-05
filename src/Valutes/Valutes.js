import React from 'react';
import '../App.css';
import '../Calendar/styleW.css';
import { useValutes } from '../hooks/useValutes';

function Valutes() {

     const { data, txt, dollarcc, dollarrate, eurocc, eurorate, zlotycc, zlotyrate } = useValutes();
     
     console.log(data)

  return (
    <div style={{backgroundColor: "rgb(165, 167, 166)"}} className='d-flex flex-row bd-highlight mb-3 ps-3 mt-2 justify-content-between' >
        <div className="p-2 bd-highlight">
            <div>Exchange rate:</div>
            <div>{dollarcc} - {dollarrate}</div>
            <div>{eurocc} - {eurorate}</div>
            <div>{zlotycc} - {zlotyrate}</div>
        </div>
        <div className="p-2 bd-highlight">
            <img src="https://static1.bigstockphoto.com/3/2/4/large2/423892700.jpg" alt="" width="120" height='120'/>
        </div>

    </div>
   
  )
}

export default Valutes