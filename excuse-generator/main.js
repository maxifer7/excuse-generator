window.onload = function () {
  // Arrays
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  // Función para obtener elemento aleatorio
  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Generar excusa
  let excuse =
    randomItem(who) +
    " " +
    randomItem(action) +
    " " +
    randomItem(what) +
    " " +
    randomItem(when) +
    ".";

  // Insertar en el HTML
  document.querySelector("#excuse").innerHTML = excuse;
};