/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let quien = ["El gato", "La vaca", "El señor", "La vecina"];
  let que = ["lanzó", "se comió", "se robó", "rompió"];
  let cuando = [
    "todos mis apuntes",
    "mi tarea cuando termine",
    "mi almuerzo y me desmaye",
    "mi ropa y no pude salir"
  ];

  function randomn() {
    let num1 = Math.floor(Math.random() * 4);
    return num1;
  }
  let excusagenerada = `${quien[randomn()]} ${que[randomn()]} ${
    cuando[randomn()]
  }`;

  document.querySelector("#excuse").innerHTML = excusagenerada;
};
