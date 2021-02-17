/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let simbolo = ["clubs", "diamonds", "hearts"];

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

function generdordeNumero() {
  let primer_ramdom = Math.floor(Math.random() * 4 + 1);
  return primer_ramdom;
}
console.log(generdordeNumero());
