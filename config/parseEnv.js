import fs from 'fs';
import chalk from 'chalk';

export default cb => {
    const env = JSON.parse(fs.readFileSync('./.env.json', 'utf-8'));
    Object.entries(env).forEach(item => {
        const [key, value] = item;
        if (key === 'NODE_ENV') {
            let log = chalk.green('Node env is: ');
            log +=
                value === 'production'
                    ? chalk.red.bold(`[${value}]`)
                    : chalk.green.bold(`[${value}]`);

            console.log(log);
        }
        process.env[key] = value;
    });
    cb();
};
