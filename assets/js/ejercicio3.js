/*
function totalCajas(payasos, muñecas) {
    let totalCajas = 0;
    let totalPayasosPeso = 0;
    let totalMuñecasPeso = 0;

    let totalBoxClowns = 1000;
    for (let index = 0; index < payasos; index++) {
        if ((totalPayasosPeso + 112) >= totalBoxClowns) {
            totalCajas++;
            totalBoxClowns += 1000;
        } else {
            totalPayasosPeso += 112;
        }
    }

    let totalBoxDolls = 1000;
    for (let index = 0; index < muñecas; index++) {
        if ((totalMuñecasPeso + 75) >= totalBoxDolls) {
            totalCajas++;
            totalBoxDolls += 1000;
        } else {
            totalMuñecasPeso += 75 + totalPayasosPeso;
            totalPayasosPeso = 0;
        }
    }

    console.log(totalBoxes)

}

totalBoxes(20, 20) */


/*

function sacartotal() {
    let payasos = parseFloat(prompt("Ingresa los payasos")) obtener paysos q vamos amultiplicar
    let munecas = parseFloat(prompt("Ingresa los payasos"))

    total = ((payasos * 112) / 1000) + ((munecas * 75) / 1000) para obtener el numero de paquetes
    console.log(total)
}
function sacartotal() {
    let payasos = parseFloat(prompt("Ingresa los payasos"))
    let munecas = parseFloat(prompt("Ingresa los muñecas"))

    total = ((payasos * 112) / 1000) + ((munecas * 75) / 1000)
    console.log(total)
}
*/


function sacartotal(){
    let payasos = parseFloat(prompt("Ingresa los payasos")) //obtener payasos que vamos a multiplicar y lo guardamos una variable llamada payasos //
    let munecas = parseFloat(prompt("Ingresa los muñecas"))
  
    total = ((payasos * 112) / 1000) + ((munecas * 75) / 1000) //obtener el numero de paquetes//
    
    console.log(`Se enviaran ${Math.ceil(total)} paquetes`); //el math.ceil:redondea hacia arriba //
    
  }
  sacartotal();