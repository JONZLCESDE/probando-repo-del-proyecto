


document.addEventListener("DOMContentLoaded", function() {
    
    const boton = document.getElementById("solicitar-presupuesto");

    
    if (boton) {
        
        boton.addEventListener("click", function() {
            
            window.location.href = "solicitud.html";  
        });
    } else {
        console.log("Botón no encontrado");
    }
});
