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
        const novo_rir = document.createElement("td");
        const novo_rpe = document.createElement("td");
        const novo_removerbtn = document.createElement("td");

        //Cria os inputs
        const input_exercicio = document.createElement("input");
        const input_serie = document.createElement("input");
        const input_repeticao = document.createElement("input");
        const input_peso = document.createElement("input");
        const input_descanso = document.createElement("input");
        const input_rir = document.createElement("input");
        const input_rpe = document.createElement("input");

        input_peso.placeholder = "Kg";
        input_descanso.placeholder = "--:--";
        
        //Cria botão de remover
        const removerLinhaBtn = document.createElement("button");

        input_exercicio.type = "text";
        input_serie.type = "number";
        input_repeticao.type = "number";
        input_rir.type = "number";
        input_rpe.type = "number";

        // IMPEDIR NÚMEROS NO CAMPO EXERCÍCIO
        input_exercicio.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
        });

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

        Object.assign(input_rir.style, {
            backgroundColor: "rgb(205, 205, 205)",
            textAlign: "center"
        });

        Object.assign(input_rpe.style, {
            backgroundColor: "rgba(255, 255, 255, 1)",
            textAlign: "center"
        });

        [input_exercicio, input_serie, input_repeticao, input_peso, input_descanso, input_rir, input_rpe].forEach(input => {
            Object.assign(input.style, {
                width: "100%",
                boxSizing: "border-box",
                fontSize: "14px",
                border: "none",
                borderBottom: "2px solid grey",
                lineHeight: '1.4',
                padding: '4px 6px',
                height: 'auto',
                fontFamily: 'inherit'
            })
        });
        
        //Estilização botão de remover linha
        removerLinhaBtn.textContent = "❌";
        removerLinhaBtn.style.cursor = "pointer";
        removerLinhaBtn.style.backgroundColor = "transparent";
        removerLinhaBtn.style.border = "none";
        removerLinhaBtn.style.padding = "0";
        removerLinhaBtn.style.fontSize = "12px";

        //Coloca os inputs dentro das células
        novo_exercicio.appendChild(input_exercicio);
        nova_serie.appendChild(input_serie);
        nova_repeticao.appendChild(input_repeticao);
        novo_peso.appendChild(input_peso);
        nova_descanso.appendChild(input_descanso);
        novo_rir.appendChild(input_rir);
        novo_rpe.appendChild(input_rpe);
        novo_removerbtn.appendChild(removerLinhaBtn);

        //Coloca as células dentro da linha
        linha.appendChild(novo_exercicio);
        linha.appendChild(nova_serie);
        linha.appendChild(nova_repeticao);
        linha.appendChild(novo_peso);
        linha.appendChild(nova_descanso);
        linha.appendChild(novo_rir);
        linha.appendChild(novo_rpe);
        linha.appendChild(novo_removerbtn);

        plan_tabela.appendChild(linha);

        // Ajusta a largura do botão ➕ para acompanhar a tabela
        ajustarLarguraBotaoAdd(e.target);

        removerLinhaBtn.addEventListener('click', () => {
            linha.remove();
        })
    }
});

// Função para ajustar a largura do botão ➕
function ajustarLarguraBotaoAdd(botao) {
    const tabela = botao.previousElementSibling;
    if (tabela && tabela.classList.contains('weektable')) {
        const larguraTabela = tabela.offsetWidth;
        botao.style.width = larguraTabela + 'px';
    }
}

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

    // Ajusta a largura de todos os botões ➕ na semana clonada
    semanaclone.querySelectorAll('.addExerciseBtn').forEach(botao => {
        ajustarLarguraBotaoAdd(botao);
    });

    criarRemoveButton(semanaclone);
    recontarSemanas();
});

//----- Função de copiar semana
secaosemanas.addEventListener('click', (e) => {
    const btn = e.target.closest('.copyweek');
    if (btn) {
        const thisweek = btn.closest('.weekdiv');
        const thisweekclone = thisweek.cloneNode(true);
        
        // Limpa os valores dos inputs na cópia
        thisweekclone.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        
        secaosemanas.insertBefore(thisweekclone, div_criar_semana);
        
        // Ajusta a largura de todos os botões ➕ na semana copiada
        thisweekclone.querySelectorAll('.addExerciseBtn').forEach(botao => {
            ajustarLarguraBotaoAdd(botao);
        });
        
        recontarSemanas();
        criarRemoveButton(thisweekclone);
    }
});

