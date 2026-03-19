//  Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado
// a média desses pesos. mostre o resultado 

// Entrada
const peso = Number(prompt("Digite o peso da pessoa 1: "))
const peso2 = Number(prompt("Digite o peso da pessoa 2: "))
const peso3= Number(prompt("Digite o peso da pessoa 3: "))
const peso4 = Number(prompt("Digite o peso da pessoa 4: "))
const peso5 = Number(prompt("Digite o peso da pessoa 5: "))


// Processamento
// calculo da media 
const resultado = (peso + peso2 + peso3 + peso4 + peso5) / 5 
 

// Saida
alert("A média dos pesos informados é " +resultado)
alert(` A média dos pesos informados é %{resultado}`)
