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
deleteimg.src = "/images/deleteweek.webp";
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
  //remove botões antigos
const oldRemove = semanaclone.querySelectorAll('.remove-week-btn');
oldRemove.forEach(btn => btn.remove());

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

document.addEventListener("DOMContentLoaded", () => {
  const botaoSalvar = document.getElementById("Btsave");
  if (!botaoSalvar) return;

  botaoSalvar.addEventListener("click", () => {
    try {
      const semanas = document.querySelectorAll(".weekdiv");
      const dadosTreino = [];

      semanas.forEach((semana) => {
        const nomeSemana = (semana.querySelector(".weektitle")?.textContent || "").trim();
        const dias = [];

        semana.querySelectorAll(".weektable").forEach((tabela, idx) => {
          const nomeDia = (tabela.previousElementSibling?.textContent || `Dia ${idx + 1}`).trim();
          const exercicios = [];

          tabela.querySelectorAll("tbody tr").forEach((linha) => {
            const inputs = linha.querySelectorAll("input");
            if (inputs.length >= 5) {
              const valores = Array.from(inputs).map(i => i.value.trim());
              const [exercicio, serie, repeticao, peso, descanso] = valores;
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
     showAlert("Treino salvo com sucesso!", "success");
    } catch (err) {
      console.error("Erro ao salvar treino:", err);
     showAlert("Erro ao salvar treino.", "error");
    }
  });
});

//Salva o treino em arquivo PD
(function () {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = () => {
    const botaoPDF = document.getElementById("Btpdf");
    if (!Btpdf) return;

    botaoPDF.addEventListener("click", () => {
      const todasSemanas = document.querySelectorAll(".weekdiv");
      if (!todasSemanas.length) {
      showAlert("Nenhuma semana encontrada", "error");
        return;
      }

      const areaPDF = document.createElement("div");

     
      todasSemanas.forEach((semana) => {
        const linhas = semana.querySelectorAll("tbody tr");
        let temExercicio = false;

        linhas.forEach((linha) => {
          const inputs = linha.querySelectorAll("input");
          inputs.forEach((input) => {
            if (input.value.trim() !== "") {
              temExercicio = true;
            }
          });
        });

        
        if (temExercicio) {
          const clone = semana.cloneNode(true);
          areaPDF.appendChild(clone);
        }
      });

      if (areaPDF.children.length === 0) {
     
       showAlert("Nenhuma semana preenchida!", "warning");
        return;
      }

      const opcoes = {
        margin: 10,
        filename: `Treino_${new Date().toLocaleDateString("pt-BR")}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      html2pdf().set(opcoes).from(areaPDF).save();
    });
  };
  document.head.appendChild(script);
})();

//Sessão de alertas//
function showAlert(message, type = "success") {
  const modal = document.getElementById("customAlert");
  const box = modal.querySelector(".alert-box");
  const icon = document.getElementById("alertIcon");
  const text = document.getElementById("alertMessage");

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
  };

  icon.textContent = icons[type] || "ℹ️";
  text.textContent = message;

  box.className = `alert-box ${type}`;
  modal.classList.add("show");

  setTimeout(() => {
    modal.classList.remove("show");
  }, 3000);
}
