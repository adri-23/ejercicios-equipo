/*Escribir un programa que lea un entero positivo, n , introducido por el usuario 
y después muestre en pantalla la suma de todos los enteros desde 1 hasta n
*/

function suma(numero) { 
    let resultado=0;
    for (let i = 0; i < numero; i++) {
        resultado = resultado + (i+1);
    } 
}
suma();