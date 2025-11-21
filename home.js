

//Botão BODYBUILDING

const botao_bodybuilding = document.getElementById('bodybuilding-btn');
const conteudo = document.getElementById('workoutselection-content');

botao_bodybuilding.addEventListener('click', () => {

    const qblinha = document.createElement('br');
    conteudo.innerHTML = "";
    const bodybuilding_title = document.createElement('h1');
    bodybuilding_title.innerHTML = "Fundamentos do Bodybuilding";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const divisao_bodybuilding_title = document.createElement('h1');
    const p6 = document.createElement('p');
    const title_tresdias = document.createElement('h2');
    const p_tresdias = document.createElement('p');
    const title_quatrodias = document.createElement('h2');
    const p_quatrodias = document.createElement('p')
    const title_cincodias = document.createElement('h2');
    const p_cincodias = document.createElement('p');
    const title_seisdias = document.createElement('h2');
    const p_seisdias = document.createElement('p');
    const title_periodizacao = document.createElement('h1');
    const p_periodizacao = document.createElement('p');
    const a_planilha = document.createElement('span');

    // Fundamentos do bodybuilding
    p1.innerText = "Bodybuilding é um processo sistemático de manipular estímulo muscular, recuperação e nutrição para gerar hipertrofia. O objetivo não é apenas ficar mais forte, mas criar um físico equilibrado, denso e proporcional. Isso exige compreender como o músculo responde ao treinamento e como organizar o estímulo de maneira mensurável. Treinar sem estrutura é como tentar construir uma casa sem planta: por acaso você até ergue alguma coisa, mas não chega ao resultado ideal. Bodybuilding depende de três pilares — tensão mecânica, estresse metabólico e dano muscular — e toda sessão de treino deve buscar pelo menos os dois primeiros de forma controlada.";
    p2.innerText = "O corpo cresce quando recebe tensão suficiente para sinalizar adaptação. Essa tensão vêm de cargas progressivas, boas amplitudes de movimento e séries próximas da falha. A meta é simples: colocar o músculo em uma situação onde ele precisa recrutar mais fibras do que está acostumado. Em termos práticos, isso significa séries entre 6 e 20 repetições com uma dificuldade alta, normalmente deixando apenas 0 a 3 repetições “na reserva”. Quanto mais avançado o atleta, menor deve ser essa margem. Não existe mágica: músculo responde a sobrecarga, consistência e proximidade da falha.";
    p3.innerText = "Outro ponto crítico é especificidade muscular. Cada grupo muscular responde melhor a combinações específicas de exercícios. Peito precisa de movimentos de adução e flexão horizontal; costas dependem de remadas e puxadas com diferentes ângulos; ombros exigem variações de elevação e pressão; quadríceps crescem com extensões de joelho profundas; posterior reage bem a alongamento sob carga. Um treino eficiente não é aleatório — é construído com exercícios que realmente carregam o músculo-alvo. O erro mais comum é treinar um músculo “por tabela” sem dar a ele seu próprio estímulo direto.";
    p4.innerText = "A organização semanal também é fundamental. Frequência 2× por semana por grupo muscular normalmente oferece o melhor custo-benefício para a maioria das pessoas. O motivo é biológico: a síntese proteica pós-treino dura aproximadamente 24–48 horas. Treinar um músculo apenas uma vez por semana desperdiça potencial de crescimento. Por outro lado, treinar três ou mais vezes só faz sentido se o volume total estiver muito bem distribuído e houver recuperação suficiente entre sessões.";
    p5.innerText = "Por fim, o volume é o termômetro do progresso. Ele corresponde ao número de séries realmente difíceis realizadas por semana para cada grupo muscular. A maioria das pessoas evolui bem com algo entre 10 e 20 séries semanais por músculo, normalmente divididas em duas sessões para otimizar estímulo e recuperação. Volume excessivo gera fadiga acumulada antes de gerar hipertrofia; volume insuficiente simplesmente não cria adaptação. O ponto ideal vem do próprio corpo: desempenho estável, pump consistente, dor muscular leve e controlada, e progressão contínua nas cargas. Além disso, trabalhar próximo da falha — geralmente entre 1–2 RIR ou cerca de 8 RPE — garante que cada série tenha intensidade suficiente. No fim, o treino mais eficiente não é o mais longo, é o mais estrategicamente planejado.";

    //Divisões de treino para bodybuilding
    divisao_bodybuilding_title.innerHTML = "Divisões de treino para Bodybuilding";
    p6.innerText = "Treinar de 3 a 6 vezes por semana muda completamente a estratégia da divisão. Com menos dias, você precisa usar treinos mais completos para garantir estímulo suficiente em todos os músculos. Conforme os dias aumentam, a divisão pode ficar mais específica, permitindo focar mais em volume, técnica e recuperação adequada. A partir de 5–6 dias, entram splits mais refinadas, como PPL (Push/Pull/Legs) ou variações híbridas, que distribuem o volume com precisão e evitam sobrecarga. No fim, a regra é simples: menos dias → treinos mais abrangentes; mais dias → treinos mais especializados e bem distribuídos."

    //Divisão três dias
    title_tresdias.innerHTML = "Divisão 3 dias na semana (Full body 3x)";
    p_tresdias.innerText = "O full body 3x é uma divisão onde você treina o corpo inteiro em três sessões semanais. Ele funciona porque distribui o estímulo de maneira uniforme, evitando longos intervalos sem treinar um músculo. Como cada grupo é trabalhado segunda, quarta e sexta (por exemplo), você acumula volume de forma constante, melhora a técnica dos principais exercícios e mantém a recuperação em dia. Além disso, é simples, direto e extremamente eficiente para quem tem pouco tempo ou quer resultados sólidos sem complicar a rotina."

    //Divisão quatro dias
    title_quatrodias.innerHTML = "Divisão 4 dias na semana (Upper/Lower + Upper/Lower)";
    p_quatrodias.innerText = "A divisão Upper/Lower 4x é uma das formas mais equilibradas e eficientes de organizar o treino, porque permite trabalhar a parte superior (Upper) e inferior (Lower) do corpo duas vezes por semana, garantindo estímulo suficiente para hipertrofia sem comprometer a recuperação. Ela combina a frequência ideal com sessões objetivas, onde cada treino tem foco claro e volume bem distribuído. Além disso, facilita o aumento progressivo de carga nos exercícios compostos e deixa a semana organizada, evitando treinos longos demais ou intervalos muito grandes entre estímulos. É simples, forte e altamente prática — exatamente o tipo de estrutura que funciona no longo prazo. Uma boa divisão para este seria Segunda, terça, quinta e sexta, deixando quarta para descanso.";

    //Divisão cinco dias
    title_cincodias.innerHTML = "Divisão 5 dias na semana (Upper e Lower + Push, Pull e Legs)"
    p_cincodias.innerText = "A combinação Upper/Lower + PPL é uma divisão híbrida pensada para quem treina 5 vezes por semana e quer equilibrar frequência, volume e recuperação de forma mais avançada. Ela começa com treinos amplos e completos (Upper/Lower - Superior e Inferior), garantindo estímulos fortes nos principais padrões de movimento, e depois entra no bloco PPL (Push/Pull/Legs - Empurrar, puxar e pernas), que permite trabalhar grupos musculares de maneira mais segmentada e com mais detalhe. O resultado é uma semana extremamente bem distribuída: no início, você foca força e densidade com exercícios grandes; no final, refina pontos fracos, dá mais ênfase a certas áreas e acumula volume adicional sem sobrecarregar. Essa divisão é ideal para quem quer crescer com eficiência, não gosta da monotonia do PPL puro e busca uma rotina sólida, lógica e difícil de estagnar."

    //Divisão seis dias
    title_seisdias.innerHTML = "Divisão 6 dias na semana (PPL 2x)";
    p_seisdias.innerText = "A divisão PPL + PPL é o clássico esquema de Push, Pull e Legs repetido duas vezes na semana, formando 6 treinos muito bem distribuídos. É simples e eficiente: você treina movimentos de empurrar, depois puxar e depois pernas, e repete esse ciclo, garantindo que cada músculo receba estímulo duas vezes — o ponto ideal para hipertrofia para a maioria das pessoas. Ela equilibra bem volume, intensidade e recuperação, sendo fácil de montar e difícil de errar. Para quem treina seis dias e quer resultados consistentes sem complicação, PPL + PPL é praticamente a divisão “padrão ouro” para quem treina com maior frequência."


    //Periodização
    title_periodizacao.innerHTML = "Periodização";
    p_periodizacao.innerHTML = "Periodização é a estratégia que organiza o treino ao longo das semanas para garantir progresso constante sem estagnar. Em vez de treinar sempre igual — o que faz o corpo se acostumar e parar de evoluir — a periodização divide o treinamento em fases com focos diferentes, como força, hipertrofia e recuperação. Cada fase prepara o terreno para a próxima. Períodos de cargas mais altas aumentam sua capacidade de recrutar fibras; fases com mais volume acumulam estímulo para hipertrofia; semanas mais leves reduzem a fadiga e deixam o corpo “supercompensar”, crescendo ainda mais. O objetivo não é deixar o treino complicado, mas inteligente. A periodização permite trabalhar duro sem quebrar o corpo, controlar a fadiga, manter o desempenho subindo e garantir que cada sessão tenha um propósito dentro de um plano maior. Por isso nosso site possui planilhas que se organizam em semanas, para que seja possível a criação não só de treinos simples, mas também treinos inteligentes pensados em longo prazo. <a href=\"planilhadetreino.html\">Crie sua planilha de treio com periodização agora!";

    // Fundamentos do bodybuilding
    conteudo.appendChild(bodybuilding_title);
    conteudo.appendChild(p1);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p2);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p3);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p4);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p5);

    //Divisões de treino para bodybuilding

    conteudo.appendChild(divisao_bodybuilding_title);
    conteudo.appendChild(p6);

    //Divisão três dias
    conteudo.appendChild(title_tresdias);
    conteudo.appendChild(p_tresdias);

    //Divisão quatro dias
    conteudo.appendChild(title_quatrodias);
    conteudo.appendChild(p_quatrodias);

    //Divisão cinco dias
    conteudo.appendChild(title_cincodias);
    conteudo.appendChild(p_cincodias);

    //Divisão seis dias 
    conteudo.appendChild(title_seisdias);
    conteudo.appendChild(p_seisdias);

    //Periodizacao
    conteudo.appendChild(title_periodizacao);
    conteudo.appendChild(p_periodizacao);
});