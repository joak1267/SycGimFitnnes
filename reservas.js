// clases-whatsapp.js - Sistema de reservas con WhatsApp para S&C FITNESS GYM

// Datos de horarios para cada clase

const horariosClases = {

    "aerobica": {

        nombre: "Aeróbica",

        descripcion: "Clases de aeróbica para mejorar resistencia cardiovascular",

        horarios: [

            { dia: "Lunes", hora: "09:00", instructor: "María López", nivel: "Principiante" },

            { dia: "Martes", hora: "18:00", instructor: "Carlos Ruiz", nivel: "Intermedio" },

            { dia: "Miércoles", hora: "10:00", instructor: "María López", nivel: "Avanzado" },

            { dia: "Jueves", hora: "19:00", instructor: "Carlos Ruiz", nivel: "Intermedio" },

            { dia: "Viernes", hora: "09:00", instructor: "María López", nivel: "Principiante" },

            { dia: "Sábado", hora: "11:00", instructor: "Ana García", nivel: "Todos los niveles" }

        ]

    },

    "localizada": {

        nombre: "Localizada",

        descripcion: "Tonificación y fortalecimiento muscular específico",

        horarios: [

            { dia: "Lunes", hora: "10:00", instructor: "Roberto Sánchez", nivel: "Intermedio" },

            { dia: "Martes", hora: "19:00", instructor: "Laura Fernández", nivel: "Avanzado" },

            { dia: "Miércoles", hora: "11:00", instructor: "Roberto Sánchez", nivel: "Principiante" },

            { dia: "Jueves", hora: "20:00", instructor: "Laura Fernández", nivel: "Intermedio" },

            { dia: "Viernes", hora: "10:00", instructor: "Roberto Sánchez", nivel: "Avanzado" },

            { dia: "Sábado", hora: "10:00", instructor: "Laura Fernández", nivel: "Todos los niveles" }

        ]

    },

    "zumba": {

        nombre: "Zumba",

        descripcion: "Divertidas clases de baile para quemar calorías",

        horarios: [

            { dia: "Lunes", hora: "18:00", instructor: "Sofía Martínez", nivel: "Principiante" },

            { dia: "Martes", hora: "20:00", instructor: "Sofía Martínez", nivel: "Intermedio" },

            { dia: "Miércoles", hora: "18:00", instructor: "Pedro Gómez", nivel: "Avanzado" },

            { dia: "Jueves", hora: "20:00", instructor: "Pedro Gómez", nivel: "Intermedio" },

            { dia: "Viernes", hora: "18:00", instructor: "Sofía Martínez", nivel: "Principiante" },

            { dia: "Sábado", hora: "16:00", instructor: "Pedro Gómez", nivel: "Todos los niveles" }

        ]

    },

    "gap": {

        nombre: "G.A.P (Glúteos, Abdominales, Piernas)",

        descripcion: "Enfoque en glúteos, abdominales y piernas",

        horarios: [

            { dia: "Lunes", hora: "19:00", instructor: "Claudia Rodríguez", nivel: "Intermedio" },

            { dia: "Martes", hora: "09:00", instructor: "Claudia Rodríguez", nivel: "Principiante" },

            { dia: "Miércoles", hora: "19:00", instructor: "Diego Castro", nivel: "Avanzado" },

            { dia: "Jueves", hora: "09:00", instructor: "Diego Castro", nivel: "Intermedio" },

            { dia: "Viernes", hora: "19:00", instructor: "Claudia Rodríguez", nivel: "Principiante" },

            { dia: "Sábado", hora: "12:00", instructor: "Diego Castro", nivel: "Todos los niveles" }

        ]

    },

    "funcional": {

        nombre: "Entrenamiento Funcional",

        descripcion: "Movimientos funcionales para actividades diarias",

        horarios: [

            { dia: "Lunes", hora: "08:00", instructor: "Javier Méndez", nivel: "Principiante" },

            { dia: "Martes", hora: "17:00", instructor: "Javier Méndez", nivel: "Intermedio" },

            { dia: "Miércoles", hora: "08:00", instructor: "Elena Vargas", nivel: "Avanzado" },

            { dia: "Jueves", hora: "17:00", instructor: "Elena Vargas", nivel: "Intermedio" },

            { dia: "Viernes", hora: "08:00", instructor: "Javier Méndez", nivel: "Principiante" },

            { dia: "Sábado", hora: "09:00", instructor: "Elena Vargas", nivel: "Todos los niveles" }

        ]

    },

    "step": {

        nombre: "Step",

        descripcion: "Clases energéticas de step para cardio y coordinación",

        horarios: [

            { dia: "Lunes", hora: "17:00", instructor: "Mónica Herrera", nivel: "Principiante" },

            { dia: "Martes", hora: "10:00", instructor: "Mónica Herrera", nivel: "Intermedio" },

            { dia: "Miércoles", hora: "17:00", instructor: "Ricardo López", nivel: "Avanzado" },

            { dia: "Jueves", hora: "10:00", instructor: "Ricardo López", nivel: "Intermedio" },

            { dia: "Viernes", hora: "17:00", instructor: "Mónica Herrera", nivel: "Principiante" },

            { dia: "Sábado", hora: "14:00", instructor: "Ricardo López", nivel: "Todos los niveles" }

        ]

    },

    "stretching": {

        nombre: "Stretching",

        descripcion: "Estiramientos para flexibilidad y reducción de lesiones",

        horarios: [

            { dia: "Lunes", hora: "20:00", instructor: "Patricia Silva", nivel: "Todos los niveles" },

            { dia: "Martes", hora: "11:00", instructor: "Patricia Silva", nivel: "Principiante" },

            { dia: "Miércoles", hora: "20:00", instructor: "Fernando Ríos", nivel: "Intermedio" },

            { dia: "Jueves", hora: "11:00", instructor: "Fernando Ríos", nivel: "Avanzado" },

            { dia: "Viernes", hora: "20:00", instructor: "Patricia Silva", nivel: "Todos los niveles" },

            { dia: "Sábado", hora: "13:00", instructor: "Fernando Ríos", nivel: "Todos los niveles" }

        ]

    },

    "power": {

        nombre: "Power Semi Personalizado",

        descripcion: "Entrenamiento de alta intensidad semi-personalizado",

        horarios: [

            { dia: "Lunes", hora: "07:00", instructor: "Alejandro Torres", nivel: "Avanzado" },

            { dia: "Martes", hora: "07:00", instructor: "Alejandro Torres", nivel: "Intermedio" },

            { dia: "Miércoles", hora: "07:00", instructor: "Gabriela Montes", nivel: "Avanzado" },

            { dia: "Jueves", hora: "07:00", instructor: "Gabriela Montes", nivel: "Intermedio" },

            { dia: "Viernes", hora: "07:00", instructor: "Alejandro Torres", nivel: "Avanzado" },

            { dia: "Sábado", hora: "08:00", instructor: "Gabriela Montes", nivel: "Intermedio" }

        ]

    }

};

