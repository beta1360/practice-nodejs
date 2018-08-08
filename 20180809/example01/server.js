var express = require("express");
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + "/views");
app.set("view engine", "egs");
app.engine("html", require("ejs").renderFile);
app.use(express.static('public'));

var server = app.listen(3000, function() {
    console.log("Express server has started on port 3000");
})