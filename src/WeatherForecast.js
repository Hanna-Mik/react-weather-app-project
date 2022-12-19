import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
