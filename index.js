const getArgs = require('./helpers/argv');

const startCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
    // result
}