// Variable para almacenar la selección actual del usuario

let seleccionActual = {

    clase: null,

    horario: null,

    dia: null,

    instructor: null

};

// Función para mostrar el modal con horarios y opción de anotarse

function mostrarHorariosClase(tipoClase) {

    const clase = horariosClases[tipoClase];

    if (!clase) {

        console.error("Clase no encontrada:", tipoClase);

        return;

    }

    // Resetear selección actual

    seleccionActual = {

        clase: clase.nombre,

        horario: null,

        dia: null,

        instructor: null

    };

    // Crear modal si no existe

    let modal = document.getElementById('modal-horarios');

    if (!modal) {

        modal = document.createElement('div');

        modal.id = 'modal-horarios';

        modal.style.cssText = `

            position: fixed;

            top: 0;

            left: 0;

            width: 100%;

            height: 100%;

            background-color: rgba(0,0,0,0.7);

            display: flex;

            justify-content: center;

            align-items: center;

            z-index: 2000;

            opacity: 0;

            transition: opacity 0.3s;

        `;

        document.body.appendChild(modal);

    }

    // Crear contenido del modal

    const modalContent = document.createElement('div');

    modalContent.style.cssText = `

        background: white;

        border-radius: 15px;

        padding: 30px;

        max-width: 900px;

        width: 90%;

        max-height: 80vh;

        overflow-y: auto;

        position: relative;

        box-shadow: 0 10px 30px rgba(0,0,0,0.3);

        transform: translateY(-20px);

        transition: transform 0.3s;

    `;

    // Encabezado del modal

    modalContent.innerHTML = `

        <button id="cerrar-modal" style="

            position: absolute;

            top: 15px;

            right: 15px;

            background: #e91e63;

            color: white;

            border: none;

            width: 30px;

            height: 30px;

            border-radius: 50%;

            cursor: pointer;

            font-size: 18px;

            display: flex;

            align-items: center;

            justify-content: center;

        ">×</button>

        

        <h2 style="color: #880e4f; margin-bottom: 10px;">${clase.nombre}</h2>

        <p style="color: #8a6c7d; margin-bottom: 25px;">${clase.descripcion}</p>

        

        <div style="margin-bottom: 20px; padding: 15px; background: #fff5f8; border-radius: 10px; display: none;" id="seleccion-info">

            <h4 style="color: #880e4f; margin-bottom: 10px;">

                <i class="fas fa-check-circle"></i> Horario Seleccionado

            </h4>

            <p id="info-seleccion" style="margin: 0; color: #8a6c7d;"></p>

        </div>

        

        <h3 style="color: #880e4f; margin-bottom: 20px; border-bottom: 2px solid #ff80ab; padding-bottom: 8px;">

            <i class="fas fa-calendar-alt"></i> Selecciona un Horario

        </h3>

        

        <div id="lista-horarios" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; margin-bottom: 25px;"></div>

        

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ffe6ee;">

            <button id="btn-anotarse" disabled style="

                background: #4CAF50;

                color: white;

                border: none;

                padding: 14px 30px;

                border-radius: 30px;

                cursor: pointer;

                font-size: 16px;

                font-weight: 600;

                transition: all 0.3s;

                display: inline-flex;

                align-items: center;

                gap: 10px;

                opacity: 0.5;

            ">

                <i class="fab fa-whatsapp"></i> Anotarse en esta clase

            </button>

            <p style="color: #8a6c7d; margin-top: 10px; font-size: 14px;">

                Serás redirigido a WhatsApp para confirmar tu reserva

            </p>

        </div>

        

        <div style="margin-top: 25px; padding: 15px; background: #fff5f8; border-radius: 10px;">

            <h4 style="color: #880e4f; margin-bottom: 10px;"><i class="fas fa-info-circle"></i> Información Importante</h4>

            <ul style="color: #8a6c7d; padding-left: 20px;">

                <li>Llegar 10 minutos antes del inicio de la clase</li>

                <li>Traer toalla y botella de agua</li>

                <li>Ropa deportiva cómoda</li>

                <li>Reserva previa obligatoria</li>

                <li>Cancelación con 2 horas de anticipación</li>

            </ul>

        </div>

    `;

    // Agregar horarios a la lista

    const listaHorarios = modalContent.querySelector('#lista-horarios');

    clase.horarios.forEach(horario => {

        const horarioElement = document.createElement('div');

        horarioElement.className = 'opcion-horario';

        horarioElement.dataset.dia = horario.dia;

        horarioElement.dataset.hora = horario.hora;

        horarioElement.dataset.instructor = horario.instructor;

        

        horarioElement.style.cssText = `

            background: linear-gradient(135deg, #fff5f8, white);

            border: 2px solid #ffe6ee;

            padding: 15px;

            border-radius: 10px;

            box-shadow: 0 3px 10px rgba(233, 30, 99, 0.1);

            cursor: pointer;

            transition: all 0.3s;

        `;

        

        horarioElement.innerHTML = `

            <div style="display: flex; justify-content: space-between; align-items: start;">

                <div>

                    <strong style="color: #880e4f; font-size: 18px;">${horario.dia}</strong>

                    <p style="margin: 5px 0; color: #e91e63; font-weight: bold; font-size: 16px;">

                        <i class="far fa-clock"></i> ${horario.hora} hs

                    </p>

                </div>

                <span style="background: ${getColorNivel(horario.nivel)}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 12px;">

                    ${horario.nivel}

                </span>

            </div>

            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ffe6ee;">

                <p style="color: #8a6c7d; font-size: 14px;">

                    <i class="fas fa-user-tie"></i> Instructor: ${horario.instructor}

                </p>

            </div>

            <div style="text-align: center; margin-top: 10px;">

                <span class="seleccionar-texto" style="color: #e91e63; font-weight: 600; font-size: 14px;">

                    <i class="far fa-hand-pointer"></i> Seleccionar este horario

                </span>

            </div>

        `;

        

        // Agregar evento de selección

        horarioElement.addEventListener('click', function() {

            seleccionarHorario(this);

        });

        

        listaHorarios.appendChild(horarioElement);

    });

    // Limpiar modal y agregar nuevo contenido

    modal.innerHTML = '';

    modal.appendChild(modalContent);

    // Mostrar modal con animación

    setTimeout(() => {

        modal.style.opacity = '1';

        modalContent.style.transform = 'translateY(0)';

    }, 10);

    // Agregar evento para cerrar modal

    modal.addEventListener('click', (e) => {

        if (e.target === modal || e.target.id === 'cerrar-modal') {

            cerrarModal();

        }

    });

    // Agregar evento de teclado para cerrar con ESC

    document.addEventListener('keydown', cerrarConESC);

    

    // Agregar evento al botón de anotarse

    setTimeout(() => {

        const btnAnotarse = document.getElementById('btn-anotarse');

        if (btnAnotarse) {

            btnAnotarse.addEventListener('click', anotarseEnClase);

        }

    }, 100);

}

