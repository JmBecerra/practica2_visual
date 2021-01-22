let array1 = [];

//los primero 28 impares
var cont = 0;
var num1 = 1;
do {
    if (num1 % 2 != 0) {
        array1.push(num1);
        cont++;
    }
    num1++;
} while (cont < 28);

document.write("Primeros 28 números impares <br>");
document.write(array1);
document.write("<hr>");

//los 14 pares desde el 200 hacia atras
let array2 = [];
var num2 = 200;

for (var i = 0; i < 14; i++) {
    var anadido = false;
    do {
        if (num2 % 2 == 0 && num2 != 200) {
            array2[i] = num2;
            anadido = true;
        }
        num2--;

    } while (!anadido);

}

document.write("Los 14 pares desde 200()sin incluir) hacia atras <br>");
document.write(array2);
document.write("<hr>");