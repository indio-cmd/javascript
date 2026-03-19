function exercicio8() {
const numero = Number(prompt("Digite o numero inteiro"))
alert(`
    0 x ${numero} = ${numero*0}
    1 x ${numero} = ${numero*1}
    2 x ${numero} = ${numero*2}
    3 x ${numero} = ${numero*3}
    4 x ${numero} = ${numero*4}
    5 x ${numero} = ${numero*5}
    6 x ${numero} = ${numero*6}
    7 x ${numero} = ${numero*7}
    8 x ${numero} = ${numero*8}
    9 x ${numero} = ${numero*9}
    10 x ${numero} = ${numero*10}
    `)


}

const buttonExercicio8 = document.getElementById("exercicio8")
buttonExercicio8.addEventListener('click', () => { exercicio8() })