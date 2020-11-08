
var examen1 = prompt("Nota 1º examen");
var examen2 = prompt("Nota 2º examen");
var trabajo1 = prompt("Nota 1º trabajo");
var trabajo2 = prompt("Nota 2º trabajo");

var resultadoexa = ((examen1/2+examen2/2));
var resultadotrab = ((trabajo1/2+trabajo2/2));
var resultado = (resultadoexa*0.75 + resultadotrab*0.25);

if(resultado >= 4.5){
    
    document.write("Has aprobado :) con un " + resultado);

}   else    {

    document.write("Has suspendido :( con un " + resultado);

}
