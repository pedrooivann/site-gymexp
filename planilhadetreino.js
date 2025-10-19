
const botaofuncao = document.querySelectorAll('.addExerciseBtn');

botaofuncao.forEach((botao) => {
    botao.addEventListener('click', () => {

        const plan_tabela = botao.previousElementSibling.querySelector('.table-tbody');

        //Cria linha da tabela e celulas
        const linha = document.createElement("tr");
        const novo_exercicio = document.createElement("td");
        const nova_serie = document.createElement("td");
        const nova_repeticao = document.createElement("td");
        const novo_removerbtn = document.createElement("td");

        //Cria os inputs
        const input_exercicio = document.createElement("input");
        const input_serie = document.createElement("input");
        const input_repeticao = document.createElement("input");

        //Cria botão de remover
        const removerLinhaBtn = document.createElement("button");

        input_exercicio.type = "text";
        input_serie.type = "number";
        input_repeticao.type = "number";

        //Estilização dos Inputs criados
        Object.assign(input_exercicio.style, {
            backgroundColor: "rgba(255, 255, 255, 1)",
            textAlign: "left",
        })

        Object.assign(input_serie.style, {

            backgroundColor: "rgb(205, 205, 205)",
            textAlign: "center"
        })

        Object.assign(input_repeticao.style, {

            backgroundColor: "rgba(255, 255, 255, 1)",
            textAlign: "center",
        });

        [input_exercicio, input_serie, input_repeticao].forEach(input => {
            Object.assign(input.style, {
                width: "100%",
                boxSizing: "border-box",
                fontSize: "15px",
                height: "25px",
                border: "none",
                borderBottom: "2px solid grey",
                paddingLeft: "15px"
            })
        })

        //Estilização botão de remover linha
        removerLinhaBtn.textContent = "❌";
        removerLinhaBtn.style.cursor = "pointer";
        removerLinhaBtn.style.backgroundColor = "transparent";
        removerLinhaBtn.style.border = "none";
        removerLinhaBtn.style.padding = "0";

        //Coloca os inputs dentro das células
        novo_exercicio.appendChild(input_exercicio);
        nova_serie.appendChild(input_serie);
        nova_repeticao.appendChild(input_repeticao);
        novo_removerbtn.appendChild(removerLinhaBtn);

        //Coloca as células dentro da linha
        linha.appendChild(novo_exercicio);
        linha.appendChild(nova_serie);
        linha.appendChild(nova_repeticao);
        linha.appendChild(novo_removerbtn);

        plan_tabela.appendChild(linha);

        removerLinhaBtn.addEventListener('click', () => {
            linha.remove();
        })
    })
});