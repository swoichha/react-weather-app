# Weather_App

Weather App using React JS

### Creating React App

`npx create-react-app .` creat app within the current directory name `react-weather-app`

### Run App

`npm start` Starts the development server

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

## Features:
## Features

### 1. API Integration and Data Formatting
- Implemented API to fetch weather data.
- Formatted the retrieved data from the API for display.

### 2. Navigation Bar with Fixed Cities
- Added a fixed navigation bar containing default cities for quick access to weather information.

### 3. Search Bar
- Implemented a search bar to allow users to search for weather information for specific locations.

### 4. Time and Location Component
- Displayed current time and location for user reference.

### 5. Temperature Details
- Provided temperature details including current temperature, wind speed, maximum and minimum temperature, sunrise and sunset times.

### 6. Dynamic Weather Data
- Updated weather data dynamically to reflect real-time changes.

### 7. Search Feature, Unit Change, and Geolocation
- Implemented search functionality to allow users to search for weather data of any location.
- Added the ability to change temperature units (Celsius or Fahrenheit).
- Incorporated geolocation feature to display weather information based on the user's current location.

### 8. Background Change Based on Temperature
- Automatically changed the background based on the temperature for a visually intuitive experience.

### 9. Location Icon Functionality
- Enabled users to click on the location icon to display weather information based on their current geolocation.

### 10. Extended Weather Forecast
- Provided up to 5 hours and 5 days weather forecast for comprehensive weather information.

## INSTALL Tailwind CSS

https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss
npx tailwindcss init
```

### IconScout

Use https://github.com/Iconscout/react-unicons for icons

Install react-unicons using npm.
`npm install --save @iconscout/react-unicons`

To use it add `import UilReact from '@iconscout/react-unicons/icons/uil-react'` inside App.js

## Fonts

Using google fonts Poppins, click on get font and then under "Get embedded code" use the `@import` code from the import option

Now, the index.css will have

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



@layer base {
    html{
        font-family: 'Poppins', sans-serif;
    }
}
```

### API

For this project I have used [OpenWeather API](https://openweathermap.org/api). Have generated an API key.

First Call current weather data using Built-in API request by city name

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

Then using the data(longitude, latitude, etc.) provided by the above API access Current and forecasts weather data using following API

```
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
```

## Luxon

To manipulate date and time install Luxon using command:

`npm i luxon`

Use Luxon by `import { DateTime } from "luxon";`
