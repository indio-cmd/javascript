//Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.
const numero = Number(prompt("Digite um numero"))
const numero2 = Number(prompt("Digite outro numero"))
const operacao = prompt("Digite uma operação matemática")

//condicao: esquerdo simbolo direito
if(operacao === '*') {
    alert(numero * numero2)
}else if (operacao === '+') {
 alert (numero + numero2)
}else if (operacao === '-') {
alert (numero - numero2)
}else if (operacao === '/') {
alert (numero / numero2)
}
