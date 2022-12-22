import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-5">
        <div className="col-4 text-end d-none d-md-block">
          <WeatherIcon code={props.data.icon} size={52} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4 d-none d-md-block">
          <ul className="currentWeatherDetails">
            <li>Pressure: {props.data.pressure}hPa</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 10) / 10} m/s</li>
          </ul>
        </div>
        <div className="col-4 d-none d-md-block placeInfo">
          <ul>
            <li>
              <h1>{props.data.city}</h1>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row mt-5 d-md-none">
        <div className="col-12 text-center placeInfo">
          <ul>
            <li>
              <h1>{props.data.city}</h1>
            </li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-12 text-center mt-4">
          <WeatherIcon code={props.data.icon} size={52} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-12 mt-4">
          <ul className="currentWeatherDetails text-center">
            <li>Pressure: {props.data.pressure}hPa</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 10) / 10} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
