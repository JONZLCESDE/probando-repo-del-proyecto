


document.addEventListener('DOMContentLoaded', function () {

    const aceptarButtons = document.querySelectorAll('.btn-aceptar');
    const rechazarButtons = document.querySelectorAll('.btn-rechazar');
    const esperaButtons = document.querySelectorAll('.btn-espera');
    const serviciosSection = document.querySelector('.servicios');  

    aceptarButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Servicio Aceptado');
            
            button.closest('.card').remove();

            
            agregarNuevoServicio();
        });
    });

    rechazarButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Servicio Rechazado');
            
            button.closest('.card').remove();

            
            agregarNuevoServicio();
        });
    });

    esperaButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Tienes 10 minutos para aceptar el servicio o se cancelará automáticamente y puede afectar tu calificación');
        });
    });

    function agregarNuevoServicio() {
        
        const nuevoServicio = document.createElement('div');
        nuevoServicio.classList.add('card');
        nuevoServicio.innerHTML = `
            <img src="/images/nuevo-servicio.jpg" alt="Nuevo Servicio">
            <h2>Nuevo Servicio de Limpieza</h2>
            <p>Este es un nuevo servicio disponible.</p>
            <div class="acciones">
                <button class="btn-aceptar">Aceptar</button>
                <button class="btn-rechazar">Rechazar</button>
                <button class="btn-espera">En espera</button>
            </div>
        `;

        
        serviciosSection.appendChild(nuevoServicio);

    
        nuevoServicio.querySelector('.btn-aceptar').addEventListener('click', function () {
            alert('Servicio Aceptado');
            nuevoServicio.remove();
            agregarNuevoServicio();
        });
        nuevoServicio.querySelector('.btn-rechazar').addEventListener('click', function () {
            alert('Servicio Rechazado');
            nuevoServicio.remove();
            agregarNuevoServicio();
        });
        nuevoServicio.querySelector('.btn-espera').addEventListener('click', function () {
            alert('Tienes 10 minutos para aceptar el servicio o se cancelará automáticamente y puede afectar tu calificación');
        });
    }
});
