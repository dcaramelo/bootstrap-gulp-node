var gulp = require('gulp')
    , nodemon = require('gulp-nodemon');

gulp.task('server', function () {
    nodemon({ script: 'server.js' })
        .on('restart', function () {
            console.log('restarted!')
        });
});