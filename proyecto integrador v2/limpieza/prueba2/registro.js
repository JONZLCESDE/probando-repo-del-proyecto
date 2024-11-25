
document.addEventListener('DOMContentLoaded', function() {
    
    const aceptarButtons = document.querySelectorAll('.btn-aceptar');
    const rechazarButtons = document.querySelectorAll('.btn-rechazar');
    const esperaButtons = document.querySelectorAll('.btn-espera');

    
    aceptarButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Servicio Aceptado');
        });
    });

    rechazarButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Servicio Rechazado');
        });
    });

    esperaButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Tienes 10 minutos para aceptar el servicio o se cancelará automáticamente y puede afectar tu calificación');
        });
    });
});
