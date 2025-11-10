let acumulador_semana = 1;
const botaofuncao = document.querySelectorAll('.addExerciseBtn');
let semanaprincipal = document.querySelector('.weektitle');
semanaprincipal.textContent = "Semana " + acumulador_semana;
const secaosemanas = document.getElementById('right-main-section');

// Função Criar Linhas
secaosemanas.addEventListener('click', (e) => {
    if (e.target.classList.contains('addExerciseBtn')) {
        const plan_tabela = e.target.previousElementSibling.querySelector('.table-tbody');

        //Cria linha da tabela e celulas
        const linha = document.createElement("tr");
        const novo_exercicio = document.createElement("td");
        const nova_serie = document.createElement("td");
        const nova_repeticao = document.createElement("td");
        const novo_peso = document.createElement("td");
        const nova_descanso = document.createElement("td");
        const novo_removerbtn = document.createElement("td");

        //Cria os inputs
        const input_exercicio = document.createElement("input");
        const input_serie = document.createElement("input");
        const input_repeticao = document.createElement("input");
        const input_peso = document.createElement("input");
        const input_descanso = document.createElement("input");

        input_peso.placeholder = "Kg";
        input_descanso.placeholder = "--:--"
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

        Object.assign(input_peso.style, {
            backgroundColor: "rgb(205, 205, 205)",
            textAlign: "center"
        });

        Object.assign(input_descanso.style, {
            textAlign: "center"
        });

        [input_exercicio, input_serie, input_repeticao, input_peso, input_descanso].forEach(input => {
            Object.assign(input.style, {
                width: "100%",
                boxSizing: "border-box",
                fontSize: "15px",
                border: "none",
                borderBottom: "2px solid grey",
                lineHeight: '1.4',        // evita corte das letras
                padding: '6px 10px',      // espaço vertical suficiente
                height: 'auto'

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
        novo_peso.appendChild(input_peso);
        nova_descanso.appendChild(input_descanso);
        novo_removerbtn.appendChild(removerLinhaBtn);

        //Coloca as células dentro da linha
        linha.appendChild(novo_exercicio);
        linha.appendChild(nova_serie);
        linha.appendChild(nova_repeticao);
        linha.appendChild(novo_peso);
        linha.appendChild(nova_descanso);
        linha.appendChild(novo_removerbtn);

        plan_tabela.appendChild(linha);

        removerLinhaBtn.addEventListener('click', () => {
            linha.remove();
        })
    }
});


// Declara botão criar semana
const btncriarsemana = document.querySelector('#createweekbutton');
//Pega a semana 1
const semanaog = document.querySelector('.weekdiv');
//Pega a div de criar semanas
const div_criar_semana = document.getElementById('createweekdiv');

const espacorm = document.querySelector('.topcontent');


// Estilizar a imagem botão apagar semana
const deleteimg = document.createElement('img');
deleteimg.src = "/images/deleteweek.png";
deleteimg.style.width = "60px";
deleteimg.style.height = "65px";
deleteimg.alt = "Remover semana";
deleteimg.title = "Remover semana";


let contadorSemana = 2;

//----- Função de criar semana
btncriarsemana.addEventListener('click', () => {

    //Clona a div
    let semanaclone = semanaog.cloneNode(true);

    //Limpa conteudo
    const tbodies = semanaclone.querySelectorAll('.table-tbody');
    tbodies.forEach(tb => tb.innerHTML = '');

    //Seleciona o titulo da div e coloca o contador de semanas
    semanaclone.querySelector('.weektitle').textContent = "Semana " + contadorSemana;
    contadorSemana++;

    // Insere o clone antes do botão de criar semana
    secaosemanas.insertBefore(semanaclone, div_criar_semana);

    criarRemoveButton(semanaclone);
    recontarSemanas();


});



//----- Função de copiar semana
secaosemanas.addEventListener('click', (e) => {
    const btn = e.target.closest('.copyweek'); // Pega o botão ou null
    if (btn) {
        const thisweek = btn.closest('.weekdiv'); // Pega a semana do botão
        const thisweekclone = thisweek.cloneNode(true);
        secaosemanas.insertBefore(thisweekclone, div_criar_semana);
        recontarSemanas();
        criarRemoveButton(thisweekclone);
    }
});

//----- Função de criar botão de remover semana
function criarRemoveButton(semanaclone) {
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.style.backgroundColor = "transparent";
    newRemoveBtn.style.border = "none"
    newRemoveBtn.className = 'remove-week-btn';
    newRemoveBtn.appendChild(deleteimg.cloneNode(true));
    semanaclone.querySelector('.topcontent').appendChild(newRemoveBtn);

    newRemoveBtn.addEventListener('click', () => {
        semanaclone.remove();
        recontarSemanas();

    })
};


//----- Função fazer recontagem constante
function recontarSemanas() {
    //Seleciona todas as semanas - Cria NodeList
    const weeks = secaosemanas.querySelectorAll('.weekdiv');

    let n = 1;

    //Para cada semana => Seleciona o título de cada uma
    weeks.forEach(w => {
        const title = w.querySelector('.weektitle');

        // Se tiver um titulo => Muda ele fazendo de 1 até o nº de semanas
        if (title) title.textContent = `Semana ${n++}`;
    });
    //Pede o tamanho da qntd de semanas
    contadorSemana = weeks.length + 1;
}

//Lê e salva os treinos// 

const botaoSalvarTreino = document.getElementById("Btsave");
if (botaoSalvarTreino) botaoSalvarTreino.addEventListener("click", salvarTreino);

function salvarTreino() {
  const todasSemanas = document.querySelectorAll(".weekdiv");
  const dadosTreino = [];

  todasSemanas.forEach((semana) => {
    const nomeSemana = (semana.querySelector(".weektitle")?.textContent || "").trim();
    const dias = [];

    semana.querySelectorAll(".weektable").forEach((tabela, idx) => {
      const nomeDia = (tabela.previousElementSibling?.textContent || `Dia ${idx + 1}`).trim();
      const exercicios = [];

      tabela.querySelectorAll("tbody tr").forEach((linha) => {
        const inputs = Array.from(linha.querySelectorAll("input"));
        
        if (inputs.length >= 5) {
          const [exercicio, serie, repeticao, peso, descanso] = inputs.map(i => i.value.trim());
          if (exercicio) {
            exercicios.push({ exercicio, serie, repeticao, peso, descanso });
          }
        }
      });

      dias.push({ nomeDia, exercicios });
    });

    dadosTreino.push({ nomeSemana, dias });
  });

  localStorage.setItem("planilhaTreino", JSON.stringify(dadosTreino));
  alert("✅ Seu treino foi salvo com sucesso!");
}

function criarInput(type, valor = "") {
  const input = document.createElement("input");
  input.type = type;
  input.value = valor;
  input.style.width = "100%";
  input.style.boxSizing = "border-box";
  input.style.border = "none";
  input.style.borderBottom = "2px solid grey";
  input.style.fontSize = "15px";
  input.style.lineHeight = "1.4";
  input.style.padding = "6px 10px";
  input.style.height = "auto";
  input.style.textAlign = (type === "text" ? "left" : "center");
  return input;
}


function carregarTreino() {
  const dados = localStorage.getItem("planilhaTreino");
  if (!dados) return;

  let treino;
  try {
    treino = JSON.parse(dados);
    if (!Array.isArray(treino)) return;
  } catch (e) {
    console.error("Erro ao parsear planilhaTreino:", e);
    return;
  }

  const secoes = document.getElementById("right-main-section");
  if (!secoes) return;


  secoes.querySelectorAll(".weekdiv").forEach(w => w.remove());

  if (typeof semanaog === "undefined" || typeof div_criar_semana === "undefined") {
    console.error("Variáveis semanaog ou div_criar_semana não encontradas. Elas precisam existir no script.");
    return;
  }

  treino.forEach((semanaData) => {
    const clone = semanaog.cloneNode(true);

    clone.querySelector(".weektitle").textContent = semanaData.nomeSemana || "";

    clone.querySelectorAll(".table-tbody").forEach(tbody => tbody.innerHTML = "");

    semanaData.dias.forEach((diaData, idx) => {
      const tabelas = clone.querySelectorAll(".weektable");
      const tabela = tabelas[idx];
      if (!tabela) return;
      const tbody = tabela.querySelector("tbody");

      (diaData.exercicios || []).forEach((ex) => {
        const linha = document.createElement("tr");

        const campos = [
          criarInput("text", ex.exercicio),
          criarInput("number", ex.serie),
          criarInput("number", ex.repeticao),
          criarInput("text", ex.peso),
          criarInput("text", ex.descanso)
        ];

        campos.forEach((input) => {
          const td = document.createElement("td");
          td.appendChild(input);
          linha.appendChild(td);
        });

        const tdBtn = document.createElement("td");
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.style.border = "none";
        btnRemover.style.background = "transparent";
        btnRemover.style.cursor = "pointer";
        btnRemover.addEventListener("click", () => linha.remove());
        tdBtn.appendChild(btnRemover);
        linha.appendChild(tdBtn);

        tbody.appendChild(linha);
      });
    });

    if (typeof criarRemoveButton === "function") criarRemoveButton(clone);

  
    secoes.insertBefore(clone, div_criar_semana);
  });

  
  if (typeof recontarSemanas === "function") recontarSemanas();

}


window.addEventListener("load", carregarTreino);