// Función para seleccionar un horario

function seleccionarHorario(elemento) {

    // Remover selección anterior

    document.querySelectorAll('.opcion-horario').forEach(el => {

        el.style.borderColor = '#ffe6ee';

        el.style.background = 'linear-gradient(135deg, #fff5f8, white)';

        el.querySelector('.seleccionar-texto').innerHTML = '<i class="far fa-hand-pointer"></i> Seleccionar este horario';

    });

    

    // Marcar como seleccionado

    elemento.style.borderColor = '#4CAF50';

    elemento.style.background = 'linear-gradient(135deg, #f0fff4, white)';

    elemento.querySelector('.seleccionar-texto').innerHTML = '<i class="fas fa-check-circle"></i> Horario seleccionado';

    

    // Actualizar selección actual

    seleccionActual.dia = elemento.dataset.dia;

    seleccionActual.horario = elemento.dataset.hora;

    seleccionActual.instructor = elemento.dataset.instructor;

    

    // Mostrar información de selección

    const seleccionInfo = document.getElementById('seleccion-info');

    const infoSeleccion = document.getElementById('info-seleccion');

    const btnAnotarse = document.getElementById('btn-anotarse');

    

    if (seleccionInfo && infoSeleccion && btnAnotarse) {

        seleccionInfo.style.display = 'block';

        infoSeleccion.innerHTML = `

            <strong>${seleccionActual.clase}</strong><br>

            ${seleccionActual.dia} a las ${seleccionActual.horario} hs<br>

            Instructor: ${seleccionActual.instructor}

        `;

        

        // Habilitar botón de anotarse

        btnAnotarse.disabled = false;

        btnAnotarse.style.opacity = '1';

        btnAnotarse.style.background = '#4CAF50';

    }

}

