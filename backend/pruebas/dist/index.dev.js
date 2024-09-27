"use strict";

var express = require("express");

require("dotenv").config();

var app = express();
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("servidor en http://localhost:" + port);
});
//# sourceMappingURL=index.dev.js.map
