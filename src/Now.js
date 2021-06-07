import React from "react";
import Unit from "./Unit";
import Date from "./Date";

import "./Now.css";

export default function Now(props){
   return (
   <div className="Now">
            <ul>
            <li>< Date date = {props.date} time = "now" /></li>
            <li className="header"> {props.name} </li>
            <li className="description"> {props.description} </li>
            <li>
            {" "} 
            <img
              src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
              alt="icon"
            /> 
          </li>
        </ul>
        <ul className="Details">
          <li> <Unit celsius={props.temp} time="now" /> </li>
          <li> Humidity: {props.humidity} % </li>
          <li> Wind: {props.speed} km/h </li>
        </ul>
</div>
   )
}
   