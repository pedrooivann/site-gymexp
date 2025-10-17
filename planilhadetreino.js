

function adicionarExercicio(idTabela) {

    //Cria linha da tabela e celulas
    const linha = document.createElement("tr");
    const novo_exercicio = document.createElement("td");
    const nova_serie = document.createElement("td");
    const nova_repeticao = document.createElement("td"); 

    //Cria os inputs
    const input_exercicio = document.createElement(input);
    const input_serie = document.createElement(input);
    const input_repeticao = document.createElement(input);

    //Coloca os inputs dentro das células
    novo_exercicio.appendChild(input_exercicio);
    nova_serie.appendChild(input_serie);
    nova_repeticao.appendChild(input_repeticao);

    //Coloca as células dentro da linha
    linha.appendChild(novo_exercicio);
    linha.appendChild(nova_serie);
    linha.appendChild(nova_repeticao);

    weektable.appendChild(linha);
}