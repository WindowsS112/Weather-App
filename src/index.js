import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ################ //
// ###API-URL###### //
// ################ //

const apiKey = '';

// Vervang 'JOUW_STAD' door de gewenste stad (bijvoorbeeld Amsterdam)
const city = 'Amsterdam';

// Vervang 'JOUW_LAND' door het land van de stad (bijvoorbeeld NL voor Nederland)
const country = 'NL';

// Bouw de API-url op
const apiUrl = `q=${city},${country}&appid=${apiKey}&units=metric`;

// Haal gegevens op van de OpenWeatherMap API
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    // Roep een functie aan om de weerdata weer te geven
    displayWeatherData(data);
})
.catch(error => {
    console.error('Fout bij het ophalen van weerdata:', error);
});

// Functie om de weerdata weer te geven
function displayWeatherData(data) {
// Hier kun je de ontvangen weerdata verwerken en in de HTML invoegen
const temperatureElement = document.querySelector('.temperature');
const descriptionElement = document.querySelector('.weather-description');
const cityElement = document.querySelector('.city');

temperatureElement.textContent = `${data.main.temp}°C`;
descriptionElement.textContent = data.weather[0].description;
cityElement.textContent = `${city}, ${country}`;
};
