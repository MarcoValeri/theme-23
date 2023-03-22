import { existsSync, mkdirSync } from 'fs';

export default cb => {
    if (!existsSync('dist')) {
        mkdirSync('dist');
    }
    cb();
};
