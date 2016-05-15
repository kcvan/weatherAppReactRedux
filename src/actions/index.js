import axios from "axios";

const API_KEY = "";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Before, we just set the type straight to the string, but now we're creating a
// const that is assigned to the string "FETCH_WEATHER". Why? We can pass along
// this variable around to our reducers, so we never have to touch the action type
// ever again. Bascially to avoid mistyping. Once we import it out, it doesn't matter
// what the string is inside, only the variable name.
export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city) {
  // We can change the country code to not just search in the US.
  const url = `${ROOT_URL}&q=${city},us`;
  // The axios get request returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
};