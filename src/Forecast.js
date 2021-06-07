import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import Overview from "./Overview";


export default function Forecast(props){

let [date , setDate] = useState ("1");
let [icon , setIcon] = useState ("1");
let [temp , setTemp] = useState ("1");
let [description , setDescription] = useState ("1");    
let [feels , setFeels] = useState ("1");
let [max , setMax] = useState ("1");
let [min, setMin] = useState ("1");
let [humidity , setHumidity] = useState ("1");
let [windspeed , setWindspeed] = useState ("1");


function showForecast(response){
    console.log(response.data);
    console.log(response.data.list[props.counter].main);
    setDate(response.data.list[props.counter].dt);
    setIcon (response.data.list[props.counter].weather[0].icon);
    setTemp (response.data.list[props.counter].main.temp);
    setDescription (response.data.list[props.counter].weather[0].description);
    setFeels(response.data.list[props.counter].main.feels_like);
    setMax (response.data.list[props.counter].main.temp_max);
    setMin (response.data.list[props.counter].main.temp_min);
    setHumidity(response.data.list[props.counter].main.humidity);
    setWindspeed (response.data.list[props.counter].wind.speed);
};

    let apiKey = "1a987ebb771192a582d4c3490e38c0df";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);

return (
    <div>
    < Overview date = {date} icon = {icon}  temp = {temp} description = {description} feels = {feels} max = {max} min = {min} humidity = {humidity} windspeed = {windspeed} timing={props.timing}/>
    </div>
);
};
