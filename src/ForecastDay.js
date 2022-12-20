import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function formatDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  return (
    <div className="ForecastDay">
      <div className="WeatherForecast-day">{formatDay()}</div>
      <div>
        <WeatherIcon code={props.data.condition.icon} size={32} />{" "}
      </div>
      <div>
        <span className="WeatherForecast-day-max-temperature">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-day-min-temperature">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
