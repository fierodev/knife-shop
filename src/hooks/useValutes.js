import { useState, useEffect } from "react";

export const useValutes = () => {
    const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json";

    const [loading, setLoading] = useState(true);
    const [dollar, setDollar] = useState();
    const [euro, setEuro] = useState();
    const [zloty, setZloty] = useState();
    
    useEffect(()=>{
    fetch(url)
    .then(rez => {
        return rez.json()
    })
    .then(rez => {
        setLoading(false);
        setDollar(rez[25]);
        setEuro(rez[32]);
        setZloty(rez[33]);
    })
    .catch((err)=> console.log(err));
    },[])
 
    return {
        loading,
        dollarcc: dollar?.cc,
        dollarrate: dollar?.rate,
        eurocc: euro?.cc,
        eurorate: euro?.rate,
        zlotycc: zloty?.cc,
        zlotyrate: zloty?.rate
    }

};