// Función para redirigir a WhatsApp

function anotarseEnClase() {

    if (!seleccionActual.horario || !seleccionActual.clase) {

        alert('Por favor, selecciona un horario primero');

        return;

    }

    

    // Número de WhatsApp (formato internacional)

    const numeroWhatsApp = '+5491169182718';

    

    // Crear mensaje personalizado

    // Crear mensaje personalizado

const mensaje = `Hola Buenas, estuve viendo la web y me intereso hacer "${seleccionActual.clase}" a las ${seleccionActual.horario} del día ${seleccionActual.dia}. Me gustaría reservar mi lugar.`;

    

    // Codificar el mensaje para URL

    const mensajeCodificado = encodeURIComponent(mensaje);

    

    // Crear URL de WhatsApp

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    

    // Redirigir a WhatsApp

    window.open(urlWhatsApp, '_blank');

    

    // Cerrar modal después de un breve momento

    setTimeout(() => {

        cerrarModal();

        

        // Mostrar mensaje de confirmación

        mostrarConfirmacionReserva();

    }, 500);

}

// Función para mostrar confirmación de reserva

function mostrarConfirmacionReserva() {

    const confirmacion = document.createElement('div');

    confirmacion.id = 'confirmacion-reserva';

    confirmacion.style.cssText = `

        position: fixed;

        top: 20px;

        right: 20px;

        background: linear-gradient(to right, #4CAF50, #45a049);

        color: white;

        padding: 15px 25px;

        border-radius: 10px;

        box-shadow: 0 5px 15px rgba(0,0,0,0.2);

        z-index: 3000;

        display: flex;

        align-items: center;

        gap: 10px;

        transform: translateX(120%);

        transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    `;

    

    confirmacion.innerHTML = `

        <i class="fas fa-check-circle" style="font-size: 20px;"></i>

        <div>

            <strong>¡Reserva iniciada!</strong><br>

            <small>Serás redirigido a WhatsApp para confirmar</small>

        </div>

    `;

    

    document.body.appendChild(confirmacion);

    

    // Mostrar con animación

    setTimeout(() => {

        confirmacion.style.transform = 'translateX(0)';

    }, 100);

    

    // Ocultar después de 5 segundos

    setTimeout(() => {

        confirmacion.style.transform = 'translateX(120%)';

        setTimeout(() => {

            if (confirmacion.parentNode) {

                confirmacion.parentNode.removeChild(confirmacion);

            }

        }, 500);

    }, 5000);

}

// Función para obtener color según nivel

function getColorNivel(nivel) {

    switch(nivel.toLowerCase()) {

        case 'principiante': return '#4CAF50';

        case 'intermedio': return '#2196F3';

        case 'avanzado': return '#FF9800';

        default: return '#9C27B0';

    }

}

// Función para cerrar modal

function cerrarModal() {

    const modal = document.getElementById('modal-horarios');

    if (modal) {

        modal.style.opacity = '0';

        setTimeout(() => {

            if (modal.parentNode) {

                modal.parentNode.removeChild(modal);

            }

        }, 300);

    }

    document.removeEventListener('keydown', cerrarConESC);

}

