document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const servicio = urlParams.get('servicio');
    const servicioTitulo = document.getElementById('servicio-titulo');

    
    if (servicio === "limpieza-residuos") {
        servicioTitulo.textContent = "Solicitud para Limpieza de Residuos";
    } else if (servicio === "limpieza-hogares") {
        servicioTitulo.textContent = "Solicitud para Limpieza de Hogares";
    
    }

});

document.addEventListener("DOMContentLoaded", function () {

    const estrellas = document.querySelectorAll(".estrella");
    const calificacionTexto = document.getElementById("calificacion-texto");


    let calificacion = 0;


    function actualizarEstrellas(valor) {
        estrellas.forEach(estrella => {
            if (parseInt(estrella.getAttribute("data-valor")) <= valor) {
                estrella.classList.add("seleccionada");
            } else {
                estrella.classList.remove("seleccionada");
            }
        });

        document.getElementById("calificacion-valor").value = valor;

        calificacionTexto.textContent = `Calificación seleccionada: ${valor} de 5 estrellas`;
    }


    estrellas.forEach(estrella => {
        estrella.addEventListener("click", function () {
            const valor = parseInt(estrella.getAttribute("data-valor"));
            calificacion = valor;
            actualizarEstrellas(valor);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const checkboxResiduos = document.getElementById('residuos');
    const checkboxHogar = document.getElementById('hogar');
    const checkboxAmbos = document.getElementById('ambos');


    function manejarCheckboxes() {

        if (checkboxResiduos.checked) {
            checkboxHogar.checked = false;
            checkboxAmbos.checked = false;
        }


        if (checkboxHogar.checked) {
            checkboxResiduos.checked = false;
            checkboxAmbos.checked = false;
        }


        if (checkboxAmbos.checked) {
            checkboxResiduos.checked = false;
            checkboxHogar.checked = false;
        }
    }

    
    checkboxResiduos.addEventListener('change', manejarCheckboxes);
    checkboxHogar.addEventListener('change', manejarCheckboxes);
    checkboxAmbos.addEventListener('change', manejarCheckboxes);
});




document.addEventListener('DOMContentLoaded', function () {
    const checkboxMascotasSi = document.getElementById('mascotas-si');
    const checkboxMascotasNo = document.getElementById('mascotas-no');
    const textareaMascotas = document.getElementById('detalle-mascotas');
    const detalleMascotasLabel = document.getElementById('detalle-mascotas-label');

    
    function manejarMascotas() {
        if (checkboxMascotasSi.checked) {
            
            textareaMascotas.style.display = 'block';
            detalleMascotasLabel.style.display = 'block';
            textareaMascotas.setAttribute('required', 'true');
        } else {
            
            textareaMascotas.style.display = 'none';
            detalleMascotasLabel.style.display = 'none';
            textareaMascotas.removeAttribute('required');
        }

        
        if (checkboxMascotasNo.checked) {
            textareaMascotas.style.display = 'none';
            detalleMascotasLabel.style.display = 'none';
            textareaMascotas.removeAttribute('required');
        }
    }

    
    checkboxMascotasSi.addEventListener('change', manejarMascotas);
    checkboxMascotasNo.addEventListener('change', manejarMascotas);
});



document.addEventListener('DOMContentLoaded', function () {
    const radioPisosMas = document.getElementById('pregunta1_tres');
    const mensajePisos = document.getElementById('mensaje-pisos');
    const acuerdo = document.getElementById('acuerdo');

    
    function manejarOpciones() {
        if (radioPisosMas.checked) {
            
            mensajePisos.style.display = 'block';
        } else {
            
            mensajePisos.style.display = 'none';
        }
    }

    
    radioPisosMas.addEventListener('change', manejarOpciones);
    
    document.getElementById('pregunta1_si').addEventListener('change', function () {
        mensajePisos.style.display = 'none';
    });
    document.getElementById('pregunta1_no').addEventListener('change', function () {
        mensajePisos.style.display = 'none';
    });
});


document.getElementById('solicitud-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = 'confirmacion.html'; 
});
