document.addEventListener("DOMContentLoaded", function(){

    const botaoMenu = document.querySelectorAll(".tab-button");
    let abaPainel = document.querySelectorAll(".tab-pane");

    botaoMenu.forEach(function(botao){
        botao.addEventListener("click", function(){
            botaoMenu.forEach(function(btn){
                btn.classList.remove("ativo");
            });

            abaPainel.forEach(function(pane){
                pane.classList.remove("ativo");
            });

            this.classList.add("ativo");

            const alvo = this.getAttribute("data-target");
            const painelAlvo = document.querySelector(alvo);
            painelAlvo.classList.add("ativo");
        });
    });

    
    const listaUser = JSON.parse(localStorage.getItem("ListaUser") || "[]");

    const inputsPerfil = document.querySelectorAll(
        "#personal-info input, #personal-info textarea"
    );

    const btnEditar = document.getElementById("btn-editar-perfil");
    const btnSalve = document.getElementById("btn-salvar-perfil");

    let userLogado = null;
    let userIndex = -1;

    if(listaUser.length > 0) {
        userLogado = 0;
        return;
    }
    
    else{
        console.log("AVISO: Não foi encontrado nenhum utilizador na listaUser para testar o perfil.")
    }

    const inputNome = document.getElementById("profile-nome");
    const inputSobrenome = document.getElementById("profile-sobrenome");
    const inputEmail = document.getElementById("profile-email");
    const inputTelefone = document.getElementById("profile-telefone");
    const inputBios = document.getElementById("profile-bio");

    function carregarUsuario() {
        if (userLogado) {
            inputNome.value = userLogado.NomeUsuario || "";
            inputSobrenome.value = userLogado.SobrenomeUsuario || "";
            inputEmail.value = userLogado.EmailUsuario || "";
            inputTelefone.value = userLogado.TelefoneUsuario || "";
            inputBios.value = userLogado.BioUsuario
        }
    }
    carregarUsuario();

    btnEditar.addEventListener("click", () => {
        inputsPerfil.forEach((input) => {
            input.disable = false
        });
    });

});