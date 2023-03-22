import gulp from 'gulp';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import browsersync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

function parse(src, dest) {
    const plugins = [autoprefixer(), cssnano()];
    const prod = process.env.NODE_ENV !== 'development';

    return gulp
        .src(src)
        .pipe(
            gulpIf(
                !prod,
                plumber({
                    errorHandler(err) {
                        console.log(err.message);
                        this.emit('end');
                    },
                })
            )
        )
        .pipe(gulpIf(!prod, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulpIf(!prod, sourcemaps.write('./')))
        .pipe(gulp.dest(dest))
        .pipe(browsersync.stream());
}

export default function styles() {
    const src = ['./src/scss/main.scss'];
    const dest = 'dist';

    return parse(src, dest);
}
