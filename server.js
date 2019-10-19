const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./server/config/mongoose.js')
require('./server/models/task.js');
require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000")); 