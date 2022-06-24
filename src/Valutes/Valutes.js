import React from 'react'
import { useValutes } from '../hooks/useValutes';

function Valutes() {

     const { data, txt, dollarcc, dollarrate, eurocc, eurorate, zlotycc, zlotyrate } = useValutes();
     
     console.log(data)

  return (
    <div>
        <div>{dollarcc} - {dollarrate}</div>
        <div>{eurocc} - {eurorate}</div>
        <div>{zlotycc} - {zlotyrate}</div>
    </div>
   
  )
}

export default Valutes