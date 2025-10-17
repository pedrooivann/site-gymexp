
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
            width: "200px",
            textAlign: "left",
        })

        Object.assign(input_serie.style, {

            width: "50px",
            textAlign: "center"
        })

        Object.assign(input_repeticao.style, {
            width: "100px",
            textAlign: "center",
        });

        [input_exercicio, input_serie, input_repeticao].forEach(input => {
            Object.assign(input.style, {
                fontSize: "15px",
                height: "25px",
                backgroundColor: "rgb(229, 229, 229)",
                borderRadius: "4px",
                border: "none",
                paddingLeft: "15px"
            })
        })

        //Estilização botão de remover linha
        removerLinhaBtn.textContent = "❌";
        removerLinhaBtn.style.cursor = "pointer";
        removerLinhaBtn.style.backgroundColor = "none";
        removerLinhaBtn.style.border = "none";

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