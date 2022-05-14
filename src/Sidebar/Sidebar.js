import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import Calendar from '../Calendar/Calendar'

function Sidebar() {

   const [cities, setCities] = useState([]);

   const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }

  return (
    //
    <div className='Sidebar-box'> 
    <div style={{ border:'0.1rem solid gray', marginTop:'20px'}}>
       <h3 style={{background:"gray", marginTop:'20px'}}>Change a product</h3>
                <div className="field-checkbox">
                    <Checkbox inputId="city1" name="city" value="Chicago" onChange={onCityChange} checked={cities.indexOf('Chicago') !== -1} />
                    <label htmlFor="city1">Chicago</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf('Los Angeles') !== -1} />
                    <label htmlFor="city2">Los Angeles</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city3" name="city" value="New York" onChange={onCityChange} checked={cities.indexOf('New York') !== -1} />
                    <label htmlFor="city3">New York</label>
                </div>
                <div className="field-checkbox">
                    <Checkbox inputId="city4" name="city" value="San Francisco" onChange={onCityChange} checked={cities.indexOf('San Francisco') !== -1} />
                    <label htmlFor="city4">San Francisco</label>
                </div>
    </div>
    <img src='https://imageio.forbes.com/specials-images/imageserve/619757918/U-S--Army-Ranger/960x0.jpg?fit=bounds&format=jpg&width=960' alt='soldier' style={{width:"100%", marginTop:'20px'}}></img>
     <Calendar />
    </div>
              
  )
}

export default Sidebar