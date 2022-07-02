let palyginimui1
let palyginimui2
palyginimui1 = parseFloat(document.querySelector('#palyginimui1').value) ;
palyginimui2 = parseFloat(document.querySelector('#palyginimui2').value) ;
if (palyginimui1 > palyginimui2) {
    //document.querySelector('.palyginimo-rezultatas').'#palyginimui1';
    //document.querySelector('.palyginimo-rezultatas').innerHTML = (palyginimui1);
    console.log (palyginimui1, '>')
} else {
    //document.querySelector('.palyginimo-rezultatas').'#palyginimui2';
    //document.querySelector('.palyginimo-rezultatas').innerHTML = (palyginimui2);
    console.log ('<', palyginimui2)
}