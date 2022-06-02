import React, { useState, useContext } from 'react';
import { Checkbox } from 'primereact/checkbox';
import Calendar from '../Calendar/Calendar';
import ContextSearch from '../HomePage/context'
import WeatherAPI from '../Calendar/WeatherAPI';

function Sidebar() {

//    const [cities, setCities] = useState([]);
let { knives, setKnives } = useContext(ContextSearch);

   const onKnifesChange = (e) => {
        let selectedKnives = [...knives];

        if (e.checked)
            selectedKnives.push(e.value);
        else
            selectedKnives.splice(selectedKnives.indexOf(e.value), 1);

        setKnives(selectedKnives);
    }

  return (
    //
    <div className='Sidebar-box'> 
    <div style={{ border:'0.1rem solid gray', marginTop:'20px'}}>
       <h3 style={{background:"gray", marginTop:'20px'}}>Change a product</h3>
                <div className="field-checkbox">
                    <Checkbox style={{marginLeft:'20px'}} inputId="city1" name="city" value="Hunting knives" onChange={onKnifesChange} checked={knives.indexOf('Hunting knives') !== -1} />
                    <label style={{marginLeft:'20px'}} htmlFor="city1">Hunting knives</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox style={{marginLeft:'20px'}} inputId="city2" name="city" value="Folding knives" onChange={onKnifesChange} checked={knives.indexOf('Folding knives') !== -1} />
                    <label style={{marginLeft:'20px'}}  htmlFor="city2">Folding knives</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox style={{marginLeft:'20px'}} inputId="city3" name="city" value="Multitools" onChange={onKnifesChange} checked={knives.indexOf('Multitools') !== -1} />
                    <label style={{marginLeft:'20px'}}  htmlFor="city3">Multitools</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox style={{marginLeft:'20px'}} inputId="city4" name="city" value="Collectible knives" onChange={onKnifesChange} checked={knives.indexOf('Collectible knives') !== -1} />
                    <label style={{marginLeft:'20px'}}  htmlFor="city4">Collectible knives</label>
                </div>
    </div>
    {/* <img src='https://imageio.forbes.com/specials-images/imageserve/619757918/U-S--Army-Ranger/960x0.jpg?fit=bounds&format=jpg&width=960' alt='soldier' style={{width:"100%", marginTop:'20px'}}></img> */}
     <WeatherAPI />
     <Calendar />
     
    </div>
              
  )
}

export default Sidebar