const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
}
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);

const letrasMaiúsculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letrasMinúsculas = 'abcdefghijklmnopqrstuvwxyz'
const números = '0123456789';
const símbolos = '!@%*?';

geraSenha();

function geraSenha(){
    let alfabeto = ''
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaiúsculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiúsculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
