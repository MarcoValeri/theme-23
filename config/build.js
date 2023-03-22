import gulp from 'gulp';
import clean from './clean.js';
import create from './create.js';
import parseEnv from './parseEnv.js';
import scripts from './scripts.js';
import styles from './styles.js';

export default gulp.series(
    clean,
    create,
    parseEnv,
    gulp.parallel(scripts, styles)
);
