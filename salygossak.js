"use-strickt"
document.querySelector("#sudaryti").addEventListener("click", function(){
    let a;
    let b;
    let c;
    
    a = parseInt(document.querySelector<Number>(".krastinea").value);
    b = parseInt(document.querySelector<Number>(".krastineb").value);
    c = parseInt(document.querySelector<Number>(".krastinec").value);

    if(a+b>c && b+c>a && c+a>b) {
        //document.querySelector("#sudarymo_rezultatas").value = "Trikampį sudaryti galima";
        console.log ("Trikampis geras");
    } else {
        document.querySelector("#sudarymo_rezultatas").value = "Trikampio sudaryti negalima";
    } 

})

