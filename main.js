window.onload = inciar()


function inciar(){
  var   btncacular = document.getElementById("btn-cacular")
  btncacular.addEventListener("click",click)
}

function click(){
    var   textPeso = document.getElementById("peso")
    var peso  = textPeso.value
    var   textAltura = document.getElementById("altura")
    var altura = textAltura.value
    var altcuara = altura * altura
    var imc = peso / altcuara 
    alert(Math.round(imc))
}