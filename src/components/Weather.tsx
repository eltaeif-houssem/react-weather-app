import React from "react";
import "./Weather.css";
// import interfaces
import type { CityWeather } from "../util/interfaces";

interface Props {
  weather: CityWeather | null;
}

const Weather: React.FC<Props> = ({ weather }) => {
  return (
    <div className="weather">
      <h2>{weather?.name}</h2>
      <div className="weather-data">
        <div className="weather-data-left">
          <div className="weather-status">
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
              alt={weather?.weather[0].main}
            />
            <p>{weather?.weather[0].description}</p>
          </div>

          <p>
            Lat : {weather?.coord.lat}, Lon : {weather?.coord.lon}
          </p>
          <div>
            <h4>Wind : </h4>
            <p>Speed : {weather?.wind.speed}kmh</p>
            <p>Deg : {weather?.wind.deg}</p>
          </div>
        </div>
        <div className="weather-data-right">
          <p>Tempreture : {weather?.main.temp}C</p>
          <p>Temp Max : {weather?.main.temp_max}C</p>
          <p>Temp Min : {weather?.main.temp_min}C</p>
          <p>Feels like : {weather?.main.feels_like}C</p>
          <p>Humidity : {weather?.main.humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
