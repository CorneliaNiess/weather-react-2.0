import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import Now from "./Now";
import "bootstrap/dist/css/bootstrap.css";

import "./Search.css";

export default function Search() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("please enter your city first");
  let apiKey = "1a987ebb771192a582d4c3490e38c0df";

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    console.log(response.data);
    setWeather(
      <div className="Search">
        <Now
          date={response.data.dt}
          name={response.data.name}
          description={response.data.weather[0].description}
          icon={response.data.weather[0].icon}
          temp={response.data.main.temp}
          humidity={response.data.main.humidity}
          speed={response.data.wind.speed}
        />
        <div className="container">
          <div className="col">
            {" "}
            <Forecast city={response.data.name} counter={1} timing={3} />{" "}
          </div>
          <div className="col">
            {" "}
            <Forecast city={response.data.name} counter={2} timing={6} />{" "}
          </div>
          <div className="col">
            {" "}
            <Forecast city={response.data.name} counter={3} timing={9} />{" "}
          </div>
          <div className="col">
            {" "}
            <Forecast city={response.data.name} counter={4} timing={12} />{" "}
          </div>
        </div>
      </div>
    );
  }

  function getUrl(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  return (
    <div className="Search">
      {/*} <form>
        <input
          type="text"
          placeholder="Search for a city"
          className="form-control"
          onChange={updateCity}
        />
        <button className="btn btn-secondary" onClick={getUrl}>
          Search{" "}
  </button> */}
      <nav class="navbar navbar-light bg-light justify-content-between">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search for a city"
            aria-label="Search"
            onChange={updateCity}
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0 justify-content-between"
            type="submit"
            onClick={getUrl}
          >
            Search
          </button>
        </form>
      </nav>

      {weather}
    </div>
  );
}
