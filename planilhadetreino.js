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
        linha.className = "trclass"
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
    }
});

// Função criar nova semana

// Cria botão criar semana
const btncriarsemana = document.querySelector('#createweekbutton');
//Pega a semana 1
const semanaog = document.querySelector('.weekdiv');
//Pega a div de criar semanas
const div_criar_semana = document.getElementById('createweekdiv');

const espacorm = document.querySelector('.topcontent');

const removeweekbtn = document.createElement('button');
Object.assign(removeweekbtn.style, {
    width: "50px",
    height: "50px",
    backgroundColor: "red"
});


let contadorSemana = 2;
btncriarsemana.addEventListener('click', () => {


    //Clona a div
    let semanaclone = semanaog.cloneNode(true);

    //Seleciona o titulo da div e coloca o contador de semanas
    semanaclone.querySelector('.weektitle').textContent = "Semana " + contadorSemana;
    contadorSemana++;

    // Cria um botão de remover específico para este clone (não reusar o mesmo)
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.className = 'remove-week-btn';
    newRemoveBtn.textContent = 'Remover Semana';

    // Insere o clone antes do botão de criar semana
    secaosemanas.insertBefore(semanaclone, div_criar_semana);

    // Adiciona o botão ao topo da nova semana
    semanaclone.querySelector('.topcontent').appendChild(newRemoveBtn);

    // Listener ligado só ao botão novo — remove apenas este clone
    newRemoveBtn.addEventListener('click', () => {
        semanaclone.remove();
        recontarSemanas(); //
    })

});

//Fazer a recontagem das semanas após apagar uma 
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

// Checkboxes

