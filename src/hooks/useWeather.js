import { useState, useEffect } from "react";

export const useWeather = () => {
    const url = "https://api.weatherapi.com/v1/forecast.json?key=8b57b73b85104757b59222609220903&q=ukraine&days=7&aqi=no&alerts=no";

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(()=>{
        fetch(url)
    .then(rez => {
        return rez.json()
    })
    .then(rez => {
        setLoading(false);
        setData(rez);
    })
    .catch((err)=> console.log(err));
    },[])
    

    return {
        country: data?.location?.country,
        city: data?.location?.name,
        temp: data?.current?.temp_c,
        date: data?.current?.last_updated,
        loading
    }

};