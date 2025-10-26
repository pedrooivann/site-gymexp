let nome = document.getElementById("reg-nome")
let ValidNome = false

let sobrenome = document.getElementById("reg-sobrenome")
let ValidSobreNome = false

let email = document.getElementById("reg-email")
/*lembrar de validar email*/


let usuario = document.getElementById("reg-username")
/*lembrar de validar usuario*/

let senha = document.getElementById("reg-password")
let ValidSenha = false

let confsenha = document.getElementById("confirm-reg-password")
let ValidConfSenha = false

let telefone = document.getElementById("reg-telefone")
let ValidTelefone = false

let idade = document.getElementById("reg-idade")
/*lembrar de validar idade*/


let botão = document.getElementById("btn-cad")

let Senha_Incorreta = document.querySelector(".error")

/*Validação do Nome com no minimo 3 caracteres*/
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        nome.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        ValidNome = false
    } else {
        nome.setAttribute("style", "background: white")
        ValidNome = true
    }
})

/*Validação do sobrenome com no minimo 3 caracteres*/
sobrenome.addEventListener("keyup", () => {
    if (sobrenome.value.length <= 2) {
        sobrenome.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        ValidSobreNome = false
    } else {
        sobrenome.setAttribute("style", "background: white")
        ValidSobreNome = true
    }
})

/*Validação da Senha com no minimo 5 caracteres*/
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        senha.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        ValidSenha = false
    } else {
        senha.setAttribute("style", "background: white")
        ValidSenha = true
    }
})

/*confirmação da senha*/
confsenha.addEventListener("keyup", () => {
    if (senha.value == confsenha.value) {
        confsenha.setAttribute("style", "background: green")
        Senha_Incorreta.style.display = "none"
        ValidConfSenha = true

    } else {
        confsenha.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        Senha_Incorreta.style.display = "block"
        ValidConfSenha = false
    }
})

/*Validação do telefone com no minimo 11 caracteres*/
telefone.addEventListener("keyup", () => {
    if (telefone.value.length <= 10) {
        telefone.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        ValidTelefone = false
    } else {
        telefone.setAttribute("style", "background: white")
        ValidTelefone = true
    }


})

/* Função para cadastrar o usuario*/
function Cadastrar() {

    if (ValidNome && ValidSobreNome && ValidSenha && ValidConfSenha && ValidTelefone) {
        let ListaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        ListaUser.push({
            NomeUsuario: nome.value,
            SobrenomeUsuario: sobrenome.value,
            SenhaUsuario: senha.value,
            telefoneUsuario: telefone.value
            /*Email,Usuario e Idade serão acrescentados após a validação dos tais*/
        })

        localStorage.setItem("ListaUser", JSON.stringify(ListaUser))


        alert("cadastro realizado")
        /*O alert é só para testes*/

        window.location.href = "login.html"
        /*nescessario revisão aqui*/

    } else {
        alert("preemcha o form")
        /*O alert é só para testes*/
    }


}































/*
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


    if (confsenha == senha) {
        location.href = "login.html";
    }


    else {
        Senha_Incorreta.style.display = "block"
        confsenha.style.outline = "1px solid red"
        confsenha.style.background = "rgba(255, 70, 70, 0.37)"
    }

}
    */