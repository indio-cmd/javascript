# notas-estudo
Minhas notas de estudo do Téc SENAC 2026

<<<<<<< HEAD
markdown


## Configurando Git Github


para utilizar o git na minha maquina eu preciso configurar determinados comandos, sendo eles:

```bash
git config --global
```

## Como configurar Github

## SSH - Como configurar a maquina para Github

## Como criar um repositório
```bash
O Git é uma ferramenta de versionamento local que salva o estado de cada arquivo no momento do versionamento. Caso o arquivo não sofra alterações, ele cria um link simbólico para o arquivo que não foi editado.
Entre na sua conta do GitHub.
Clique na tecla Windows e digite cmd, que é um terminal de controle (Prompt de Comando).

Configuração
Depois, você deve configurar seu Git com seu nome e seu e-mail”No prompt de comando”

Github
Se você não tiver uma conta no GitHub, crie uma no site oficial.
GitHub

SSH - Gitbash
Em seguida, adicione uma nova chave com o comando:
ssh-keygen -t ed25519 -C "seu_email_pessoal"
Depois, você precisa inicializar o agente (o “robô”, que é a chave) com o comando:
eval "$(ssh-agent -s)"
Em seguida, adicione a chave ao agente:
ssh-add ~/.ssh/id_ed25519

SSH - Gitbash
Logo depois, copie a chave SSH com o comando:
clip < ~/.ssh/id_ed25519.pub
Depois, adicione a chave no GitHub.
Em seguida, crie um repositório, colocando um nome (obrigatório) e uma descrição (não obrigatória). Depois, deixe o repositório público e ative o README.

Testar conexão
ssh -T git@github.com
                      yes
```

