import React from "react";
import Weather from "./Weather";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Weather App</header>
        <Weather defaultCity="New York" />{" "}
        <img src={logo} alt="Logo" className="logo" />
        <footer>
          This App was created by Hanna Shchepeleva and is{" "}
          <a
            href="https://github.com/Hanna-Mik/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
