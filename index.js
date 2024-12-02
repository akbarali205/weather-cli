import getArgs from './helpers/argv.js'
import {printError, printHelp, printSuccess} from './services/log.service.js'

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
    }
    // result
}

startCLI()