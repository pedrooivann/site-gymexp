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
    const userLogado =  JSON.parse(localStorage.getItem("userLogado"));
    let userIndex = -1;

    const inputsPerfil = document.querySelectorAll(
        "#seguranca input, #seguranca textarea, #personal-info input, #personal-info textarea"
    );

    const btnEditar = document.getElementById("btn-editar-perfil");
    const btnSalve = document.getElementById("btn-salvar-perfil");
    const btnCancel = document.getElementById("btn-cancelar-alteracao");

    if (userLogado) {
        userIndex = listaUser.findIndex(user => user.NickUsuario === userLogado.usuario);
    } else {
        console.log("AVISO: Nenhum utilizador logado.");
        btnEditar.style.display = 'none';
        btnSalve.style.display = 'none';
    }
    

    const inputNome = document.getElementById("profile-nome");
    const inputSobrenome = document.getElementById("profile-sobrenome");
    const inputTelefone = document.getElementById("profile-telefone");

    const inputUser = document.getElementById("profile-user");
    const inputPassword = document.getElementById("profile-senha");
    const inputEmail = document.getElementById("profile-email");

    function carregarUsuario() {
        if (userLogado) {
            inputNome.value = userLogado.nome || "";
            inputSobrenome.value = userLogado.sobrenome || "";
            inputEmail.value = userLogado.email || "";
            inputTelefone.value = userLogado.telefone || "";
            inputUser.value = userLogado.usuario || "";
            inputPassword.value = userLogado.senha || "";
        }
    }
    carregarUsuario();

    btnEditar.addEventListener("click", () => {
        inputsPerfil.forEach((input) => {
            input.disabled = false;

        });
        btnEditar.style.display = 'none';
        btnSalve.style.display = 'block';
        btnCancel.style.display = 'block';
    });


    btnSalve.addEventListener("click", () => {
        if (userIndex === -1) {
            alert("Perfil de usuário não encontrado");
            return;
        }
        
        const novoNome = inputNome.value;
        const novoSobrenome = inputSobrenome.value;
        const novoEmail = inputEmail.value;
        const novoTelefone = inputTelefone.value;
        const novoUser = inputUser.value;
        const novoPassword = inputPassword.value;

        listaUser[userIndex].NomeUsuario = novoNome;
        listaUser[userIndex].SobrenomeUsuario = novoSobrenome;
        listaUser[userIndex].EmailUsuario = novoEmail;
        listaUser[userIndex].TelefoneUsuario = novoTelefone;
        listaUser[userIndex].NickUsuario = novoUser;
        listaUser[userIndex].SenhaUsuario = novoPassword;

        localStorage.setItem("ListaUser", JSON.stringify(listaUser));
        localStorage.setItem("userLogado",JSON.stringify(listaUser[userIndex]));

        inputsPerfil.forEach((input) => {
            input.disabled = true;
        });

        btnEditar.style.display = 'block';
        btnSalve.style.display = 'none';
        btnCancel.style.display = 'none';


        alert("Informações salvas!");

    });

    btnCancel.addEventListener("click", () => {

        carregarUsuario();

        inputsPerfil.forEach((input) =>{
            input.disabled = 'true';
        });

        btnEditar.style.display = 'block';
        btnSalve.style.display = 'none';
        btnCancel.style.display = 'none';

    });

    const containerTreino = document.querySelector(".treinos-card");
    const treinosSalvo = JSON.parse(localStorage.getItem("planilhaTreino") || "[]");


    function carregarTreinos() {
        
        containerTreino.innerHTML = "";

        if (treinosSalvo.length === 0) {
            containerTreino.innerHTML = `<p>Nenhum treino salvo.</p>`;
            return;
        }
        treinosSalvo.forEach((semana) => {
            const divSemana = document.createElement("div");
            const nomeSemana = document.createElement("h4");

            nomeSemana.textContent = semana.nomeSemana;

            divSemana.appendChild(nomeSemana);
            containerTreino.appendChild(divSemana);
        });
        
    
    }
    carregarTreinos();

});