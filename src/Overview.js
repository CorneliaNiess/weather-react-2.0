import React from "react";
import "./Overview.css";
import Date from "./Date";
import Unit from "./Unit";

export default function Overview(props) {
  return (
    <div className="Overview">
      <Date date={props.date} time="forecast" timing={props.timing} />
      <ul>
        <li>
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon"
          />{" "}
          <Unit celsius={props.temp} time="forecast" timing="3" /> Feels like:{" "}
          {Math.round(props.feels)} ℃{" "}
          <span className="Description">
            {" "}
            <em> {props.description} </em>{" "}
          </span>
        </li>
      </ul>
      {/*
     <ul>
        <li className="Details"> Windspeed: {Math.round(props.windspeed)} km/h </li>
        <li className="Details"> Humidity: {Math.round(props.humidity)} % </li>
        <li className="Details"> Max. temperature: {Math.round(props.max)} ℃ </li>
        <li className="Details"> Min. temperature: {Math.round(props.min)} ℃ </li>
    </ul>
    */}
    </div>
  );
}
