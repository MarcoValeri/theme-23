import gulp from 'gulp';

import build from './build.js';
import browserSync from './browserSync.js';
import styles from './styles.js';
import scripts from './scripts.js';

function watcher() {
    //* On scss change
    gulp.watch(['./src/scss/**/*.scss', './components/**/*.scss'], styles);

    //* On js change
    gulp.watch(['./src/js/**/*.js', './components/**/*.js'], scripts);
}

export default gulp.series(build, gulp.parallel(browserSync, watcher));

export { watcher };
