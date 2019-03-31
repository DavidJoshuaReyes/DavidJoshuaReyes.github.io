// Gulp.js configuration
const gulp = require('gulp');
const pug = require('gulp-pug');
const clean = require('gulp-clean');
const child = require('child_process');
const fs = require('fs');

// if ci (Continuous Integration) the in production environment
const environment = (process.env.NODE_ENV !== 'ci'); 

const folders = {
    src: 'src/',
    build: 'build/'
};

const buildPugFiles = () => {
    return gulp.src(`${folders.src}/main/views/pages/*.pug`)
        .pipe(pug())
        .pipe(gulp.dest(`${folders.build}/pages`));
    };

const buildServer = () => {
    return gulp.src(`${folders.src}/main/js/server/*.js`)
        .pipe(gulp.dest(`${folders.build}`))
};

const destroyBuildFiles = () => {
    return gulp.src(folders.build)
        .pipe(clean());
};

const runServer = (done) => {
    let server = child.spawn('node', ['build/server.js']);
    let log = fs.createWriteStream('server.log', {flags: 'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
    done();
};

// register tasks
gulp.task('clean', destroyBuildFiles);

gulp.task('build', gulp.series([
    buildPugFiles, 
    buildServer
]));

gulp.task('serve', runServer);

gulp.task('default', gulp.series(['clean', 'build', 'serve']));


