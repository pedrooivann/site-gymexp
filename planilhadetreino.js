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

    removeweekbtn.remove();
    //Clona a div
    let semanaclone = semanaog.cloneNode(true);

    //Seleciona o titulo da div e coloca o contador de semanas
    semanaclone.querySelector('.weektitle').textContent = "Semana " + contadorSemana;
    contadorSemana++;

    //Insere a div antes da div de criar semanas
    secaosemanas.insertBefore(semanaclone, div_criar_semana);

    //As linhas do clone são apagadas para que ela esteja vazia
    let linhabusca = semanaclone.querySelectorAll('.trclass');
    linhabusca.forEach(e => { e.remove(); })

    //A nova div é definida como ultima
    const ultimaDiv = secaosemanas.querySelectorAll('.weekdiv');
    const ultimaSemana = ultimaDiv[ultimaDiv.length - 1];


    ultimaSemana.querySelector('.topcontent').appendChild(removeweekbtn);

    removeweekbtn.addEventListener('click', () => {
        ultimaSemana.remove();
    });
});








// Script Chechboxes

const chb_descanso = document.getElementById('resttime-checkbox');
const lastcolumn = document.querySelector('.th-remove');
lastcolumn = document.lastChild;

const variable = document.querySelectorAll('.weektable tr td')
const newthead = document.createElement('th');

chb_descanso.addEventListener('change', () => {
    if (chb_descanso.checked) {
        variable.forEach((variable) => {
            const newtd = document.createElement('td');
            newthead.appendChild(newtd);
        })

        lastcolumn.insertBefore(newthead);
    }
})
