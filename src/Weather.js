import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import LoaderSpinner from "./LoaderSpinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }
  function search() {
    let apiKey = "b7otd3ffec1d40c723a936cbb2dda9f5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100
              "
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <LoaderSpinner />;
  }
}
