// Peça um número inteiro e diga se ele é par ou ímpar.    (Dica: se o número dividido por 2 tiver resto 0, é par)
const numero = Number(prompt("Digite um numero inteiro"))

const resto = numero % 2

if(resto === 0) {
alert("par")
}else if (!== 0) {
alert ("ímpar")
}