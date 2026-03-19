const nota = Number(prompt("Digite a primeira nota"))
const nota2 = Number(prompt("Digite a segunda nota"))
const nota3 = Number(prompt("Digite a terceira nota"))

const media = (nota + nota2 + nota3) / 3
console.log(media)


if (media > 6) {
    alert("Aprovado")
} else if (media >= 5) {
    alert("Recuperação")
} else if (media <= 4) {
    alert("Reprovado")
} 
