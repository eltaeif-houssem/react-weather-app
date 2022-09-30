import React, { useState } from "react";
import "./App.css";
import { getWeather } from "./api/requests";

// impport interfaces
import type { CityWeather } from "./util/interfaces";
// import components
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const App: React.FC = () => {
  const [weather, setWeather] = useState<CityWeather | null>(null);

  const submitHandler = async (city: string) => {
    const data: CityWeather = await getWeather(city);
    setWeather(data);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={submitHandler} />
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default App;
