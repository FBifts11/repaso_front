let onOff = false;
let displayById = document.getElementById('display');
let onOffById = document.getElementById('onOff');
let ingresoPermitido = true;

function encenderApagar() {
    let buttons = document.getElementsByClassName('btn');

    if (onOff == false) {
        displayById.style.backgroundColor = 'yellowgreen';
        onOffById.value = 'Off';
        onOffById.style.backgroundColor = 'orange';
        onOffById.style.color = 'black'

        setTimeout(() => {
            displayById.value = '0'
        }, 500);
        onOff = true;

        for (let index = 0; index < buttons.length; index++) {
            buttons[index].disabled = false;

        }


    } else {
        displayById.value = '';
        displayById.style.backgroundColor = 'gray';
        onOffById.value = 'On';

        onOffById.style.cssText = 'background-color:green; color:white'
        onOff = false;

        for (let index = 0; index < buttons.length; index++) {
            buttons[index].disabled = true;

        }
    }
}


function ingresarDato(valor) {
    if (ingresoPermitido == false) {
        displayById.value = ''
    } else {
        if (displayById.value == '0') {
            displayById.value = ''
        }
        displayById.value += valor
    }

}

function ingresarOperador(valor) {
    if (ingresoPermitido == true) {
        displayById.value += valor
    }

}

function borrar() {
    displayById.value = '0'
}

function calcular() {
    const valorDisplay = displayById.value;

    try {
        const resultado = math.evaluate(valorDisplay);
        displayById.value = resultado
    } catch {
        displayById.value = 'Error'
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key
    onOffById.blur() // quita el foco del boton de encendido

    if (!isNaN(key)) {
        ingresarDato(key);
    } else if (['+','-','*','/'].includes(key)) {
        ingresarOperador(key)
    } else if(key === 'Enter') {
        calcular()
    } else if (key === 'Backspace' || key === 'Escape') {
        borrar()
    }

})