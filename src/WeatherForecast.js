import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "b7otd3ffec1d40c723a936cbb2dda9f5";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div>
            <WeatherIcon code="clear-sky-day" size={32} />{" "}
          </div>
          <div>
            <span className="WeatherForecast-day-max-temperature">19°</span>
            <span className="WeatherForecast-day-min-temperature">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
