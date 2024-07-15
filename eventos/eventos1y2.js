let boton = document.getElementById('calcular')

boton.addEventListener('click', () => {
    let estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;
    let resultado = peso / (estatura * estatura)

    document.getElementById('cajaDeResultado').innerText = "Su IMC es: " + resultado.toFixed(2)
})


let botonConversion = document.getElementById('pesos')

botonConversion.addEventListener('keyup', () => {
    let valorDolar = 4000
    let pesos = document.getElementById('pesos').value
    let dolar = document.getElementById('dolar')
    
    dolar.value = pesos / valorDolar
})


