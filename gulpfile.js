import clean from './config/clean.js';
import create from './config/create.js';
import parseEnv from './config/parseEnv.js';
import build from './config/build.js';
import scripts from './config/scripts.js';
import styles from './config/styles.js';
import watch from './config/watch.js';

export default build;

export { clean, create, parseEnv, scripts, styles, build, watch };
