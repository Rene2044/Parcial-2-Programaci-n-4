// js/main.js
import { getWeatherByCity, getWeatherByCoords } from './weatherService.js';

// Selección de elementos del HTML
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temperature');
const desc = document.getElementById('weather-desc');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const icon = document.getElementById('weather-icon');

// Función que actualiza la cara de la aplicación
function updateUI(data) {
    if (!data || data.cod === "404") {
        alert("No se encontró la ciudad");
        return;
    }

    cityName.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°`;
    desc.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${Math.round(data.wind.speed)} km/h`;
    
    const iconCode = data.weather[0].icon;
    icon.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

// Escuchar el botón de búsqueda
searchBtn.addEventListener('click', async () => {
    const data = await getWeatherByCity(cityInput.value);
    updateUI(data);
});

// Escuchar cuando el usuario presiona "Enter"
cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const data = await getWeatherByCity(cityInput.value);
        updateUI(data);
    }
});

// Lógica para Ubicación Actual (Delegación de eventos para el Navbar)
document.addEventListener('click', async (e) => {
    if (e.target.closest('#geo-btn') || e.target.closest('#geo-btn-mobile')) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const data = await getWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
                updateUI(data);
            });
        }
    }
});

// Cargar una ciudad por defecto al abrir la página
window.addEventListener('load', async () => {
    const data = await getWeatherByCity("San Salvador");
    updateUI(data);
});