//----- Função de criar botão de remover semana
function criarRemoveButton(semanaclone) {
    // Remove botões antigos
    const oldRemove = semanaclone.querySelectorAll('.remove-week-btn');
    oldRemove.forEach(btn => btn.remove());

    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.style.backgroundColor = "transparent";
    newRemoveBtn.style.border = "none";
    newRemoveBtn.style.cursor = "pointer";
    newRemoveBtn.className = 'remove-week-btn';
    
    const deleteImgClone = deleteimg.cloneNode(true);
    newRemoveBtn.appendChild(deleteImgClone);
    semanaclone.querySelector('.topcontent').appendChild(newRemoveBtn);

    newRemoveBtn.addEventListener('click', () => {
        semanaclone.remove();
        recontarSemanas();
    });
}

//----- Função fazer recontagem constante
function recontarSemanas() {
    const weeks = secaosemanas.querySelectorAll('.weekdiv');
    let n = 1;

    weeks.forEach(w => {
        const title = w.querySelector('.weektitle');
        if (title) title.textContent = `Semana ${n++}`;
    });
    
    contadorSemana = weeks.length + 1;
}

// Ajusta a largura dos botões ➕ quando a página carrega
window.addEventListener('load', () => {
    document.querySelectorAll('.addExerciseBtn').forEach(botao => {
        ajustarLarguraBotaoAdd(botao);
    });
});

// Ajusta a largura dos botões ➕ quando a janela é redimensionada
window.addEventListener('resize', () => {
    document.querySelectorAll('.addExerciseBtn').forEach(botao => {
        ajustarLarguraBotaoAdd(botao);
    });
});

//Lê e salva os treinos// 
document.addEventListener("DOMContentLoaded", () => {
    const botaoSalvar = document.getElementById("Btsave");
  if (!botaoSalvar) return;

  botaoSalvar.addEventListener("click", () => {

    let dadosTreino = [];

    try {
      const semanas = document.querySelectorAll(".weekdiv");
      

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

    } catch (err) {
      console.error("Erro ao salvar treino:", err);
      showAlert("Erro ao salvar treino.", "error");
      return;
    }
    const nomeDoTreino = prompt("Digite um nome para salvar este treino na sua Biblioteca (Ex.: Treino de Hipertrofia):");

    if (!nomeDoTreino) return; 

    
    const novoTreino = {
      id: Date.now(),
      nome: nomeDoTreino,
      dataCriacao: new Date().toLocaleDateString(),
      conteudo: dadosTreino
    };

    const listaTreinos = JSON.parse(localStorage.getItem("meusTreinosSalvos") || "[]");

    
    listaTreinos.push(novoTreino);

    
    localStorage.setItem("meusTreinosSalvos", JSON.stringify(listaTreinos));

    showAlert(`Treino "${nomeDoTreino}" salvo no Perfil!`, "success");
  });

});

//Salva o treino em arquivo PDF
(function () {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.onload = () => {
        const botaoPDF = document.getElementById("Btpdf");
        if (!botaoPDF) return;

        botaoPDF.addEventListener("click", () => {
            const todasSemanas = document.querySelectorAll(".weekdiv");
            if (!todasSemanas.length) {
                showAlert("Nenhuma semana encontrada", "error");
                return;
            }

            const areaPDF = document.createElement("div");
            areaPDF.style.padding = "20px";

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
                    
                
                    // Ajusta estilos para PDF
                    clone.style.margin = "20px 0";
                    clone.style.maxWidth = "100%";
                    
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
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    scrollY: 0
                },
                jsPDF: { 
                    unit: "mm", 
                    format: "a4", 
                    orientation: "portrait" 
                },
                pagebreak: { 
                    mode: ['avoid-all', 'css', 'legacy'] 
                },
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

// Melhorias de ergonomia e responsividade
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona hover effects para melhor usabilidade
    const styles = `
        .weektable td:hover {
            background-color: #f0f0f0 !important;
            transition: background-color 0.2s ease;
        }
        
        .addExerciseBtn:hover {
            background-color: #ffd700 !important;
            transform: translateY(-1px);
            transition: all 0.3s ease;
        }
        
        .copyweek:hover img {
            transform: scale(1.1);
            transition: transform 0.2s ease;
        }
        
        .remove-week-btn:hover img {
            transform: scale(1.1);
            transition: transform 0.2s ease;
        }
        
        /* Melhorias de responsividade */
        @media (max-width: 1200px) {
            #right-main-section {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }
        
        @media (max-width: 768px) {
            #right-main-section {
                grid-template-columns: 1fr !important;
            }
            
            .weekdiv {
                margin: 20px 10px !important;
                max-width: 100% !important;
            }
            
            .weektable {
                font-size: 12px !important;
            }
            
            .weektable input {
                font-size: 12px !important;
                padding: 2px 4px !important;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
});