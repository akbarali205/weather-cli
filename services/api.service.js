import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios';

const getWeather = async (city) => { 
    const api = "https://api.openweathermap.org/data/2.5/weather" 
    const token = process.env.token ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if(!token) {
        throw new Error('API token not found');
    }
    // by axios
    const response = await axios.get(api, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units:'metric'
        }
    })
    return response.data;
    
    // by https

    // const url = new URL(api);
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'en');
    // url.searchParams.append('units','metric');
    

    // https.get(url, response => {
    //     let res = '';
    //     response.on('data', chunk => {
    //         res += chunk;
    //     });
    //     response.on('end', () => {
    //         console.log(res);
    //     })
    // })
}

export {getWeather}