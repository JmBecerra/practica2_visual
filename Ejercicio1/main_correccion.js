let array1 = [];

//los primero 28 impares
var cont = 0;
var num1 = 1;
do {
    if (num1 % 2 != 0) {
        array1.push(num1);

    }
    num1++;
} while (array1.length < 28);

document.write("Primeros 28 números impares <br>");
document.write(array1);
document.write("<hr>");

//los 14 pares desde el 200 hacia atras
let array2 = new Array();

for (var i = 198; array2.length <= 13; i--) {
    if (i % 2 == 0) {
        array2.push(i);
    }

}

document.write("Los 14 pares desde 200 (sin incluir) hacia atras <br>");
document.write(array2);
document.write("<hr>");