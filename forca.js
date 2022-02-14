let bancoDePalavras = ['bola', 'gato','carro','nuvem','chinelo','programação','praia','segunda','quarta','quinta','sexta','java','pagode','madureira','academia']
let palavraSecreta = bancoDePalavras[Math.floor(Math.random()*bancoDePalavras.length)];



let chances = 6; //variavel que serve como parametro para o desenho do boneco e para verificar o resultado do jogo
let acertos = 0 //variavel para verificar resultado do jogo

let posicao; //variavel de incremento do loop for

for(posicao = 0; posicao <palavraSecreta.length; posicao++) { 
        let span = document.createElement('span');
        span.setAttribute('id',posicao); // seta uma id com indice do array(de acordo com a quantidade de tags span)
    
        let div = document.getElementById('palavra'); // Pega a div com id 'palavra'
        div.appendChild(span) //adiciona as tags span na div 
}       //se a variavel posicao for menor que a palavra a ser advinhada o loop vai criando tags span até que o número de tags seja igual ao tamanho da palavra


let alfabeto = "abcdefghijklmnopqrstuvwxyz"; 
let letras = alfabeto.split("");  //divide a variavel alfabeto em letras

for (posicao = 0; posicao < letras.length; posicao++) {
        let botao = document.createElement("button"); //cria a tag button
        let letra = document.createTextNode(letras[posicao]); //cria um texto com a posição atual do array
    
        botao.appendChild(letra); //adiciona as letras atraves da variavel letras a tag button
        botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
        botao.setAttribute('id', letras[posicao]);

        let div = document.getElementById("letras");
        div.appendChild(botao); //adiciona as letras aos botões

  
       
}
//função para validar se as letras escolhidas pelo usuário estão de acordo com a palavra secreta
function escolheLetra(letra) {

        let acertou = false

        for(posicao = 0; posicao < palavraSecreta.length; posicao++) { //percorre a palavra secreta
            if(letra === palavraSecreta[posicao]) { //verifica se  a letra inserida pelo usuário é igual as lentras contidas na palavra secreta
            let span = document.getElementById(posicao); //pega a id contendo a posição(índice)
                let l = document.createTextNode(letra); //pega a letra escolhida 

                span.appendChild(l); //adiciona a letra escolhida a tag span para que apareça na tela
                let botao = document.getElementById(letra); //cria uma variavel e pega na dom o elemento letra pela id
                botao.setAttribute('class','certa'); //atribui a classe certa caso as letras escolhidas existam na palavra, para que possa ser manipulado no css as cores das letras corretas
                botao.removeAttribute('onclick'); //tira da letra ja escolhida a função onclick, para que mesmo que o usuario click nela ela nao retorne valor
                
                acertos++; 
                acertou = true
                //se o usuario acertou acertou vira verdadeiro e o usuario continua para mais tentativas sem que apareça o desenho do boneco
            }

        }

        if(acertou === false) {
            let botao = document.getElementById(letra) 
            botao.setAttribute('class', 'errada'); //se o usuario errar, o javascript coloca a classe errada no botão escolhido
            botao.removeAttribute('onclick'); //remove o click para impedir que o resultado da letra ja clicada seja lido novamente
            
            chances-- //o numero de chances diminui
            
            switch(chances){ //a função switch case fazo papel de desenho do boneco de acordo com o numero de erros que o usuario cometeu que são contados pela variável chances
                case 5:
                    cabeça();
                    break;
                case 4:
                   corpo()
                    break;
                case 3:
                    bracoDir();
                    break;
                case 2:
                   bracoEsq();
                    break;
                case 1:
                    pernaDir()
                    break;
                case 0:
                    pernaEsq()
                    break;
            }
        }   
        
        if(chances === 0) { //Se o numero de chances for igual a 0, o boneco sera desenhado completamente e o usuario perde a partida
            alert ("A palavra correta era " + palavraSecreta) //joga um alert para o navegador para que o usuário saiba a palavra correta
            let mensagem = document.createElement('h2');
            let t1 = document.createTextNode('Você perdeu');
            mensagem.appendChild(t1);
           

            let botao = document.createElement('button');
            let t2 = document.createTextNode('Jogar Novamente');
            
            botao.appendChild(t2);
            botao.setAttribute('class', 'novo-btn');
            botao.setAttribute('onclick', 'window.location.reload()');
           
            let div = document.querySelector('.jogar-novamente');
            div.appendChild(mensagem);
            div.appendChild(botao);
            
        }

        if(acertos === palavraSecreta.length) { //vitória
            let mensagem = document.createElement('h2');
            let t1 = document.createTextNode('VOCÊ VENCEU!');
            mensagem.appendChild(t1);

            let botao = document.createElement('button');
            let t2 = document.createTextNode('Jogar Novamente');

            botao.appendChild(t2);
            botao.setAttribute('class', 'novo-btn')
            botao.setAttribute('onclick', 'window.location.reload()');

            let div = document.querySelector('.jogar-novamente');
            div.appendChild(mensagem);
            div.appendChild(botao);
       
        }
        
}       




const btn = document.querySelector('.send');
btn.addEventListener('click', function(e){
    e.preventDefault();

    const name = document.querySelector('#name');

    const value = name.value;
    
    bancoDePalavras.push(value);

    name.value = ""
})


