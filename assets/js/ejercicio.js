/*
Recibes la tarea de construir un sistema de alarma para una fábrica de champús.
Tu sistema recibe las siguientes variables: 
  temperatura ambiente, 
  humedad ambiental, 
  número de trabajadores en la planta y 
  nivel de líquido en los tanques. 
La alarma debe sonar siempre que la temperatura ambiente sea superior o inferior a los umbrales, 
si la humedad es superior al 50%, si hay más de 100 trabajadores en la planta al mismo tiempo, 
o si el nivel del líquido es superior al 90% (para evitar el desbordamiento).

umbral superior 90% umbral inferior 30%
*/

let temperaturaAmbiente = 91;
let humedad = 51;
let trabajadores =101;
let liquidoTanques = 91;

function checkSystem (){
  if((temperaturaAmbiente > 30) && (temperaturaAmbiente < 90)) {
    console.log('alarm');
 } 
 if(humedad>50) {
  console.log('alarm');
 }
 if(trabajadores>100) {
  console.log('alarm');
 }
 if(liquidoTanques>90) {
  console.log('alarm')
 }
}
checkSystem();

