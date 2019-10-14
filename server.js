const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
require('./server/config/mongoose.js')
require('./server/models/task.js');
require('./server/config/routes.js')(app)
app.listen(8000, () => console.log("listening on port 8000")); 