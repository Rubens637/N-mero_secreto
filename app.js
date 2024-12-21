alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for o igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 100");

    if(chute == numeroSecreto) {
       break;
    } else {
        if(chute > numeroSecreto){
           alert(`O número secreto é menor que ${chute}`);
        } else {
           alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    
}
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
    alert(`Isso ae! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
   