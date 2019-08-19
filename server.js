const express = require("express");
const app = express();

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });