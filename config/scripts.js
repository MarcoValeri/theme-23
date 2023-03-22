import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import browsersync from 'browser-sync';
import plumber from 'gulp-plumber';
import named from 'vinyl-named';

import webpackConfig from '../webpack.config.js';

function bundle(src, dest) {
    const prod = process.env.NODE_ENV !== 'development';
    return gulp
        .src(src)
        .pipe(
            gulpif(
                !prod,
                plumber({
                    errorHandler(err) {
                        console.log(err.message);
                        this.emit('end');
                    },
                })
            )
        )
        .pipe(named())
        .pipe(webpackStream({ config: [webpackConfig(prod)] }, webpack))
        .pipe(gulp.dest(dest))
        .pipe(browsersync.stream());
}

export default function scripts() {
    const src = ['./src/js/app.js'];
    const dest = 'dist';

    return bundle(src, dest);
}
