import React from 'react';
import {useState, useEffect} from "react"

const WeatherAPI = () => {
    const url = "https://api.weatherapi.com/v1/forecast.json?key=8b57b73b85104757b59222609220903&q=ukraine&days=7&aqi=no&alerts=no";

    let [country, SetCountry] = useState();
    let [city, SetCity] = useState();
    let [region, SetRegion] = useState();
    let [temp, SetTemp] = useState();

    function sendRequest(url){
        return fetch(url).then(rez => {return rez.json()})
    };


     useEffect(() => {
         sendRequest(url).then(rez =>{
             console.log(rez)
             SetCountry(country = rez.location.country);
             SetCity(city = rez.location.name);
             SetRegion(region = rez.location.region);
             SetTemp(temp = rez.current.temp_c);
              });

    });




    // let user = {};
    //         async function Rez(e){
    //         const responce = await fetch("https://api.weatherapi.com/v1/forecast.json?key=8b57b73b85104757b59222609220903&q=ukraine&days=7&aqi=no&alerts=no");
    //         e = await responce.json();
    //         console.log(e.location)
    //         // return e;
    //     };
    //    Rez(user);

    //    console.log(user);
            
return (
    <div>
        <div> {country} </div>
        <div> {city} </div>
        <div> {region} </div>
        <div> {temp} C </div>
    </div>
    
)
  
};

export default WeatherAPI;

