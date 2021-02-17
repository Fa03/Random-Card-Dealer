import "./style.css";

window.onload = function() {
  let simbolo = generdordeSimbolo(); // llama a la funcion y asigna el valor para usarlo en superior e inferior
  let asignarSuperior = document.querySelector(".superior"); // se asigna a una variable el elemento de HTML
  asignarSuperior.innerHTML = simbolo; // se inserta en el elemento HTML el valor necesario

  let asignarInferior = document.querySelector(".inferior");
  asignarInferior.innerHTML = simbolo;

  let asignarMedio = document.querySelector(".medio");
  asignarMedio.innerHTML = generdordeNumero();

  if (simbolo == "♥" || simbolo == "♦") {
    //se crea el if para asiganar el color rojo a cartas de corazones y diamantes
    asignarSuperior.style.color = "red";
    asignarInferior.style.color = "red";
    asignarMedio.style.color = "red";
  }
};

function generdordeNumero() {
  //FUNCION para generar numero aleatorio
  let numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; // arreglo que contiene los valores de la carta
  let ramdom_numero = Math.floor(Math.random() * numero.length); // numero aleatorio para selecionar el indice del arreglo
  return numero[ramdom_numero];
}

function generdordeSimbolo() {
  let simbolo = ["♠", "♣", "♥", "♦"];
  let ramdom_simbolo = Math.floor(Math.random() * simbolo.length);
  return simbolo[ramdom_simbolo];
}

console.log(generdordeNumero()); // para comprobar que las funciones creadas dan numero aleatorio en consola
console.log(generdordeSimbolo());
