document.querySelector('#menu').addEventListener('submit', function(e){ //Impede envio do formulário antes da verificação
    e.preventDefault();
    verificarSenha(); //Retorna a página de sucesso, caso a senha esteja correta
});

function verificarSenha(){

    let senha = document.getElementById("senha").value;
    senha = senha.toUpperCase();

    if (senha === ""){
        alert("O campo senha ainda está vazio...");
        document.getElementById("senha").focus();
    }

    else {
        if(senha == "R3ST0R3"){
            alert("Senha está correta!");
            window.open("sucesso.html","_self");
        }

        else{
            alert("A senha está incorreta!");
            senha = "";//Reseta a senha digitada
        }
    }
}