import { DateTime } from "luxon";

const API_KEY = 'b20c8c70bf4ed747f6b77f3b9324ef8c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// For weather API
const getWeatherData = (infoType, searchParam) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({ ...searchParam, appid: API_KEY });

    return fetch(url).then((res) => res.json());
};

//Format data from getWeatherData
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: {speed}
    } = data

    const { main: details, icon} = weather[0] 
    return{lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

//Format data for hourly and daily weather which will be displayed in the UI
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })

    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
    return{timezone, daily, hourly}
}


//Format data
const getFormattedWeatherData = async (searchParam) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParam).then(formatCurrentWeather);
    const { lat, lon } = formattedCurrentWeather;
    const formattedForecastWeather = await getWeatherData('onecall', {
        lat, lon, exclude: 'current, minutely,alerts', units: searchParam.units
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };