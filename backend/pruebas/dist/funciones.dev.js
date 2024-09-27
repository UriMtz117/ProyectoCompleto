"use strict";

function saludar(nombre) {
  console.log("Hola.. " + nombre);
} //saludar("Juan");


var saludo = function saludo(nombre) {
  console.log("Hola " + nombre);
};

saludar("Pancho");

var saludo2 = function saludo2(nombre1, nombre2) {
  console.log("Hola " + nombre1 + " y " + nombre2);
};

saludo2("Pancho", "Esryil");

var saludo3 = function saludo3(nombre1, nombre2) {
  return "Hola " + nombre1 + " y " + nombre2;
};

console.log(saludo3("Ochoa", "Falcon"));

var saludo4 = function saludo4(nombre1) {
  return "Hola " + nombre1;
};

console.log(saludo4("Bethoveen"));

var saludo5 = function saludo5() {
  console.log("Hola con función anónima");
};

saludo5();

var saludo6 = function saludo6() {
  console.log("Estas en saludo6");
};

var saludo7 = function saludo7() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "anónimo";
  console.log("Hola " + nombre);
  saludo6();
};

saludo7("Vivaldi", saludo6);
//# sourceMappingURL=funciones.dev.js.map