```bash
PARA CRIAR UM REPOSITÓRIO:

- CRIE UM REPOSITÓRIO NOVO NO GITHUB.
- NAVEGUE ATÉ A PASTA DO PROJETO VOCE CRIOU E COPIE LA EM CODIGO E COPIA O SSH
-DEPOIS EM "CODE".
- DEPOIS, NO GIT BASH, DIGITE:
- $ CD DOCUMENTS/ E PRESSIONE ENTER.
- EM SEGUIDA, DIGITE ~/DOCUMENTS/= $ GIT CLONE E PRESSIONE ENTER.
- DEPOIS DISSO, ABRA PARA O VS CODE.
- CLIQUE EM "FILE" / "OPEN FOLDER".
- SELECIONE A PASTA QUE VOCÊ CRIOU NO VS CODE.
- E PRONTO!






“Computador em si não faz nada sozinho “
Html – é a parte mais crua possível
Css – é so cor
Java script – é a maquina ou motor da coisa
 
//////
 
Vamos para  parte do index agora no vs code
 
-Vai no vs code escolhe a pasta de java script
-Depois vai na no file botão direito e vai em new file
-depois clica exclamação enter
 
//////
 
-Nessa pasta do vs code vai na parte esquerda da tela e vai ter o README.MD
-Depois disso você vai criar uma ( FILE chamada INDEX.HTML )
- depois clica em EXCLAMSÇÃO ENTER , vai abri um script base
Deois vai em um folder e cria a pasta script depois cria uma FILE depois escreve script.js 







PROVA QUINTAAAAAAA


Revisão
 
Conteúdo da avaliação
 
Git hub
 
1 passo
 
Primeiro abra o seu git hub no navegador
Depois clica no foto de perfil
Criar um repositório
Nome do repositório (Exemplo de batata ) sem caractere especial
Descrição ( aquilo que vai ter no repositório ) ( ex : aula para avaliação )
Depois marque o redame e sempre em public.
 
2 passo  ( Clonar  )
 
Vai no repositório que tu criou e vai no code e copia o código
Depois vai no git bash 
 
Vai colocar esse comado :
 
$ cd documents/
 
$git clone , botão direito e cola
 
Depois o nome do repositório , enter
 
Vai aparecer o ( main ) , depois
 
Code .( código )
 
Pronto abriu o teu vs code
 
3 passo ( criar pastas ) 
 
Vai ter a pasta readme.md
 
Clica no vazio e cria um
 
Clica com o botão direito new file , ( index.html )
Depois vai no espaço vazio , botão direito new folder ( script )
Em cima do folder ( script ) clica em new file e cria ( nome da avaliação.js )
 
4 passo ( configurando o index.html )
 
Vai no index.html
 
Digita lá ( Ctrl 1 = ! )
 
La em cima em ( lang ) vai estar em ( en ) = english
Muda para “ pt-br”
 
Depois disso vai em baixo do    ( <body> )
Em baixo do body digita script
 
PRESTA ATENÇÃO !!!!!
Vai estar assim <script>
Você vai fazer isso aqui = <script src
Depois disso você vai escrever esse comando ( src="./scripts/avaliacao.js" )
E vai selecionar script>/avaliação
 
Depois disso você vai fazer o botão
 
Escreve “button” vai aparecer <button></button>
Dentro dessa merda aqui ( > )
 
Dentro dessa merda ali você vai escrever(  ID=”exercicio1” )
Depois da control V nesse código que você fez !!
 
<button id="exercicio1" >exercicio 1</button>
<button id="exercicio2" >exercicio 2</button>
<button id="exercicio3" >exercicio 3</button>
 
Só muda depois os número né
 
5 passo  ( dentro da pasta da avaliação )
 
function exemplo1( ) {
alert("funcionou aqui ")
}
 
Primeira coisa que você vai fazer é essa função
 
Depois disso vai por esse código aqui
 
const buttonexemplo1 = document.getElementById("exercicio1")
buttonexemplo1.addEventListener('click', () => { exemplo1() })// nome da função 
 
 
 
=======
//const nota = Number(prompt("Digite a primeira nota"))
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


// //Peça um número e informe se ele é positivo ou negativo.
const numero = Number(prompt("Digite um numero"))
if(numero >= 0) {
    alert ("positivo")
}else if(numero <= 0) {
    alert("negativo")
}else {
    alert ("erro//")
}

//// 7. Peça uma distância em quilômetros e converta para metros e centímetros.

const numero = Number(prompt("Digite uma distãncia em quilometros"))
 const km = (numero*100000) 
 const centimetros = ("Digite uma distãncia em centímetros")
 const metros = (numero*1000)

 alert("distância em metros e centímetros é: "  +km +" " + metros)


 // //EXERCICIOS 2n
function exercicios2 ()  {
    const hora = Number(prompt("digite uma hora: "))
    const valor = Number(prompt("digite um valor por hora: "))
    alert("resultado de "+ hora + " * " + valor + " = " + (hora * valor ))
}
const buttonexercicio2 = document.getElementById("exercicio2")
buttonexercicio2.addEventListener('click', () => {exercicios2() } )
 
 
//exercicios3
 
 
function exercicios3 () {
    const peso1 = Number(prompt("digite o peso da pessoa 1: "))
const peso2 = Number(prompt("digite o peso da pessoa 2: "))
const peso3 = Number(prompt("digite o peso da pessoa 3: "))
const peso4 = Number(prompt("digite o peso da pessoa 4: "))
const peso5 = Number(prompt("digite o peso da pessoa 5: "))
 
const resultado = (peso1 + peso2 + peso3 + peso4 + peso5) / 5
 
alert(resultado)
 
}
 
const buttonexercicios3 = document.getElementById("exercicio3")
buttonexercicios3.addEventListener('click', () => {exercicios3() } )
 
//EXERCICIOS 4
 
function exercicio4 () {
//entrada
// Peça uma temperatura em graus Celsius e converta para Fahrenheit
//  usando a fórmula F = (9 * C + 160) / 5
 
const numero = Number(prompt("digite o valor em graus celsius e converta para firehint"))
 
//saida
const media = (((9*numero )+ 160) / 5 )
 alert(media)
 
}
 
const buttonexercicio4 = document.getElementById("exercicio4")
buttonexercicio4.addEventListener('click', () => {exercicio4() } )
 
 
///////////////////////////////////////////////////////////////////////////////////////////////
function exercicio5 () {
    alert("Exercicio 5 ")
 
//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
 
//entrada
 
const numero = Number (prompt("digite a quantidade de milhas: "))
 
const km = numero * 1.60934
alert("a distancia em milhas é:"+ km )
 
}
 
const buttonexercicio5 = document.getElementById("exercicio5")
buttonexercicio5.addEventListener('click', () => {exercicio5() } )
 
////////////////////////////////////////////////////////////////////////////////
function exercicio6 () {
    alert("exercicio6 ")
 
const Number = ( prompt ("Mostre a quantidades de tempo do evento "))
const hora = dur/3600
alert("a duração do evento em horas , munitos e segundos é ")
 
}
 
const buttonexercicio6 = document.getElementById("exercicio6")
buttonexercicio6.addEventListener('click', () => {exercicio6() } )
 
////////////////////////////////////////////////////////////////
 
function exercicio7 () {
    const numero = Number(prompt("digite uma distancia em quilometro"))
const km = (numero*100000)
const centímetros = ("digite uma distancia em centometros ")
const metros = (numero*1000)
alert("distancia em metros e centimetros é "  +km+" " + metros)
}
 
const buttonexercicio7 = document.getElementById("exercicio7")
buttonexercicio7.addEventListener('click', () => {exercicio7() } )
 
/////////////////////////////////////////////////////////////////////////
 
function exercicio8 () {
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
 
const buttonexercicio8 = document.getElementById("exercicio8")
buttonexercicio8.addEventListener('click', () => {exercicio8() } )


////Peça dois números e uma operação matemática (+, -, *, /). Calcule e mostre o resultado da operação escolhida.
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


////Peça o sexo da pessoa (H para homem, M para mulher) e a altura. Use as fórmulas para calcular o peso ideal:
const sexo = (prompt("Digite o sexo H ou M"))
const altura = Number(prompt("Digite uma altura"))

if (sexo === 'H') {
    alert (72.7 * altura) (- 58)
} else if (sexo === 'M'){
    alert (62.1 * altura) - 44.7
}else {
    alert("erro")
}

//<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=8, initial-scale=1.0">
  <link rel="stylesheet" href="./style/styles.css">
  <title>Document</title>
</head>

<body>
  <header id="exemplo">
    um titutlo qualquer
  </header>

  <main>
    <h2>Minha página de Exercícios</h2>
  <button id="exercicio1">Executar Exercício 1</button>
  <button id="exercicio2">Executar Exercício 2</button>
  <button id="exercicio3">Executar Exercício 3</button>
  <button id="exercicio4">Executar Exercício 4</button>
  <button id="exercicio5">Executar Exercício 5</button>
  <button id="exercicio6">Executar Exercício 6</button>
  <button id="exercicio7">Executar Exercício 7</button>
  <button id="exercicio8">Executar Exercício 8</button>
          
  </main>

  <footer  id="rodape">
    todos os direitos reservados - Kaua alcantara - 2026
  </footer>
  <script src="./script/exercicio13.js"></script>
</body>

</html>


//
>>>>>>> 652a56d499ddb5c1178ea47ea73085277a01567b
