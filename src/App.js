import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import { TimeAndLocation } from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
import { useEffect, useState } from 'react';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query, setQuery] = useState({ q: 'kathmandu' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
    
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then(data => {
        setWeather(data);
      });
    }
    fetchWeather();
  }, [query, units])


  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  
  return (
    <>
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <NavBar setQuery={setQuery} />
        <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />
        
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureDetails weather={weather} />
            
            <Forecast title='hourly forecast' items={weather.hourly} />
            <Forecast title='daily forecast' items={weather.daily}/>
          </div>
        )}
      

      </div>

    </>
  );
}

export default App;
