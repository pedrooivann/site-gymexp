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

    if (!userLogado) {
        const userResgate = prompt("Não foi possivel captar a informação do login, digite novamente seu NOME DE USUÁRIO: ")

        if (userResgate){
            const userEncontrado = listaUser.find(u => u.NickUsuario === userResgate);

            if (userEncontrado) {
                userLogado = {
                    nome: userEncontrado.NomeUsuario,
                    sobrenome: userEncontrado.SobrenomeUsuario,
                    email: userEncontrado.EmailUsuario,
                    telefone: userEncontrado.TelefoneUsuario,
                    usuario: userEncontrado.NickUsuario,
                    senha: userEncontrado.SenhaUsuario
                };
                localStorage.setItem("userLogado", JSON.stringify(userLogado));
            } else {
                alert("Não foi possivel identificar seu usuário no banco, certifique-se de que tenha digitado corretamente.");
            }
        }
    }


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
        
        const novoNome = inputNome.value.trim();
        const novoSobrenome = inputSobrenome.value.trim();
        const novoEmail = inputEmail.value.trim();
        const novoTelefone = inputTelefone.value.trim();
        const novoUser = inputUser.value.trim();
        const novoPassword = inputPassword.value.trim();

        if (!novoNome || !novoSobrenome || !novoEmail || !novoTelefone || !novoUser || !novoPassword) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const userDuplicado = listaUser.some((userLista, index) => {
            const difUser = index !== userIndex;

            const mesmoUser = userLista.NickUsuario === novoUser;

            return difUser && mesmoUser;
        });

        if (userDuplicado) {
            alert("Usuário já cadastrado.");
            return;
        }

        const emailDuplicado = listaUser.some((userLista, index) =>{

            const diffEmail = index !== userIndex;

            const mesmoEmail = userLista.EmailUsuario === novoEmail;

            return diffEmail && mesmoEmail;

        });

        if (emailDuplicado) {
            alert("E-mail já cadastrado.");
            return;
        }


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
    
    function carregarTreinos() {
        const treinosSalvo = JSON.parse(localStorage.getItem("meusTreinosSalvos") || "[]");
        
        containerTreino.innerHTML = "";

        if(treinosSalvo.length === 0) {
            containerTreino.innerHTML = `<p style="color: black; padding: 20px;">Nenhum treino salvo ainda.</p>`
            return;
        }

        treinosSalvo.forEach((treino) => {
            const divItem = document.createElement("div");
            divItem.style.cssText = "background: #f8f9fa; border: 1px solid #ddd; padding: 15px; margin-bottom: 10px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;"; 


            const info = document.createElement("div");
            info.innerHTML = `<strong>${treino.nome}</strong> <br> <small>Criado em: ${treino.dataCriacao}</small>`;

            const btnContaier = document.createElement("div");
            btnContaier.style.display = "flex";
            btnContaier.style.gap = "10px";

            const btnDownload = document.createElement("button");
            btnDownload.innerHTML = '<i class="fas fa-file-pdf"></i> PDF';
            btnDownload.textContent = "Baixar PDF";
            btnDownload.style.cssText = "background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;";

            btnDownload.addEventListener("click", () => {
                gerarPdfTreino(treino);
            });

            const btnExcluir = document.createElement("button");
            btnExcluir.innerHTML = '<i class="fas fa-trash"></i>';
            btnExcluir.title = "Excluir treino";
            btnExcluir.style.cssText = "background: #333; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;";


            btnExcluir.addEventListener("click", () => {
                if (confirm(`Tem certeza que deseja excluir o treino "${treino.nome}"?`)) {
                    const novaLista = treinosSalvo.filter(item => item.id !== treino.id);
                    localStorage.setItem("meusTreinosSalvos", JSON.stringify(novaLista));

                    carregarTreinos();
                }
            });

            btnContaier.appendChild(btnDownload);
            btnContaier.appendChild(btnExcluir);

            divItem.appendChild(info);
            divItem.appendChild(btnDownload);
            containerTreino.appendChild(divItem);
        });
    }

    function gerarPdfTreino(treino) {
        const elementoPDF = document.createElement("div");
        elementoPDF.style.padding = "20px";
        elementoPDF.style.fontFamily = "Arial, sans-serif";
        elementoPDF.style.color = "#000";

        
        elementoPDF.innerHTML += `
            <div style="text-align:center; margin-bottom:20px;">
                <h1 style="color:#ed4b00; margin:0;">${treino.nome}</h1>
                <p style="color:#666;">Gym Experience - Treino Personalizado</p>
                <hr style="border:1px solid #ed4b00;">
            </div>
        `;
        

        treino.conteudo.forEach((semana) => {
            let htmlSemana = `<h3 style="background:#333; color:white; padding:5px;">${semana.nomeSemana}</h3>`;

            semana.dias.forEach((dia) => {
                if(dia.exercicios && dia.exercicios.length > 0) {
                    htmlSemana += `<h4 style="margin-top:15px; border-bottom: 2px solid #ed4b00;">${dia.nomeDia}</h4>`;

                    htmlSemana += `
                    <table style="width:100%; border-collapse: collapse; margin-bottom: 10px; font-size: 12px;">
                        <thead style="background-color: #ed4b00; color: white;">
                            <tr>
                                <th style="padding: 5px; text-align: left;">Exercício</th>
                                <th style="padding: 5px;">Séries</th>
                                <th style="padding: 5px;">Reps</th>
                                <th style="padding: 5px;">Carga</th>
                                <th style="padding: 5px;">Descanso</th>
                            </tr>
                        </thead>
                        <tbody>`;

                    dia.exercicios.forEach((ex) => {
                        htmlSemana += `
                            <tr style="border-bottom: 1px solid #ddd;">
                                <td style="padding: 5px;">${ex.exercicio}</td>
                                <td style="padding: 5px; text-align: center;">${ex.serie}</td>
                                <td style="padding: 5px; text-align: center;">${ex.repeticao}</td>
                                <td style="padding: 5px; text-align: center;">${ex.peso || "-"}</td>
                                <td style="padding: 5px; text-align: center;">${ex.descanso || "-"}</td>
                            </tr>`;
                    });
                    htmlSemana += `</tbody></table>`;

                }
            });

            elementoPDF.innerHTML += htmlSemana;
        });

        const opcoes = {
            margin: 10,
            filename: `${treino.nome.replace(/\s+/g, '_')}.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };
        html2pdf().set(opcoes).from(elementoPDF).save();
    }
    carregarTreinos();




});