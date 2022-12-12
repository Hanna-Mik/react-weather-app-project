import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="partly cloudy"
          />{" "}
          2 °C
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 76%</li>
            <li>Wind: 3 m/s</li>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li>
              <h1>New York</h1>
            </li>
            <li>Monday 09:00</li>
            <li>Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
