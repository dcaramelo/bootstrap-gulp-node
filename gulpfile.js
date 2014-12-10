var gulp = require('gulp')
    , nodemon = require('gulp-nodemon');
var karma = require('karma').server;



gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('server', function () {
    nodemon({ script: 'server.js' })
        .on('restart', function () {
            console.log('restarted!')
        });
});