// Función para cerrar con tecla ESC

function cerrarConESC(e) {

    if (e.key === 'Escape') {

        cerrarModal();

    }

}

// Función para agregar botones de "Ver Horarios y Anotarse" a cada tarjeta de clase

function agregarBotonesHorarios() {

    // Mapear nombres de clases a IDs

    const mapeoClases = {

        'Aeróbica': 'aerobica',

        'Localizada': 'localizada',

        'Zumba': 'zumba',

        'G.A.P (Glúteos, Abdominales, Piernas)': 'gap',

        'Entrenamiento Funcional': 'funcional',

        'Step': 'step',

        'Stretching': 'stretching',

        'Power Semi Personalizado': 'power'

    };

    // Buscar todas las tarjetas de clase

    document.querySelectorAll('.class-card').forEach(card => {

        const titulo = card.querySelector('h3').textContent;

        const claseId = mapeoClases[titulo];

        

        if (claseId) {

            // Verificar si ya existe el botón

            if (!card.querySelector('.btn-anotarse-clase')) {

                // Crear contenedor para botones

                const btnContainer = document.createElement('div');

                btnContainer.style.cssText = `

                    display: flex;

                    gap: 10px;

                    margin-top: 15px;

                    flex-wrap: wrap;

                `;

                

                // Botón para ver horarios y anotarse

                const btnAnotarse = document.createElement('button');

                btnAnotarse.className = 'btn-anotarse-clase';

                btnAnotarse.innerHTML = '<i class="far fa-calendar-check"></i> Ver Horarios y Anotarse';

                btnAnotarse.style.cssText = `

                    background: linear-gradient(to right, #e91e63, #ff80ab);

                    color: white;

                    border: none;

                    padding: 10px 18px;

                    border-radius: 20px;

                    cursor: pointer;

                    font-size: 14px;

                    font-weight: 600;

                    transition: all 0.3s;

                    display: flex;

                    align-items: center;

                    gap: 8px;

                    flex-grow: 1;

                `;

                

                // Agregar evento de hover

                btnAnotarse.addEventListener('mouseenter', function() {

                    this.style.transform = 'translateY(-2px)';

                    this.style.boxShadow = '0 5px 15px rgba(233, 30, 99, 0.3)';

                });

                

                btnAnotarse.addEventListener('mouseleave', function() {

                    this.style.transform = 'translateY(0)';

                    this.style.boxShadow = 'none';

                });

                

                // Agregar evento de click

                btnAnotarse.addEventListener('click', function(e) {

                    e.stopPropagation();

                    mostrarHorariosClase(claseId);

                });

                

                // Botón de WhatsApp directo (opcional)

                const btnWhatsapp = document.createElement('a');

                btnWhatsapp.className = 'btn-whatsapp-directo';

                btnWhatsapp.innerHTML = '<i class="fab fa-whatsapp"></i> Consultar';

                btnWhatsapp.href = `https://wa.me/+5491169182718?text=${encodeURIComponent(`Hola, me interesa la clase de ${titulo}. ¿Podrían darme más información?`)}`;

                btnWhatsapp.target = '_blank';

                btnWhatsapp.style.cssText = `

                    background: #25D366;

                    color: white;

                    border: none;

                    padding: 10px 15px;

                    border-radius: 20px;

                    cursor: pointer;

                    font-size: 14px;

                    font-weight: 600;

                    transition: all 0.3s;

                    display: flex;

                    align-items: center;

                    gap: 8px;

                    text-decoration: none;

                    text-align: center;

                `;

                

                // Agregar eventos hover a WhatsApp

                btnWhatsapp.addEventListener('mouseenter', function() {

                    this.style.transform = 'translateY(-2px)';

                    this.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)';

                });

                

                btnWhatsapp.addEventListener('mouseleave', function() {

                    this.style.transform = 'translateY(0)';

                    this.style.boxShadow = 'none';

                });

                

                // Agregar botones al contenedor

                btnContainer.appendChild(btnAnotarse);

                btnContainer.appendChild(btnWhatsapp);

                

                // Agregar contenedor al contenido de la tarjeta

                const classContent = card.querySelector('.class-content');

                if (classContent) {

                    classContent.appendChild(btnContainer);

                    

                    // Ajustar estilo del contenedor de etiquetas

                    const classTag = card.querySelector('.class-tag');

                    if (classTag) {

                        classTag.style.marginBottom = '15px';

                    }

                }

            }

        }

    });

}

// Función para mostrar horario general de todas las clases

