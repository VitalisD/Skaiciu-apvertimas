let palyginimui1
let palyginimui2
palyginimui1 = parseFloat(document.querySelector('#palyginimui1').value) ;
palyginimui2 = parseFloat(document.querySelector('#palyginimui2').value) ;
if (palyginimui1 > palyginimui2) {
    //document.querySelector('.palyginimo-rezultatas').'#palyginimui1';
    //document.querySelector('.palyginimo-rezultatas').innerHTML = (palyginimui1);
    console.log (palyginimui1, '>')
} 
else if (palyginimui1 == palyginimui2) {
    console.log ('=')
}
else {
    //document.querySelector('.palyginimo-rezultatas').'#palyginimui2';
    //document.querySelector('.palyginimo-rezultatas').innerHTML = (palyginimui2);
    console.log ('<', palyginimui2)
}

let palyginimui3
let palyginimui4
let palyginimui5
palyginimui3 = parseFloat(document.querySelector('#palyginimui3').value) ;
palyginimui4 = parseFloat(document.querySelector('#palyginimui4').value) ;
palyginimui5 = parseFloat(document.querySelector('#palyginimui5').value) ;
if (palyginimui3 >= palyginimui4 && palyginimui3 >= palyginimui5) {
    console.log (palyginimui3, '>')
} else if (palyginimui5 >= palyginimui4 && palyginimui5 >= palyginimui3) {
    console.log (palyginimui5, '>')
} else {
    console.log (palyginimui4, '>')
    }
