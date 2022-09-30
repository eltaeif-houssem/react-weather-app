import type { AxiosResponse } from "axios";
import axios from "./axios";
import type { Endponits } from "../util/interfaces";

const apiKey = process.env.REACT_APP_WEATH_API_KEY;

const requests: Endponits = {
  weather: `/data/2.5/weather?appid=${apiKey}&units=metric&lang=en&`,
  geocode: `/geo/1.0/direct?appid=${apiKey}&`,
};

// get the geocode
const decodeCountry = async (city: string) => {
  const { data }: AxiosResponse = await axios.get(
    requests.geocode + `q=${city}`
  );
  const lat = await data[0].lat;
  const lon = await data[0].lon;

  const countryString = `lat=${lat}&lon=${lon}`;
  return countryString;
};

// get the country weath
export const getWeather = async (city: string) => {
  const countryGeocode: string = await decodeCountry(city);
  const { data }: AxiosResponse = await axios.get(
    `${requests.weather}${countryGeocode}`
  );
  return data;
};
