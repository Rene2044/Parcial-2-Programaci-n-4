// js/weatherService.js
const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza esto con tu llave real

export async function getWeatherByCity(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ciudad no encontrada");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getWeatherByCoords(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}