function mostrarHorarioGeneral() {

    const modal = document.createElement('div');

    modal.id = 'modal-horario-general';

    modal.style.cssText = `

        position: fixed;

        top: 0;

        left: 0;

        width: 100%;

        height: 100%;

        background-color: rgba(0,0,0,0.7);

        display: flex;

        justify-content: center;

        align-items: center;

        z-index: 2000;

        opacity: 0;

        transition: opacity 0.3s;

    `;

    const modalContent = document.createElement('div');

    modalContent.style.cssText = `

        background: white;

        border-radius: 15px;

        padding: 30px;

        max-width: 1000px;

        width: 95%;

        max-height: 85vh;

        overflow-y: auto;

        position: relative;

        box-shadow: 0 10px 30px rgba(0,0,0,0.3);

        transform: translateY(-20px);

        transition: transform 0.3s;

    `;

    // Generar tabla de horarios

    let tablaHTML = `

        <button id="cerrar-modal-general" style="

            position: absolute;

            top: 15px;

            right: 15px;

            background: #e91e63;

            color: white;

            border: none;

            width: 30px;

            height: 30px;

            border-radius: 50%;

            cursor: pointer;

            font-size: 18px;

            display: flex;

            align-items: center;

            justify-content: center;

        ">×</button>

        

        <h2 style="color: #880e4f; margin-bottom: 20px; text-align: center;">

            <i class="fas fa-calendar-week"></i> Horario General Semanal

        </h2>

        

        <div style="margin-bottom: 20px; text-align: center;">

            <button id="btn-anotarse-general" style="

                background: linear-gradient(to right, #e91e63, #ff80ab);

                color: white;

                border: none;

                padding: 12px 25px;

                border-radius: 25px;

                cursor: pointer;

                font-weight: 600;

                font-size: 15px;

                display: inline-flex;

                align-items: center;

                gap: 8px;

                transition: all 0.3s;

            ">

                <i class="fab fa-whatsapp"></i> Anotarse en una clase

            </button>

        </div>

        

        <div style="overflow-x: auto;">

            <table style="width: 100%; border-collapse: collapse;">

                <thead>

                    <tr style="background: linear-gradient(to right, #e91e63, #ff80ab); color: white;">

                        <th style="padding: 15px; text-align: left; border-radius: 8px 0 0 0;">Clase</th>

                        <th style="padding: 15px; text-align: center;">Lunes</th>

                        <th style="padding: 15px; text-align: center;">Martes</th>

                        <th style="padding: 15px; text-align: center;">Miércoles</th>

                        <th style="padding: 15px; text-align: center;">Jueves</th>

                        <th style="padding: 15px; text-align: center;">Viernes</th>

                        <th style="padding: 15px; text-align: center; border-radius: 0 8px 0 0;">Sábado</th>

                    </tr>

                </thead>

                <tbody>

    `;

    // Organizar datos por clase

    Object.keys(horariosClases).forEach(claseId => {

        const clase = horariosClases[claseId];

        tablaHTML += `

            <tr style="border-bottom: 1px solid #ffe6ee;">

                <td style="padding: 12px; font-weight: bold; color: #880e4f;">${clase.nombre}</td>

        `;

        // Para cada día de la semana

        const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        dias.forEach(dia => {

            const horariosDia = clase.horarios.filter(h => h.dia === dia);

            if (horariosDia.length > 0) {

                const horariosStr = horariosDia.map(h => 

                    `<div style="margin: 3px 0; padding: 5px; background: #fff5f8; border-radius: 5px; border-left: 3px solid #e91e63; cursor: pointer;" 

                          onclick="seleccionarDesdeGeneral('${claseId}', '${dia}', '${h.hora}', '${h.instructor}')">

                        <strong>${h.hora}</strong><br>

                        <small style="color: #8a6c7d;">${h.instructor}</small>

                    </div>`

                ).join('');

                tablaHTML += `<td style="padding: 12px; vertical-align: top;">${horariosStr}</td>`;

            } else {

                tablaHTML += `<td style="padding: 12px; vertical-align: top; color: #ccc;">-</td>`;

            }

        });

        tablaHTML += `</tr>`;

    });

    tablaHTML += `

                </tbody>

            </table>

        </div>

        

        <div style="margin-top: 25px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">

            <div style="display: flex; gap: 15px; flex-wrap: wrap;">

                <span style="display: flex; align-items: center; gap: 5px;">

                    <span style="display: inline-block; width: 12px; height: 12px; background: #4CAF50; border-radius: 50%;"></span>

                    <small>Principiante</small>

                </span>

                <span style="display: flex; align-items: center; gap: 5px;">

                    <span style="display: inline-block; width: 12px; height: 12px; background: #2196F3; border-radius: 50%;"></span>

                    <small>Intermedio</small>

                </span>

                <span style="display: flex; align-items: center; gap: 5px;">

                    <span style="display: inline-block; width: 12px; height: 12px; background: #FF9800; border-radius: 50%;"></span>

                    <small>Avanzado</small>

                </span>

            </div>

            <button id="imprimir-horario" style="

                background: #ff80ab;

                color: white;

                border: none;

                padding: 8px 20px;

                border-radius: 20px;

                cursor: pointer;

                font-weight: 600;

            ">

                <i class="fas fa-print"></i> Imprimir Horario

            </button>

        </div>

    `;

    modalContent.innerHTML = tablaHTML;

    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    // Mostrar con animación

    setTimeout(() => {

        modal.style.opacity = '1';

        modalContent.style.transform = 'translateY(0)';

    }, 10);

    // Eventos

    modal.addEventListener('click', (e) => {

        if (e.target === modal || e.target.id === 'cerrar-modal-general') {

            cerrarModalGeneral();

        }

    });

    // Evento para imprimir

    document.getElementById('imprimir-horario').addEventListener('click', () => {

        window.print();

    });

    

    // Evento para anotarse desde horario general

    document.getElementById('btn-anotarse-general').addEventListener('click', () => {

        cerrarModalGeneral();

        // Mostrar mensaje para seleccionar una clase

        setTimeout(() => {

            alert('Por favor, selecciona una clase específica para ver los horarios disponibles y anotarte.');

        }, 300);

    });

    // Evento para cerrar con ESC

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') cerrarModalGeneral();

    });

}

