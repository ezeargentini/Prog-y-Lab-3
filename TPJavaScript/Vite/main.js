// Introduccion
// Ejercicio 1
let numA = 10;
let numB = 20;
let suma = numA + numB;
console.log(`La suma de ${numA} + ${numB} = ${suma}`);

// Ejercicio 2
let nombreUsuario = prompt("Ingrese su nombre: ");
console.log(`HOLA, ${nombreUsuario.toUpperCase()}!`);

// Operadores Logicos y condicionales
// Ejercicio 1
let valor1 = 10,
  valor2 = 5,
  valor3 = 110;
let mayorValor;
if (valor1 > valor2 && valor1 > valor3) {
  mayorValor = valor1;
} else if (valor2 > valor1 && valor2 > valor3) {
  mayorValor = valor2;
} else if (valor3 > valor1 && valor3 > valor2) {
  mayorValor = valor3;
} else {
  mayorValor = "No hay un número mayor";
}

console.log(`El mayor de los números es: ${mayorValor}`);

// Ejercicio 2
let numeroIngresado = Number(prompt("Ingrese un número: "));

if (!isNaN(numeroIngresado)) {
  const esPar = numeroIngresado % 2 === 0;
  console.log(`El número ${numeroIngresado} es ${esPar ? "par" : "impar"}`);
} else {
  console.log("No es un número válido");
}

// Operadores de asignacion y bucles
// Ejercicio 1
let cuentaRegresiva = 10;
while (cuentaRegresiva > 0) {
  console.log(cuentaRegresiva--);
}

// Ejercicio 2
let numeroMayor100;
do {
  numeroMayor100 = Number(prompt("Ingrese un número mayor a 100:"));
} while (numeroMayor100 <= 100);
console.log(`Ingresaste un número mayor a 100: ${numeroMayor100}`);

// Funciones
// Ejercicio 1
const esNumeroPar = (num) => num % 2 === 0;
let numeroParaFuncion = Number(prompt("Ingrese un número"));
console.log(
  `El número ${numeroParaFuncion} es par: ${esNumeroPar(numeroParaFuncion)}`
);

// Ejercicio 2
const convertirACelsius = (gradosCelsius) => gradosCelsius * 1.8 + 32;
let tempCelsius = Number(prompt("Ingrese la temperatura en Celsius"));
console.log(
  `${tempCelsius}°C son equivalentes a ${convertirACelsius(tempCelsius)}°F`
);

// Objetos
// Ejercicio 1
const persona = {
  nombre: "Ezequiel",
  edad: 22,
  ciudad: "Chacras de Coria",
  cambiarCiudad(nuevaCiudad) {
    this.ciudad = nuevaCiudad;
  },
};

console.log(
  `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`
);
persona.cambiarCiudad("Godoy Cruz");
console.log(`La persona cambió su ciudad a: ${persona.ciudad}`);

// Ejercicio 2
const libro = {
  titulo: "El Señor de los Anillos",
  autor: "J.R.R. Tolkien",
  anioPublicacion: 1954,
};

const esAntiguo = (anio) => new Date().getFullYear() - anio > 10;

console.log(
  `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anioPublicacion}`
);
console.log(
  `El libro ${libro.titulo} es antiguo: ${esAntiguo(libro.anioPublicacion)}`
);

// Arrays
// Ejercicio 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDuplicados = numeros.map((n) => n * 2);
console.log(numerosDuplicados);

// Ejercicio 2
const numeros20 = Array.from({ length: 20 }, (_, i) => i + 1);
const primeros10Pares = numeros20.filter((n) => n % 2 === 0).slice(0, 10);
console.log(`Los primeros 10 números pares: ${primeros10Pares}`);

// INTRO DOM
// Ejercicio 1
document.getElementById("cambioColor").addEventListener("click", () => {
  const parrafos = document.getElementsByClassName("parrafo");
  Array.from(parrafos).forEach((p) => (p.style.color = "blue"));
});

// Ejercicio 2
document.getElementById("buttonAlert").addEventListener("click", () => {
  const mensaje = document.getElementById("texto").value;
  alert(`Mensaje ingresado: ${mensaje}`);
});

// DOM
// Ejercicio 1
const itemsLi = document.getElementsByTagName("li");
Array.from(itemsLi).forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this.textContent);
  });
});

// Ejercicio 2
const inputTexto = document.getElementById("inputTexto");
document
  .getElementById("habilitar")
  .addEventListener("click", () => (inputTexto.disabled = false));
document
  .getElementById("deshabilitar")
  .addEventListener("click", () => (inputTexto.disabled = true));

// LocalStorage
// Ejercicio 1
document.getElementById("enviar").addEventListener("click", () => {
  const emailContainer = document.getElementById("emailGuardado");
  emailContainer.innerHTML = "";

  if (!localStorage.getItem("emailGuardado")) {
    const email = document.getElementById("email").value;
    localStorage.setItem("email", email);
    localStorage.setItem("emailGuardado", true);
  }

  const parrafoCorreo = document.createElement("p");
  parrafoCorreo.innerText = `Correo electrónico: ${localStorage.getItem(
    "email"
  )}`;
  emailContainer.appendChild(parrafoCorreo);
});

document.getElementById("eliminar").addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("emailGuardado");

  document.getElementById("emailGuardado").innerHTML = "";
});
