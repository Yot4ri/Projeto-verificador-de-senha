document.querySelector('#menu').addEventListener('submit', function(e){
    e.preventDefault();
    verificarSenha();
});

function verificarSenha(){

    let senha = document.getElementById("senha").value;

    if (senha === ""){
        alert("O campo senha ainda está vazio...");
        document.getElementById("senha").focus();
    }

    else {
        if(senha == "r3stor3" || senha == "R3STOR3"){
            alert("Senha está correta!");
            window.open("/sucesso.html","_self");
        }

        else{
            alert("A senha está incorreta!");
            
        }
    }
}