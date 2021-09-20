var sortowanie = [];
var Parzyste = [];
var Nieparzyste = [];
var dane = document.getElementById('dane');
var button = document.getElementById('button').onclick = function check() {
    sortowanie.push(dane.value);
};
var button2 = document.getElementById('button2').onclick = function check() {
    Babelkowe(sortowanie);
    alert("Wszyskie dane posortowane bąbelkowo: ")
    alert(sortowanie);
    for(i=0; i<sortowanie.length; i++){
        if(sortowanie[i]%2==0){
            Parzyste.push(sortowanie[i])
        }
        else{
            Nieparzyste.push(sortowanie[i])
        }
    }
    Wyprowadzanie_Parzyste(Parzyste);
    Wyprowadzanie_Nieparzyste(Nieparzyste);
};
function Babelkowe(sortowanie) {
    var zmiana, b23;
    do {
        zmiana = false;
        for(var i=0; i<sortowanie.length-1; i++) {
            if (sortowanie[i+1] > sortowanie[i]) {
            b23 = sortowanie[i];
            sortowanie[i] = sortowanie[i+1];
            sortowanie[i+1] = b23;
            zmiana = true;
            }
        }
    } while (zmiana);
    return sortowanie;
}
function Wyprowadzanie_Parzyste(Parzyste) {
    alert("Parzyste: ");
    alert(Parzyste);
}
function Wyprowadzanie_Nieparzyste(Nieparzyste) {
    alert("Nieparzyste: ");
    alert(Nieparzyste);
}