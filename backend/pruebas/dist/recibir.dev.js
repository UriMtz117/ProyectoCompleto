"use strict";

var a = require("./variables");

var obj = require("./variables2");

var _require = require("./variables2"),
    b = _require.b,
    c = _require.c;

var b = require("./variables2").b;

console.log(a);
console.log(obj);
console.log(obj.c);
console.log(c);
console.log(b);
//# sourceMappingURL=recibir.dev.js.map
