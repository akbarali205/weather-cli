import getArgs from './helpers/argv.js'
import { getIcon, getWeather } from './services/api.service.js'
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js'
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('Token not found. Token is required')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token saved successfully')
    } catch (error) {
        printError('Error saving token', error)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('City not found. City is required')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City saved successfully')
    } catch (error) {
        printError('Error saving city', error)
    }
}

const getForcast = async () => {
    try {
        const city = process.env.city ?? (await getKeyValue(TOKEN_DICTIONARY.city))
        const response = await getWeather(city);
        printWeather(response, getIcon(response.weather[0].icon))
    } catch (error) {
        if (error?.response?.status == 404) {
            printError('City not found')
        } else if (error?.response?.status == 401) {
            printError('Token is invalid')
        } else {
            printError(error.message)
        }
    }
}
const startCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        // help
        return printHelp()
    }
    if (args.s) {
        // save city
        return saveCity(args.s)
    }
    if (args.t) {
        // save token
        return saveToken(args.t)
    }
    // result
    getForcast()
}

startCLI()