// Función para seleccionar desde horario general

function seleccionarDesdeGeneral(claseId, dia, hora, instructor) {

    cerrarModalGeneral();

    

    // Establecer selección

    seleccionActual = {

        clase: horariosClases[claseId].nombre,

        horario: hora,

        dia: dia,

        instructor: instructor

    };

    

    // Mostrar modal de confirmación directa

    mostrarConfirmacionDirecta();

}

// Función para mostrar confirmación directa

function mostrarConfirmacionDirecta() {

    const modal = document.createElement('div');

    modal.id = 'modal-confirmacion-directa';

    modal.style.cssText = `

        position: fixed;

        top: 0;

        left: 0;

        width: 100%;

        height: 100%;

        background-color: rgba(0,0,0,0.7);

        display: flex;

        justify-content: center;

        align-items: center;

        z-index: 2000;

        opacity: 0;

        transition: opacity 0.3s;

    `;

    

    const modalContent = document.createElement('div');

    modalContent.style.cssText = `

        background: white;

        border-radius: 15px;

        padding: 30px;

        max-width: 500px;

        width: 90%;

        position: relative;

        box-shadow: 0 10px 30px rgba(0,0,0,0.3);

        transform: translateY(-20px);

        transition: transform 0.3s;

        text-align: center;

    `;

    

    modalContent.innerHTML = `

        <button id="cerrar-confirmacion" style="

            position: absolute;

            top: 15px;

            right: 15px;

            background: #e91e63;

            color: white;

            border: none;

            width: 30px;

            height: 30px;

            border-radius: 50%;

            cursor: pointer;

            font-size: 18px;

            display: flex;

            align-items: center;

            justify-content: center;

        ">×</button>

        

        <div style="color: #4CAF50; font-size: 50px; margin-bottom: 20px;">

            <i class="fas fa-calendar-check"></i>

        </div>

        

        <h2 style="color: #880e4f; margin-bottom: 15px;">Confirmar Reserva</h2>

        

        <div style="background: #fff5f8; padding: 20px; border-radius: 10px; margin-bottom: 25px;">

            <p style="margin: 0; color: #8a6c7d;">

                <strong>${seleccionActual.clase}</strong><br>

                ${seleccionActual.dia} a las ${seleccionActual.horario} hs<br>

                Instructor: ${seleccionActual.instructor}

            </p>

        </div>

        

        <p style="color: #8a6c7d; margin-bottom: 25px;">

            ¿Deseas anotarte en esta clase? Serás redirigido a WhatsApp para confirmar tu reserva.

        </p>

        

        <div style="display: flex; gap: 15px; justify-content: center;">

            <button id="confirmar-reserva" style="

                background: #4CAF50;

                color: white;

                border: none;

                padding: 12px 30px;

                border-radius: 25px;

                cursor: pointer;

                font-weight: 600;

                font-size: 16px;

                display: flex;

                align-items: center;

                gap: 8px;

                transition: all 0.3s;

            ">

                <i class="fab fa-whatsapp"></i> Sí, anotarme

            </button>

            

            <button id="cancelar-reserva" style="

                background: #ff80ab;

                color: white;

                border: none;

                padding: 12px 30px;

                border-radius: 25px;

                cursor: pointer;

                font-weight: 600;

                font-size: 16px;

                transition: all 0.3s;

            ">

                Cancelar

            </button>

        </div>

    `;

    

    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    

    // Mostrar con animación

    setTimeout(() => {

        modal.style.opacity = '1';

        modalContent.style.transform = 'translateY(0)';

    }, 10);

    

    // Eventos

    document.getElementById('confirmar-reserva').addEventListener('click', anotarseEnClase);

    document.getElementById('cancelar-reserva').addEventListener('click', () => {

        cerrarModalConfirmacion();

    });

    

    modal.addEventListener('click', (e) => {

        if (e.target === modal || e.target.id === 'cerrar-confirmacion') {

            cerrarModalConfirmacion();

        }

    });

}

