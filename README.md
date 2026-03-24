# notas-estudo
Minhas notas de estudo do Téc SENAC 2026

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
 
 
 
