const buttons = document.querySelectorAll("[data-btn-score]");
let valor;

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        valor =  e.target.textContent
        //console.log("el boton", valor , "fue clickeado");

        //Guardar el valor en localStorage
        localStorage.setItem("calificacion", valor);

        for(let i = 0; i <buttons.length; i++) {
            if(buttons[i] !== e.target) {
                buttons[i].classList.remove("selected");
            }
        }
        //Verificamos si el boton ya tiene la clase "selected"
        const isSelected = e.target.classList.contains("selected");

        // Si el boton ya esta seleccionado, lo deseleccionamos (removemos la clase)
        if(isSelected) {
            e.target.classList.remove("selected");
        } else {
            e.target.classList.add("selected");
        }

        // Redirigir a la pagina de calificacion
        //window.location.href = "./calificacion.html"
        
    });
};





