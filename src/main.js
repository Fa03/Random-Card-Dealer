import "./style.css";

window.onload = function() {
  document.querySelector(".superior").classList.add();
};

function generdordeNumero() {
  let numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let ramdom_numero = Math.floor(Math.random() * numero.length);
  return ramdom_numero;
}

function generdordeSimbolo() {
  let simbolo = ["♠", "♣", "♥", "♦"];
  let ramdom_simbolo = Math.floor(Math.random() * simbolo.length);
  return ramdom_simbolo;
}

console.log(generdordeNumero());
console.log(generdordeSimbolo());
