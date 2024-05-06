import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city");
    } else {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca0db41e2e878c74a1dfc7ffece370d4&units=metric`;
      axios.get(url).then((response) => {
        setWeatherData(response.data);
        setLoading(false);
      });
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" value={city} onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        weatherData && (
          <div>
          <ul>
            <li>The weather in {city} is {Math.round(weatherData.main.temp)}°C</li>
            <li>Description: {weatherData.weather[0].description}</li>
            <li>Humidity: {weatherData.main.humidity}%</li>
            <li>Wind: {weatherData.wind.speed} m/s</li>
            <li> <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" /></li>
          </ul>
        </div>
        )
      )}
    </div>
  );
}
