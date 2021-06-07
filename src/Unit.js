import React, {useState} from "react";
import "./Unit.css";

export default function Unit (props){
    const [unit, setUnit] = useState("celsius");

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    if (props.time==="now"){
    if (unit==="celsius"){
    return <div className="Unit">
         <span className="temp"> {Math.round(props.celsius)} </span> <span className="Conversion">  ℃ | <a href="/" onClick={showFahrenheit}>℉ </a> </span> 
         </div>
    } else {
        let fahrenheit = (props.celsius*9)/5 + 32;
        return (
        <div className="Unit">
        <span className="temp"> {Math.round(fahrenheit)} </span> <span className="Conversion"> <a href="/" onClick={showCelsius}> ℃  </a> | ℉ </span> 
        </div>
        )
    } 
}
else {
        if (unit==="celsius"){
    return <div className="Unit">
         <span className="temp"> {Math.round(props.celsius)} </span> <span className="Conversion"> ℃ </span> 
         </div>
    } else {
        let fahrenheit = (props.celsius*9)/5 + 32;
        return (
        <div className="Unit">
        <span className="temp"> {Math.round(fahrenheit)} </span> <span className="Conversion"> ℉ </span> 
        </div>
        )
    }
}
}