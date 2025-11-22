

const qblinha = document.createElement('br');
const botao_bodybuilding = document.getElementById('bodybuilding-btn');
const botao_powerlifting = document.getElementById('powerlifting-btn');

//Botão BODYBUILDING


const conteudo = document.getElementById('workoutselection-content');

botao_bodybuilding.addEventListener('click', () => {

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

botao_powerlifting.addEventListener('click', () => {

    conteudo.innerHTML = "";
    const powerlifting_title = document.createElement('h1');
    powerlifting_title.innerHTML = "Fundamentos do Powerlifting";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const divisao_powerlifting_title = document.createElement('h1');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');

    const title_exemplo_power = document.createElement('h2');


    p1.innerText = "Powerlifting é o esporte focado em produzir o maior nível de força possível em três movimentos — agachamento, supino e levantamento terra — com máxima eficiência técnica. A ideia é simples: diferente do bodybuilding, que “esculpe” o físico, o powerlifting funciona como preparar um carro de arrancada, onde tudo é voltado para explodir potência em um único momento. O atleta treina para mover a maior carga no menor tempo, com um padrão de movimento consistente, econômico e repetível. Cada centímetro, cada ângulo e cada detalhe da técnica influencia a força final. No powerlifting, você não treina apenas músculos; você treina o sistema nervoso para recrutar fibras mais rápido, coordenar melhor os movimentos e transformar o corpo em uma máquina de força pura.";
    p2.innerText = "A base do treino em powerlifting é o desenvolvimento de força neural, porque força máxima não vem só de músculo, e sim de quão bem o seu sistema nervoso consegue recrutar fibras e coordenar o movimento sob carga. Quanto mais você pratica os três levantamentos com técnica consistente, mais eficiente seu corpo fica em ativar fibras rápidas, reduzir desperdício de energia e estabilizar articulações. Por isso o treino foca em baixas repetições, alta qualidade técnica e progressão planejada de carga. A ideia não é sair destruído, e sim ensinar o corpo a produzir força com precisão cirúrgica.";
    p3.innerText = "Montar treino de powerlifting é sobre organizar os três movimentos principais — agachamento, supino e terra — de forma que você pratique técnica com frequência alta, progrida carga de maneira controlada e mantenha a fadiga sempre sob vigilância. A sessão começa pelos lifts principais, com poucas repetições e foco total na execução, porque força máxima depende de sistema nervoso descansado; depois entram os acessórios para corrigir pontos fracos, reforçar musculaturas específicas e impedir que a técnica colapse sob carga. A progressão deve ser simples, mexendo em um elemento por vez — peso, repetições ou séries — evitando aumentar tudo de uma vez para não afogar o corpo. A fadiga é administrada com ciclos de 3 semanas de subida e 1 semana mais leve, permitindo supercompensação real. A frequência ideal trabalha cada lift de 2 a 4 vezes por semana, porque técnica e força se constroem como idioma: repetição constante. No final, montar treino de powerlifting é afinar um carro de arrancada — tudo gira em torno de ajustar alavancas, potência e consistência para produzir o maior output possível quando importa.";

    divisao_powerlifting_title.innerHTML = "Divisão de treino para Powerlifting";

    p4.innerText = "Dito isso, é importante montar um treino de powerlifting que conserve o máximo o Sistema Nervoso Central e de forma que mantenha a intensidade de acordo com cada grupo muscular e evite o desgaste ligamentar. Cada um dos principais exercícios do Powerlifting possuem demandas diferentes, o agachamento (Squat) possui um desgaste intermediário por pegar quase toda parte inferior do corpo, causando fadiga também na cadeia posterior, atrapalhando no dia de levantamento terra, logo é aconselhavel treina-lo 2x na semana. O supino (Bench), por ser um grupo muscular menor (Peitoral, ombro e tríceps), requer menos tempo de recuperação, sendo viável colocá-lo até 3-4x na semana. E por fim o levantamento terra (Deadlift), que é o exercício de powerlifting mais desgastante, utilizando de toda cadeia posterior do corpo: glúteos, isquiotibiais e erétores da espinha (lombar), além dos dorsais, trapézios e quadríceps, além também de forçar músculos do antebraço, por isso é treinado de 1 até 2 vezes na semana para evitar lesões."
    p5.innerText = "Além de organizar os levantamentos principais, é necessário que os músculos acumulem volume para gerar hipertrofia. Mesmo que o tamanho muscular não seja o único determinante da força, mais massa aumenta o potencial do músculo produzir e desenvolver força. Por isso, é importante incluir no planejamento exercícios acessórios — remadas, barras fixas, trabalhos de tríceps, leg press, entre outros — que adicionam volume e complementam os movimentos principais.";
    
    title_exemplo_power.innerHTML = "Exemplo de divisão de treino para Powerlifting."

    conteudo.appendChild(powerlifting_title);
    conteudo.appendChild(p1);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p2);
    conteudo.appendChild(qblinha);
    conteudo.appendChild(p3);
    conteudo.appendChild(divisao_powerlifting_title);
    conteudo.appendChild(p4);
    conteudo.appendChild(p5);
    conteudo.appendChild(title_exemplo_power);

});