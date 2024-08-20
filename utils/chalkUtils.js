import chalk from 'chalk';

export const colorMethod=(method)=>{
    
    switch (method) {
        case `GET`:
            return chalk.green(method)
        case `PUT`:
            return chalk.blue(method)
        case `POST`:
            return chalk.blueBright(method)
        case `DELETE`:
            return chalk.red(method)
        case `PATCH`:
            return chalk.gray(method)
    }
}