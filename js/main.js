function iniciarPrograma() {
  let opcion;
  do {
    opcion = prompt(
      `Elige una opción:\n1. Realizar una suma (escribe 1)\n2. Salir del programa (escribe 2)`
    );

    switch (opcion) {
      case "1":
        realizarSumaContinua();
        break;
      case "2":
        alert("Saliendo del programa...");
        break;
      default:
        alert("Opción no válida. Por favor, elige una opción válida.");
    }
  } while (opcion !== "2");
}

function realizarSumaContinua() {
  let continuarSumando = true;

  while (continuarSumando) {
    const numero1 = parseInt(prompt("Ingresa el primer número para sumar:"));
    const numero2 = parseInt(prompt("Ingresa el segundo número para sumar:"));

    if (!isNaN(numero1) && !isNaN(numero2)) {
      const resultado = numero1 + numero2;
      alert(`La suma de ${numero1} y ${numero2} es igual a ${resultado}.`);
      const decision = prompt(
        "¿Quieres seguir sumando? (Presiona s para sí, cualquier otra tecla para no)"
      );
      continuarSumando = decision.toLowerCase() === "s";
    } else {
      alert("Por favor, ingresa números válidos.");
    }
  }
}
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", iniciarPrograma);
startButton.addEventListener("mouseover", () => {
  startButton.style.cursor = "pointer";
});
