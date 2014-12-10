
var app = require('./app/js/hello');

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});