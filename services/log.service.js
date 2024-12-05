import chalk from "chalk";
import dedent from "dedent";
const printError = (err) => {
    console.log(chalk.bgRed("ERROR: " + err));
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen("SUCCESS: " + message));
}

const printHelp = () => {
    console.log(dedent`
            ${chalk.bgYellow("HELP:")}
            -s [CITY] for install city
            -h [HELP] for help
            -t [API_TOKEN] for saving API token
        `);
}

const printWeather = (res, icon) => {
    console.log(dedent`
        ${chalk.bgYellowBright('WEATHER:')} City weather ${res.name}
        ${icon}  ${res.weather[0].description}
        Main: ${res.weather[0].main}
        Temperature: ${res.main.temp}°C  (feels like ${res.main.feels_like})°C
        Min Temperature: ${res.main.temp_min}°C
        Max Temperature: ${res.main.temp_max}°C
        Clouds: ${res.clouds.all}%
        Wind Speed: ${res.wind.speed} m/s
        Humidity: ${res.main.humidity}%
        Pressure: ${res.main.pressure} hPa
        Date: ${new Date(res.dt * 1000).toLocaleDateString()}
        Time: ${new Date(res.dt * 1000).toLocaleTimeString()}
        Sunrise: ${new Date(res.sys.sunrise * 1000).toLocaleTimeString()}
        Sunset: ${new Date(res.sys.sunset * 1000).toLocaleTimeString()}
    `);
}

export {
    printError,
    printSuccess,
    printHelp,
    printWeather
}