function cerrarModalConfirmacion() {

    const modal = document.getElementById('modal-confirmacion-directa');

    if (modal) {

        modal.style.opacity = '0';

        setTimeout(() => modal.remove(), 300);

    }

}

function cerrarModalGeneral() {

    const modal = document.getElementById('modal-horario-general');

    if (modal) {

        modal.style.opacity = '0';

        setTimeout(() => {

            if (modal.parentNode) {

                modal.parentNode.removeChild(modal);

            }

        }, 300);

    }

}

// Función para inicializar todo el sistema de reservas

function inicializarSistemaReservas() {

    // Agregar botones a las tarjetas existentes

    agregarBotonesHorarios();

    

    // Observar cambios en el DOM para agregar botones a nuevas tarjetas

    const observer = new MutationObserver((mutations) => {

        mutations.forEach((mutation) => {

            if (mutation.addedNodes.length) {

                agregarBotonesHorarios();

            }

        });

    });

    

    observer.observe(document.body, {

        childList: true,

        subtree: true

    });

    

    // Agregar botón de horario general si existe una sección de horarios

    const navLinks = document.querySelector('.nav-links');

    if (navLinks && !document.querySelector('#btn-horario-general')) {

        const li = document.createElement('li');

        li.innerHTML = `

            <a href="#" id="btn-horario-general" style="

                background: linear-gradient(to right, #e91e63, #ff80ab);

                color: white !important;

                padding: 8px 18px !important;

                border-radius: 20px;

                margin-left: 10px;

                display: flex;

                align-items: center;

                gap: 8px;

            ">

                <i class="fas fa-calendar-week"></i> Horario General

            </a>

        `;

        navLinks.appendChild(li);

        

        document.getElementById('btn-horario-general').addEventListener('click', (e) => {

            e.preventDefault();

            mostrarHorarioGeneral();

        });

    }

    

    // Agregar botón flotante de WhatsApp

    agregarBotonWhatsAppFlotante();

    

    console.log('✅ Sistema de reservas con WhatsApp inicializado correctamente');

}

// Función para agregar botón flotante de WhatsApp

function agregarBotonWhatsAppFlotante() {

    if (document.getElementById('whatsapp-flotante')) return;

    

    const btnWhatsApp = document.createElement('a');

    btnWhatsApp.id = 'whatsapp-flotante';

    btnWhatsApp.href = 'https://wa.me/+5491169182718?text=Hola%20Buenas,%20estuve%20viendo%20la%20web%20y%20me%20gustaría%20obtener%20más%20información%20sobre%20las%20clases.';

    btnWhatsApp.target = '_blank';

    btnWhatsApp.style.cssText = `

        position: fixed;

        bottom: 20px;

        right: 20px;

        background: #25D366;

        color: white;

        width: 60px;

        height: 60px;

        border-radius: 50%;

        display: flex;

        align-items: center;

        justify-content: center;

        font-size: 30px;

        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);

        z-index: 1000;

        text-decoration: none;

        transition: all 0.3s;

    `;

    

    btnWhatsApp.innerHTML = '<i class="fab fa-whatsapp"></i>';

    

    // Efecto de animación

    btnWhatsApp.addEventListener('mouseenter', function() {

        this.style.transform = 'scale(1.1)';

        this.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.6)';

    });

    

    btnWhatsApp.addEventListener('mouseleave', function() {

        this.style.transform = 'scale(1)';

        this.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.4)';

    });

    

    document.body.appendChild(btnWhatsApp);

}

// Inicializar cuando el DOM esté listo

document.addEventListener('DOMContentLoaded', inicializarSistemaReservas);

// Hacer funciones disponibles globalmente para eventos onclick en HTML

window.seleccionarDesdeGeneral = seleccionarDesdeGeneral;

// Exportar funciones para uso externo si es necesario

window.ReservasManager = {

    mostrarHorariosClase,

    anotarseEnClase,

    mostrarHorarioGeneral,

    inicializarSistemaReservas,

    horariosClases

};