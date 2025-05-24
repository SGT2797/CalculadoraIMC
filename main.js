function calcularIMC() {
    let peso = prompt ("Ingrese su peso en Kg:")
    let altura = prompt ("Ingrese su altura en Metros")
    
    let imc = peso / (altura*altura)

    if (imc <= 18.5) {
        alert ("Su IMC es:" +imc+ "Usted tiene Bajo Peso");
    }
    else if (imc <= 24.9) {
        alert ("Su IMC es:" +imc+ "Usted tiene Peso Normal")
    }
    else if (imc <=29.9) {
        alert ("Su IMC es:" +imc+ "Usted tiene Sobrepeso")
    }
    else if (imx >30) {
        alert ("Su IMC es:" +imc+ "Usted tiene Obesidad")
    }
}