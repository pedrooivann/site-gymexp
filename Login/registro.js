let nome = document.getElementById("reg-nome")
let ValidNome = false

let sobrenome = document.getElementById("reg-sobrenome")
let ValidSobreNome = false

let email = document.getElementById("reg-email")
let ValidEmail = false


let usuario = document.getElementById("reg-username")
let ValidUsuario = false

let senha = document.getElementById("reg-password")
let ValidSenha = false

let confsenha = document.getElementById("confirm-reg-password")
let ValidConfSenha = false

let telefone = document.getElementById("reg-telefone")
let ValidTelefone = false

let idade = document.getElementById("reg-idade")
let ValidIdade = false


let botão = document.getElementById("btn-cad")

/*Mensagens ao usuario*/
let MinChar = document.getElementById("Min-Char")
let Senha_Incorreta = document.querySelector(".error")
let Alert1 = document.getElementById("Alert-1")
let Alert2 = document.getElementById("Alert-2")

/*Validação do Nome com no minimo 3 caracteres*/
nome.addEventListener("keyup", () => {
    if (nome.value.length <= 2) {
        nome.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "35%"
        MinChar.innerHTML = "Minimo 3 caracteres"
        ValidNome = false

        if (nome.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            nome.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }
    } else {
        nome.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidNome = true
    }
})

/*Validação do sobrenome com no minimo 3 caracteres*/
sobrenome.addEventListener("keyup", () => {
    if (sobrenome.value.length <= 2) {
        sobrenome.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "35%"
        MinChar.innerHTML = "Minimo 3 caracteres"
        ValidSobreNome = false

        if (sobrenome.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            sobrenome.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }

    } else {
        sobrenome.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidSobreNome = true
    }
})

/*Validação do email com no minimo 13 caracteres*/
email.addEventListener("keyup", () => {
    if (email.value.length <= 12) {
        email.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "41%"
        MinChar.innerHTML = "Minimo de 13 caracteres"
        ValidEmail = false

        if (email.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            email.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }

    } else {
        email.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidEmail = true
    }

})

/*Validação do usuario com no minimo 6 caracteres*/
usuario.addEventListener("keyup", () => {
    if (usuario.value.length <= 4) {
        usuario.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "39%"
        MinChar.innerHTML = "Minimo de 6 caracteres"
        ValidUsuario = false

        if (usuario.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            usuario.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }
    } else {
        usuario.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidUsuario = true
    }
})

/*Validação da Senha com no minimo 6 caracteres*/
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        senha.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "39%"
        MinChar.innerHTML = "Minimo de 6 caracteres"
        ValidSenha = false

        if (senha.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            senha.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }
    } else {
        senha.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidSenha = true
    }
})

/*confirmação da senha*/
confsenha.addEventListener("keyup", () => {
    if (senha.value == confsenha.value) {
        confsenha.setAttribute("style", "background: green")
        Senha_Incorreta.style.display = "none"
        ValidConfSenha = true

    } else if (confsenha.value.length == 0) {
        Senha_Incorreta.style.display = "none"
        confsenha.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")

    }

    else {
        confsenha.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        Senha_Incorreta.style.display = "block"
        ValidConfSenha = false
    }
})

/*Validação do telefone com no minimo 11 caracteres*/
telefone.addEventListener("keyup", () => {
    if (telefone.value.length <= 10) {
        telefone.setAttribute("style", "background:rgba(255, 70, 70, 0.37)")
        MinChar.setAttribute("style", "display: block")
        MinChar.style.width = "41%"
        MinChar.innerHTML = "Minimo de 11 caracteres"
        ValidTelefone = false

        if (telefone.value.length == 0) {
            MinChar.setAttribute("style", "display: none")
            telefone.setAttribute("style", "background:rgba(255, 255, 255, 0.15)")
        }
    } else {
        telefone.setAttribute("style", "background: white")
        MinChar.setAttribute("style", "display: none")
        ValidTelefone = true
    }
})

/*Validação da idade com a escolha*/
idade.addEventListener("change", () => {
    ValidIdade = true
})

/* Função para cadastrar o usuario*/
function Cadastrar() {

    if (ValidNome && ValidSobreNome && ValidEmail && ValidUsuario && ValidSenha && ValidConfSenha && ValidTelefone && ValidIdade) {
        let ListaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        ListaUser.push({
            NomeUsuario: nome.value,
            SobrenomeUsuario: sobrenome.value,
            EmailUsuario: email.value,
            NickUsuario: usuario.value,
            SenhaUsuario: senha.value,
            telefoneUsuario: telefone.value,
            IdadeUsuario: idade.value
        })

        localStorage.setItem("ListaUser", JSON.stringify(ListaUser))

        Alert1.style.display = "none"
        Alert2.style.display = "block"


        window.location.href = "login.html"
        /*nescessario revisão aqui*/

    } else {
        Alert1.style.display = "block"

    }


}





























