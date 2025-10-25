function salvar_usuario() {
    const nome = document.getElementById("reg-nome").value
    const sobrenome = document.getElementById("reg-sobrenome").value
    const email = document.getElementById("reg-email").value
    const usuario = document.getElementById("reg-username").value
    const senha = document.getElementById("reg-password").value
    const confsenha = document.getElementById("confirm-reg-password")
    const telefone = document.getElementById("reg-telefone").value
    const idade = document.getElementById("reg-idade").value
    const Senha_Incorreta = document.querySelector(".error")


    localStorage.setItem("NomeUsuario", nome);
    localStorage.setItem("SobrenomeUsuario", sobrenome);
    localStorage.setItem("EmailUsuario", email);
    localStorage.setItem("NickUsuario", usuario);
    localStorage.setItem("SenhaUsuario", senha);
    localStorage.setItem("TelefoneUsuario", telefone);
    localStorage.setItem("IdadeUsuario", idade);

    
if (confsenha != senha) {

    Senha_Incorreta.style.display = "block"
    confsenha.style.outline = "1px solid red"
    confsenha.style.background = "rgba(255, 122, 122, 0.3)"
}

else{
    location.href = "login.html";
    

}
}



