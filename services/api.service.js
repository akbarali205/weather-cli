import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service'

const getWeather = async (city) => { 
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} 
    
    const token = getKeyValue(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error('API token not found');
    }

    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);

    const response = await https.get(url);
    const data = await response.json();
}

export {getWeather}