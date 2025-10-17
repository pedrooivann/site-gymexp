function adicionarExercicio(idTabela) {
    const nomeExercicio = prompt("Digite o nome do exercício:");
    const numSeries = parseInt(prompt("Digite o número de séries:"));
    const numRepeticoes = parseInt(prompt("Digite o número de repetições:"));

    const weektable = document.getElementById(idTabela);

    const linha = document.createElement("tr");
    const novoExercicio = document.createElement("td");
    const novaSerie = document.createElement("td");
    const novaRepeticao = document.createElement("td");

    novoExercicio.textContent = nomeExercicio;
    novaSerie.textContent = numSeries;
    novaRepeticao.textContent = numRepeticoes;

    linha.appendChild(novoExercicio);
    linha.appendChild(novaSerie);
    linha.appendChild(novaRepeticao);

    weektable.appendChild(linha);
}