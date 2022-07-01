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
console.log (skaičius1, skaičius2);

skaičius3 = skaičius3 + skaičius4;
skaičius4 = skaičius3 - skaičius4;
skaičius3 = skaičius3 - skaičius4;
console.log (skaičius3, skaičius4);
alert (skaičius3,skaičius4);

let maxSkaičius;
maxSkaičius = Number.MAX_VALUE;
console.log (maxSkaičius);