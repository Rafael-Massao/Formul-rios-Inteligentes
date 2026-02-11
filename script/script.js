function validar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");
        
        if (idade <=0){
            mensagem.innerText = "Por favor, digite sua idade";
            mensagem.style.color ="red"
        } else if (idade === "") {
            mensagem.innerText = "Por favor, digite sua idade.";
            mensagem.style.color="blue";
        } else if (nome === "") {
            mensagem.innerText = "Por favor, digite seu nome.";
            mensagem.style.color="blue";
        } else if (idade >= 16 && nivel > 5) {
            mensagem.innerText = "Incrição aceita, Categoria Pro";
            mensagem.style.color = "green";
        } else if (idade >= 16 && nivel <= 5) {
            mensagem.innerText = "Inscrição aceita, Categoria Iniciante";
            mensagem.style.color = "blue";
        } else {
            mensagem.innerText = "Inscrição Negada, Idade mínima: 16 anos";
            mensagem.style.color = "red";
        }
}
function validarSenha() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const senha = document.getElementById("senha");
        if (senha1 == senha2) {
            senha.innerText = "Senha Aceita";
            senha.style.color = "green";
        } else if (senha1 != senha2) {
            senha.innerText = "Senhas Diferentes";
            senha.style.color = "blue";
        } else if (senha1,length >= 8) {
            senha.innerText = "Senha inválida";
            senha.style.color = "red";
        }
}
function validarDesconto() {
    const estudante = document.getElementById("estudante").checked;
    const idade = document.getElementById("idade").value;
    const msg = document.getElementById("msg");
        if (idade >=60 || estudante) {
            msg.innerText = "Desconto concedido!";
            msg.style.color = "green";
        } else {
        msg.innerText = "Sem direito a desconto.";
        msg.style.color = "red";
    }
}
