//Validación del formulario

//Varibles globales
const formulario = document.getElementById("formulario");
const camposValidar = document.querySelectorAll(".validar");
const iconosValid = document.querySelectorAll(".icon-good");
const iconosNoValid = document.querySelectorAll(".icon-bad");


validacion();
function validacion() {

    // Evento de validación general del form (Submit)
    formulario.addEventListener('submit', validarFomulario);

    //Evento de validación para cada campo (Al modificar el campo)
    camposValidar.forEach(campo => {

        //Al salir del campo
        campo.addEventListener("blur", validarCampo);

        //Al escirbir algún caracter
        campo.addEventListener("keyup", validarCampo)
    });
}

//Función que hace la validación general del formulario
function validarFomulario(e) {

    e.preventDefault();
    camposValidar.forEach(campo => {
        
        const mensajeError = campo.parentElement.querySelector('p');

        
        if (campo.classList.contains('validar')) {
            
            mensajeError.classList.add('error');
            //Mostrar los iconos de error
            mostrarIcono(campo.parentElement.querySelector('.icon-bad'));

        } else {

            mensajeError.innerText = "Campo Válidado";
            mensajeError.classList.remove('error');
            mensajeError.classList.add('valid');
            mostrarIcono(campo.parentElement.querySelector('.icon-good'));
            quitarIcono(campo.parentElement.querySelector('.icon-bad'));

        }
    });

    
    //Pasando la validación.....
    let isValid = true;
    camposValidar.forEach(campo => {
        if(campo.classList.contains('validar')) {
            isValid = false;
        }
    });
    
    if(isValid) {
        console.log("Si pasó la validación")
    }
    else {
        console.log("NO pasó la validación")
    }
}

//Función que valida cada campo en automático al escribir algo
function validarCampo(e) {

    //Expresiones regulares a validar
    const expresionesRegulares = {
        nombre: /^[A-Za-z0-9]+$/g,
        email: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
    };

    const campo = e.target;
    const campoId = campo.id;
    const campoValue = campo.value;
    const iconValid = campo.parentElement.querySelector('.icon-good');
    const iconNoValid = campo.parentElement.querySelector('.icon-bad');

    const mensajeError = campo.parentElement.querySelector('p');


    //Evaluar cada campo para su respectiva validación
    switch (campoId) {

        case 'name':
            
            //El campo del nombre debe ser mayor a 5 caracteres
            if( campoValue.length > 6) {

                mensajeError.innerText = "Campo Válidado";
                campo.classList.remove('validar');
                mensajeError.classList.remove('error');
                mensajeError.classList.add('valid');
                mostrarIcono(iconValid);
                quitarIcono(iconNoValid);

            } else {

                campo.classList.add('validar');
                mensajeError.classList.add('error');
                mensajeError.classList.remove('valid');
                mostrarIcono(iconNoValid);
                quitarIcono(iconValid);

            }

            break;
        case 'userName':

            //El campo del userName admite solo letras y numeros
            //Además debe tener por lo menos 7 caracteres
            if(expresionesRegulares.nombre.test(campoValue) && campoValue.length > 7) {

                mensajeError.innerText = "Campo Válidado";
                campo.classList.remove('validar');
                mensajeError.classList.remove('error');
                mensajeError.classList.add('valid');
                mostrarIcono(iconValid);
                quitarIcono(iconNoValid);

            } else {

                campo.classList.add('validar');
                mensajeError.classList.add('error');
                mensajeError.classList.remove('valid');
                mostrarIcono(iconNoValid);
                quitarIcono(iconValid);

            }

            break;
        case 'email':
            
            //El campo del email
            if(expresionesRegulares.email.test(campoValue)) {

                mensajeError.innerText = "Campo Válidado";
                campo.classList.remove('validar');
                mensajeError.classList.remove('error');
                mensajeError.classList.add('valid');
                mostrarIcono(iconValid);
                quitarIcono(iconNoValid);

            } else {

                campo.classList.add('validar');
                mensajeError.classList.add('error');
                mensajeError.classList.remove('valid');
                mostrarIcono(iconNoValid);
                quitarIcono(iconValid);

            }
    

            break;
        case 'password':

            //El campo de la contraseña debe tener:
                // Minimo 8 caracteres
                // Maximo 15
                // Al menos una letra mayúscula
                // Al menos una letra minucula
                // Al menos un dígito
                // No espacios en blanco
                // Al menos 1 caracter especial

            if(expresionesRegulares.password.test(campoValue)) {

                mensajeError.innerText = "Campo Válidado";
                campo.classList.remove('validar');
                mensajeError.classList.remove('error');
                mensajeError.classList.add('valid');
                mostrarIcono(iconValid);
                quitarIcono(iconNoValid);

            } else {

                campo.classList.add('validar');
                mensajeError.classList.add('error');
                mensajeError.classList.remove('valid');
                mostrarIcono(iconNoValid);
                quitarIcono(iconValid);

            }


            break;
        case 'confirmPassword':

            const campoPassword = document.getElementById('password').value;
            //El campo del userName
            if(expresionesRegulares.password.test(campoValue)) {

                if( campoPassword === campoValue) {

                    mensajeError.innerText = "Campo Válidado";
                    campo.classList.remove('validar');
                    mensajeError.classList.remove('error');
                    mensajeError.classList.add('valid');
                    mostrarIcono(iconValid);
                    quitarIcono(iconNoValid);

                } else {

                    campo.classList.add('validar');
                    mensajeError.classList.add('error');
                    mensajeError.classList.remove('valid');
                    mostrarIcono(iconNoValid);
                    quitarIcono(iconValid);
    
                }

            } else {

                campo.classList.add('validar');
                mensajeError.classList.add('error');
                mensajeError.classList.remove('valid');
                mostrarIcono(iconNoValid);
                quitarIcono(iconValid);

            }


            break;


    }
}

// Mostrar icono correspondiente
function mostrarIcono(icono) {

    icono.classList.add('icon-visible');
    icono.classList.remove('icon');

}
// Mostrar icono correspondiente
function quitarIcono(icono) {

    icono.classList.remove('icon-visible');
    icono.classList.add('icon');

}
 