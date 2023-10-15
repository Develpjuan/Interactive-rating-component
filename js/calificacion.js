const dato = document.querySelector("[data-numero]");

//obtener el valor guardado en LocalStorage
const calificacion = localStorage.getItem("calificacion");

//mostrar el valor en el HTML
dato.textContent = calificacion;