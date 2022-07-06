"use-strict";
let skaičius1;
let skaičius2;
let skaičius3;
let skaičius4;
skaičius1 = 1028;
skaičius2 = 25;
skaičius3 = 999;
skaičius4 = 789;
let suma;
let sandauga;
suma = skaičius1 + skaičius2 + skaičius3 + skaičius4;
console.log (suma);
sandauga =  skaičius1 * skaičius2 * skaičius3 * skaičius4;
console.log (sandauga);


let c;
c = skaičius1;
skaičius1 = skaičius2;
skaičius2 = c
console.log ('skaičius1 = ' + skaičius1, 'skaičius2 = ' + skaičius2);

console.log ('sena skaičius3 reikšmė = ' +  skaičius3);
console.log ('sena skaičius4 reikšmė = ' +  skaičius4);
skaičius3 = skaičius3 + skaičius4;
skaičius4 = skaičius3 - skaičius4;
skaičius3 = skaičius3 - skaičius4;
console.log ('skaičius3 = ' + skaičius3, 'skaičius4 = ' + skaičius4);
alert ('skaičius3 = ' + skaičius3 + ' skaičius2 = ' + skaičius4);

let maxSkaičius;
maxSkaičius = Number.MAX_VALUE;
console.log (maxSkaičius);

let skaičius5;
let skaičius6;
skaičius5 = 102;
skaičius6 = 6;
console.log ('senas skaičius5 = ' + skaičius5 + ' senas skaičius6 = ' + skaičius6)
skaičius5 = skaičius5 ^ skaičius6;
skaičius6 = skaičius5 ^ skaičius6;
skaičius5 = skaičius6 ^ skaičius5;
console.log (' skaičius5 = ' + skaičius5 + ' skaičius6 = ' + skaičius6)

