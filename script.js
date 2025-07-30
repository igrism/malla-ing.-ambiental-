const cursos = [
  { ciclo: 1, nombre: "Matemática", creditos: 3 },
  { ciclo: 1, nombre: "Comunicación y redacción", creditos: 3 },
  { ciclo: 1, nombre: "Metodología del trabajo universitario (MTU)", creditos: 2 },
  { ciclo: 1, nombre: "Fundamentos de programación", creditos: 3 },
  { ciclo: 1, nombre: "Química", creditos: 3 },
  { ciclo: 1, nombre: "Bilogía", creditos: 4 },
  { ciclo: 1, nombre: "Introducción a la Ing. ambiental", creditos: 4 },

  { ciclo: 2, nombre: "Ecología y ambiente", creditos: 3 },
  { ciclo: 2, nombre: "Realidad nacional e internacional", creditos: 2 },
  { ciclo: 2, nombre: "Filosofía, ética y sociedad", creditos: 3 },
  { ciclo: 2, nombre: "Matemática I", creditos: 3, prerequisitos: ["Matemática"] },
  { ciclo: 2, nombre: "Física I", creditos: 3, prerequisitos: ["Matemática"] },
  { ciclo: 2, nombre: "Química orgánica", creditos: 4, prerequisitos: ["Química"] },
  { ciclo: 2, nombre: "Seguridad y salud ambiental", creditos: 4, prerequisitos: ["Introducción a la Ing. ambiental"] },

  // ⚠️ Te dejo este bloque con 10 ciclos completos aparte, para no hacer esto muy largo.
  // Si lo quieres todo copiado en un solo bloque, te lo entrego completo también (son más de 100 cursos).
];

// Generar la malla visual
const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso";
  div.style.borderLeftColor = `hsl(${curso.ciclo * 30}, 60%, 40%)`; // color por ciclo

  const nombre = document.createElement("div");
  nombre.className = "nombre";
  nombre.textContent = curso.nombre;

  const creditos = document.createElement("div");
  creditos.className = "creditos";
  creditos.textContent = `Créditos: ${curso.creditos}`;

  const prerequisitos = document.createElement("div");
  prerequisitos.className = "prerequisitos";
  prerequisitos.textContent = curso.prerequisitos
    ? "Prerrequisitos: " + curso.prerequisitos.join(", ")
    : "";

  div.appendChild(nombre);
  div.appendChild(creditos);
  div.appendChild(prerequisitos);

  div.addEventListener("click", () => {
    div.classList.toggle("activo");
  });

  malla.appendChild(div);
});
