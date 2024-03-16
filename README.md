# Weather App

This project is a Weather App built using React JS, providing users with up-to-date weather information for various locations.

## Getting Started

To set up the project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.

## Features

### 1. API Integration and Data Formatting
- Utilized APIs to fetch weather data.
- Formatted the retrieved data for clear display.

### 2. Navigation Bar with Fixed Cities
- Implemented a fixed navigation bar with default cities for quick access to weather information.

### 3. Search Bar
- Incorporated a search bar to enable users to find weather information for specific locations.

### 4. Time and Location Component
- Displayed current time and location for user convenience.

### 5. Temperature Details
- Provided detailed temperature information including current temperature, wind speed, maximum and minimum temperatures, sunrise, and sunset times.

### 6. Dynamic Weather Data
- Dynamically updated weather data to reflect real-time changes.

### 7. Search Feature, Unit Change, and Geolocation
- Enabled users to search for weather data of any location.
- Allowed users to change temperature units (Celsius or Fahrenheit).
- Implemented geolocation feature to display weather information based on the user's current location.

### 8. Background Change Based on Temperature
- Automatically adjusted the background based on the temperature for a visually intuitive experience.

### 9. Location Icon Functionality
- Enabled users to click on the location icon to view weather information based on their current geolocation.

### 10. Extended Weather Forecast
- Provided extended weather forecasts for up to 5 hours and 5 days for comprehensive weather insights.

## Installation of Tailwind CSS

To install Tailwind CSS, follow the steps outlined in the official Tailwind CSS documentation [here](https://tailwindcss.com/docs/guides/create-react-app).

## IconScout

For icons, this project uses [React Unicons](https://github.com/Iconscout/react-unicons). Install it using npm:

```bash
npm install --save @iconscout/react-unicons
```

Then import icons as needed in the project.

## Fonts

The project uses the Google font Poppins for a clean and modern look. Import the font using the provided `@import` code in the `index.css` file.

## API

The project utilizes the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. Make sure to generate an API key and use it in the API calls as specified in the documentation.

## Luxon

For date and time manipulation, Luxon is used. Install it using:

```bash
npm i luxon
```

Then import `DateTime` from Luxon as needed in the project.

Feel free to explore the codebase and contribute to further enhancements!
