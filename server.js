var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// OVERRIDE POST HAVING ?_method=DELETE
app.use(methodOverride("_method"));

// HANDLEBARS
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT ROUTES, GIVE SERVER ACCESS TO THESE ROUTES
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);