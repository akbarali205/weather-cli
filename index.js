import getArgs from './helpers/argv.js'
import {printError, printHelp, printSuccess} from './services/log.service.js'
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'

const saveToken = async (token) => {
    if(!token.length) {
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
const startCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // help
        printHelp()
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
        return saveToken(args.t)
    }
    // result
}

startCLI()