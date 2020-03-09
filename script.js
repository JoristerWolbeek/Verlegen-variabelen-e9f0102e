var pi = 3.14;
var diameter;

function bereken(){
    diameter = document.getElementById("diameter").value;
    antwoord = diameter*pi
    document.getElementById("antwoord").innerHTML = antwoord;
}