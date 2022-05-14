import React from 'react';
import '../App.css';

function Calendar() {
    let date = new Date();
    let month = date.getMonth();
    var now = new Date().toLocaleDateString(); 

    const arrayOfMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    
    var arrayOfDay = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    let daysWeek = document.querySelector('.calendar-days');
    let days='';
    for(var i=0; i<=6;i++){
        days += `<div>${arrayOfDay[i]}</div>`;
    };

    var xtoday = new Date();
    var xDay = new Date(xtoday.getFullYear(), xtoday.getMonth()+1, 0);
    var yDay = new Date(xtoday.getFullYear(), xtoday.getMonth(), 0);
    var lastDayOfMonth = xDay.getDate();
    let lastDayOfPreviouslyMonth = yDay.getDate();
    var gettingDay = yDay.getDay();
    
    let numbersOfDates = document.querySelector('.calendar-dates');
    let numbersOfPreviousDate="";
    let numbersOfDate='';
    for(var y=gettingDay; y>=0;y--){
        numbersOfPreviousDate += `<div>${lastDayOfPreviouslyMonth - y}</div>`;
    };
    // for(var r=1; r<=lastDayOfMonth;r++){
    //     numbersOfDate += `<div>${r}</div>`;
    // };

    for(var i=1; i<=lastDayOfMonth;i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            numbersOfDate += `<div style='background-color: rgb(220, 241, 23);'>${i}</div>`;
        }else{
            numbersOfDate += `<div>${i}</div>`;
        };
    };

    let allDays = numbersOfPreviousDate + numbersOfDate;



    console.log(lastDayOfPreviouslyMonth)
    


    return (
      <div style={{display:'flex', marginTop:'20px'}}>
    <div className='calendar' style={{textAlign:'center', border:'0.1rem solid gray'}}>Calendar
        <div className='calendar-today'>
            <div className='calendar-today-month'>{arrayOfMonth[month]}</div>
            <div className='calendar-today-date'>{now}</div>
        </div>
        <div className='calendar-days' dangerouslySetInnerHTML={{__html: days}}></div>
        <div className='calendar-dates' dangerouslySetInnerHTML={{__html: allDays}}></div>
    </div>
    </div>
  )
}

export default Calendar