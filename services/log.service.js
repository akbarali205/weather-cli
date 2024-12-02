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

export {
    printError,
    printSuccess,
    printHelp,
}