
//Quebra Linha
const qblinha = document.createElement('br');
//BodyBuilding
const botao_bodybuilding = document.getElementById('bodybuilding-btn');
//Powerlifting
const botao_powerlifting = document.getElementById('powerlifting-btn');
//Calistenia
const botao_calistenia = document.getElementById('calistenia-btn');
//Crossfit
const botao_crossfit = document.getElementById('crossfit-btn');
//Funcional
const botao_funcional = document.getElementById('funcional-btn')
//Artes Marciais 
const botao_artesmarciais = document.getElementById('artesmarciais-btn')


//Seleção
const conteudo = document.getElementById('workoutselection-content');




//Bodybuilding
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

  scrollContent();
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
  const p6 = document.createElement('p');

  const exemplo_power = `
  <section class="treino-4semanas">
    <h2>Semana 1 — Base Técnica + Volume Moderado</h2>

    <h3>Dia 1 — Agacho foco técnico + Supino volume</h3>
    <ul>
      <li>Agacho: 4×5 @ 70%</li>
      <li>Supino: 5×5 @ 70%</li>
      <li>Agacho pausado: 3×3 @ 60%</li>
      <li>Remada curvada: 4×8</li>
      <li>Extensora: 3×12</li>
    </ul>

    <h3>Dia 2 — Terra técnico + Supino variação</h3>
    <ul>
      <li>Terra: 4×4 @ 70%</li>
      <li>Supino pegada média: 4×6 @ 65%</li>
      <li>Terra RDL: 3×6 @ 60%</li>
      <li>Tríceps corda: 4×12</li>
      <li>Elevação lateral: 3×15</li>
    </ul>

    <h3>Dia 3 — Agacho volume + Supino leve</h3>
    <ul>
      <li>Agacho: 5×5 @ 72%</li>
      <li>Supino: 3×5 @ 60%</li>
      <li>Agacho frontal: 3×5 @ 60%</li>
      <li>Barra fixa: 4×6</li>
      <li>Core: 3×12</li>
    </ul>

    <h3>Dia 4 — Terra volume + Supino técnico</h3>
    <ul>
      <li>Terra: 4×5 @ 72%</li>
      <li>Supino técnico: 4×5 @ 65%</li>
      <li>Remada baixa: 4×10</li>
      <li>Bíceps: 3×12</li>
    </ul>

    <h2>Semana 2 — Intensidade Subindo (75–80%)</h2>

    <h3>Dia 1</h3>
    <ul>
      <li>Agacho: 5×4 @ 75%</li>
      <li>Supino: 5×4 @ 75%</li>
    </ul>

    <h3>Dia 2</h3>
    <ul>
      <li>Terra: 4×4 @ 75%</li>
      <li>Supino médio: 4×5 @ 70%</li>
    </ul>

    <h3>Dia 3</h3>
    <ul>
      <li>Agacho: 5×4 @ 77%</li>
      <li>Supino: 3×5 @ 65%</li>
    </ul>

    <h3>Dia 4</h3>
    <ul>
      <li>Terra: 4×5 @ 77%</li>
      <li>Supino técnico: 4×5 @ 68%</li>
    </ul>
    <p><em>Acessórios: mesmos da Semana 1</em></p>

    <h2>Semana 3 — Pico de Estímulo (80–85%)</h2>

    <h3>Dia 1</h3>
    <ul>
      <li>Agacho: 5×3 @ 80–82%</li>
      <li>Supino: 5×3 @ 80%</li>
    </ul>

    <h3>Dia 2</h3>
    <ul>
      <li>Terra: 4×3 @ 80–82%</li>
      <li>Supino médio: 4×4 @ 72–75%</li>
    </ul>

    <h3>Dia 3</h3>
    <ul>
      <li>Agacho: 4×3 @ 82–85%</li>
      <li>Supino leve: 3×5 @ 60%</li>
    </ul>

    <h3>Dia 4</h3>
    <ul>
      <li>Terra: 4×3 @ 82–85%</li>
      <li>Supino técnico: 4×4 @ 70%</li>
    </ul>

    <h2>Semana 4 — Deload Real (50–60%)</h2>

    <h3>Dia 1</h3>
    <ul>
      <li>Agacho: 3×3 @ 55%</li>
      <li>Supino: 3×5 @ 55%</li>
    </ul>

    <h3>Dia 2</h3>
    <ul>
      <li>Terra: 3×3 @ 55%</li>
      <li>Supino médio: 2×5 @ 50%</li>
    </ul>

    <h3>Dia 3</h3>
    <ul>
      <li>Agacho técnico: 3×5 @ 50%</li>
    </ul>

    <h3>Dia 4</h3>
    <ul>
      <li>Supino técnico: 3×5 @ 50%</li>
    </ul>

    <p><em>Acessórios: 6 RPE leve, só o movimento.</em></p>

`;

  p1.innerText = "Powerlifting é o esporte focado em produzir o maior nível de força possível em três movimentos — agachamento, supino e levantamento terra — com máxima eficiência técnica. A ideia é simples: diferente do bodybuilding, que “esculpe” o físico, o powerlifting funciona como preparar um carro de arrancada, onde tudo é voltado para explodir potência em um único momento. O atleta treina para mover a maior carga no menor tempo, com um padrão de movimento consistente, econômico e repetível. Cada centímetro, cada ângulo e cada detalhe da técnica influencia a força final. No powerlifting, você não treina apenas músculos; você treina o sistema nervoso para recrutar fibras mais rápido, coordenar melhor os movimentos e transformar o corpo em uma máquina de força pura.";
  p2.innerText = "A base do treino em powerlifting é o desenvolvimento de força neural, porque força máxima não vem só de músculo, e sim de quão bem o seu sistema nervoso consegue recrutar fibras e coordenar o movimento sob carga. Quanto mais você pratica os três levantamentos com técnica consistente, mais eficiente seu corpo fica em ativar fibras rápidas, reduzir desperdício de energia e estabilizar articulações. Por isso o treino foca em baixas repetições, alta qualidade técnica e progressão planejada de carga. A ideia não é sair destruído, e sim ensinar o corpo a produzir força com precisão cirúrgica.";
  p3.innerText = "Montar treino de powerlifting é sobre organizar os três movimentos principais — agachamento, supino e terra — de forma que você pratique técnica com frequência alta, progrida carga de maneira controlada e mantenha a fadiga sempre sob vigilância. A sessão começa pelos lifts principais, com poucas repetições e foco total na execução, porque força máxima depende de sistema nervoso descansado; depois entram os acessórios para corrigir pontos fracos, reforçar musculaturas específicas e impedir que a técnica colapse sob carga. A progressão deve ser simples, mexendo em um elemento por vez — peso, repetições ou séries — evitando aumentar tudo de uma vez para não afogar o corpo. A fadiga é administrada com ciclos de 3 semanas de subida e 1 semana mais leve, permitindo supercompensação real. A frequência ideal trabalha cada lift de 2 a 4 vezes por semana, porque técnica e força se constroem como idioma: repetição constante. No final, montar treino de powerlifting é afinar um carro de arrancada — tudo gira em torno de ajustar alavancas, potência e consistência para produzir o maior output possível quando importa.";

  divisao_powerlifting_title.innerHTML = "Divisão de treino para Powerlifting";

  p4.innerText = "Dito isso, é importante montar um treino de powerlifting que conserve o máximo o Sistema Nervoso Central e de forma que mantenha a intensidade de acordo com cada grupo muscular e evite o desgaste ligamentar. Cada um dos principais exercícios do Powerlifting possuem demandas diferentes, o agachamento (Squat) possui um desgaste intermediário por pegar quase toda parte inferior do corpo, causando fadiga também na cadeia posterior, atrapalhando no dia de levantamento terra, logo é aconselhavel treina-lo 2x na semana. O supino (Bench), por ser um grupo muscular menor (Peitoral, ombro e tríceps), requer menos tempo de recuperação, sendo viável colocá-lo até 3-4x na semana. E por fim o levantamento terra (Deadlift), que é o exercício de powerlifting mais desgastante, utilizando de toda cadeia posterior do corpo: glúteos, isquiotibiais e erétores da espinha (lombar), além dos dorsais, trapézios e quadríceps, além também de forçar músculos do antebraço, por isso é treinado de 1 até 2 vezes na semana para evitar lesões."
  p5.innerText = "Além de organizar os levantamentos principais, é necessário que os músculos acumulem volume para gerar hipertrofia. Mesmo que o tamanho muscular não seja o único determinante da força, mais massa aumenta o potencial do músculo produzir e desenvolver força. Por isso, é importante incluir no planejamento exercícios acessórios — remadas, barras fixas, trabalhos de tríceps, leg press, entre outros — que adicionam volume e complementam os movimentos principais.";

  title_exemplo_power.innerHTML = "Exemplo de divisão de treino para Powerlifting."

  p6.innerText = "Vale lembrar do uso do deload durante o período de treino, que é quando se reduz a intensidade diminuindo tanto a carga quanto o volume. Também é importante entender a terminologia @ usada nas planilhas de powerlifting, que representa a porcentagem do seu 1RM - O peso no qual você só consegue fazer no máximo uma única repetição, usado para medir sua carga nos treinos.";

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
  conteudo.appendChild(p6);

  conteudo.insertAdjacentHTML("beforeend", exemplo_power);

  scrollContent();
});








//Calistenia 

botao_calistenia.addEventListener('click', () => {

    conteudo.innerHTML = "";

    const title = document.createElement('h1');
    title.innerHTML = "Fundamentos da Calistenia";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const divisao_title = document.createElement('h1');

    const title_iniciante = document.createElement('h2');
    const p_iniciante = document.createElement('p');

    const title_intermediario = document.createElement('h2');
    const p_intermediario = document.createElement('p');

    const title_avancado = document.createElement('h2');
    const p_avancado = document.createElement('p');

   //TextBox
    p1.innerText = "Calistenia é o sistema de treinamento que utiliza o próprio peso corporal como resistência para desenvolver força, controle, mobilidade e coordenação. Em vez de depender de máquinas e anilhas, a calistenia trabalha alavancas, ângulos e tempo sob tensão para aumentar a dificuldade das variações. O objetivo é construir força relativa e controle motor, não apenas tamanho muscular.";

    p2.innerText = "Os padrões fundamentais incluem empurrar, puxar, agachar, sustentar e estabilizar. A partir deles surgem progressões técnicas como muscle up, front lever, back lever, planche e handstand. Cada variação altera a alavanca e a exigência: pernas estendidas aumentam a alavanca, mão mais afastada muda o torque, variações de pegada mudam o padrão de recrutamento.";

    p3.innerText = "A calistenia desenvolve controle neuromuscular e estabilidade articular. Movimentos isométricos e de alavanca exigem adaptação de tendões e estabilizadores; por isso a progressão deve ser gradual e bem planejada. A combinação de habilidade técnica, tempo sob tensão e frequência adequada gera ganhos consistentes.";

    p4.innerText = "A organização do treino deve incluir trabalho de habilidade (skill), força específica e acessórios para compensar assimetrias. Ciclos de 4 a 6 semanas com uma semana de deload são uma abordagem sensata para evitar excesso de carga nos tendões.";

    
    divisao_title.innerHTML = "Divisão de treino para Calistenia";

    title_iniciante.innerHTML = "Nível Iniciante (3x semana - Full Body)";
    p_iniciante.innerText = "Flexões 3x8 a 12; remada australiana 3x8 a 12; agachamento 3x15; prancha 3x30s; barra negativa 3x3. Foco em técnica, controle e consistência.";

    title_intermediario.innerHTML = "Nível Intermediario (Push/Pull/Legs)";
    p_intermediario.innerText = "Push: flexão declinada, dips, pseudo planche push-up. Pull: barra fixa, remada alta, front lever progressão. Legs: pistols progressão, glute bridge. Acrescente trabalho técnico de handstand e progressões de planche.";

    title_avancado.innerHTML = "Nível Avançado (Skills e Força Relativa)";
    p_avancado.innerText = "Push: flexão declinada, dips, pseudo planche push-up. Pull: barra fixa, remada alta, front lever progressão. Legs: pistols progressão, glute bridge. Acrescente trabalho técnico de handstand e progressões de planche.";

    //Sessão de Treino
    const exemplo_calistenia = `
<section class="treino-calistenia">
  <h2>Exemplo de 4 semanas (foco em técnica e progressão)</h2>

  <h3>Semana 1 - Base técnica + volume moderado</h3>
  <h4>Dia A - Força push/habilidade</h4>
  <ul>
    <li>Skill handstand: 10 min de prática (wall walks e holds)</li>
    <li>Pseudo planche push-up : 4 x 6</li>
    <li>Dips: 3 x 6–8</li>
    <li>Flexões inclinadas (controle): 3x10</li>
    <li>Core: L-sit 3x15s</li>
  </ul>

  <h4>Dia B - Força pull / habilidade</h4>
  <ul>
    <li>Barra fixa (controlada): 4x4-6</li>
    <li>Remada australiana variada: 4x8-10</li>
    <li>Front lever tuck hold: 3x10-15s</li>
    <li>Face pulls com elástico: 3x12</li>
  </ul>

  <h4>Dia C - Pernas e core</h4>
  <ul>
    <li>Agachamento corporal: 4x15</li>
    <li>Progressões de pistol: 3x5 cada perna</li>
    <li>Glute bridge: 3x12</li>
    <li>Prancha lateral: 3x30s</li>
  </ul>

  <h3>Semana 2 - Aumentar intensidade nas progressões</h3>
  <p>Suba dificuldade nas progressões (menos assistência, maior tempo de hold).</p>

  <h3>Semana 3 - Pico técnico</h3>
  <p>Foque attempts de skill em situações próximas ao limiar (e.g. attempts de muscle up, planche lean progressado).</p>

  <h3>Semana 4 - Deload e consolidação</h3>
  <p>Reduza volume e intensidade, mantenha técnica e mobilidade.</p>
</section>
`;

  
    conteudo.appendChild(title);
    conteudo.appendChild(p1);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p2);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p3);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p4);
    conteudo.appendChild(qblinha.cloneNode());

    conteudo.appendChild(divisao_title);
    conteudo.appendChild(title_iniciante);
    conteudo.appendChild(p_iniciante);
    conteudo.appendChild(title_intermediario);
    conteudo.appendChild(p_intermediario);
    conteudo.appendChild(title_avancado);
    conteudo.appendChild(p_avancado);


    conteudo.innerHTML += exemplo_calistenia;
});









// Crossfit

botao_crossfit.addEventListener('click', () => {

    conteudo.innerHTML = "";

    const title = document.createElement('h1');
    title.innerHTML = "Fundamentos do Crossfit";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    const divisao_title = document.createElement('h1');
    const p4 = document.createElement('p');

    const title_wod = document.createElement('h2');
    const p_wod = document.createElement('p');

    const title_movimentos = document.createElement('h2');
    const p_movimentos = document.createElement('p');

    // TextBox
p1.innerText = "Crossfit é um método de treinamento de alta intensidade que combina levantamento de peso, ginástica e condicionamento metabólico com o objetivo de desenvolver um corpo forte, resistente, móvel e explosivo. Ele trabalha simultaneamente força, resistência cardiorrespiratória, resistência muscular, potência, velocidade, coordenação, equilíbrio, mobilidade e precisão. A proposta é tornar o atleta capaz de performar bem em qualquer tipo de tarefa física — desde levantar cargas pesadas até realizar movimentos ginásticos avançados.";

p2.innerText = "A estrutura de uma aula costuma ser dividida em três blocos principais: aquecimento, técnica/força e o WOD (Workout of the Day). No aquecimento, o objetivo é preparar o corpo, ativar musculaturas estabilizadoras e melhorar a mobilidade. Na parte técnica, trabalha-se movimentos complexos como agachamentos, levantamentos olímpicos, handstand, toes to bar ou muscle up. Já o WOD é o momento de alta intensidade, onde o atleta executa um treino variável, desafiador e normalmente cronometrado. Essa variação constante impede estagnação e estimula o corpo a evoluir de maneira completa.";

p3.innerText = "O progresso no Crossfit vem de aumentos graduais em carga, repetições, tempo sob tensão, rounds, velocidade ou eficiência técnica. O atleta aprende a movimentar o corpo com maior economia de energia, melhorando sua mecânica e reduzindo desperdícios de movimento. Padrões fundamentais como agachar, puxar, empurrar, correr, saltar, levantar objetos e estabilizar o core servem como base estrutural para habilidades mais avançadas. Mesmo com a variação diária, o desenvolvimento segue uma linha lógica que une força, técnica e condicionamento.";

divisao_title.innerHTML = "Estrutura de treino no Crossfit";

p4.innerText = "A divisão tradicional utilizada por muitos boxes é o modelo 3 ON / 1 OFF, onde o atleta treina três dias seguidos e descansa um. Nesse formato, cada dia possui um foco: força pura, levantamento olímpico, ginástica, metcon longo, metcon curto, endurance ou combinação de elementos. Mesmo com a famosa 'variação constante', boxes bem estruturados seguem microciclos e mesociclos para garantir que o atleta evolua sem entrar em platô ou sofrer sobrecarga excessiva.";

title_wod.innerHTML = "O que é um WOD e por que ele funciona";

p_wod.innerText = "O WOD é o treino principal do dia, podendo assumir formatos como AMRAP (as many rounds as possible), EMOM (every minute on the minute), For Time (concluir no menor tempo possível), por rounds fixos, ou os famosos Chippers — grandes volumes executados de forma contínua. Cada formato estimula sistemas energéticos diferentes, como o aeróbico, anaeróbico lático ou alático. Por isso, o Crossfit melhora simultaneamente resistência, potência, explosão, ritmo e recuperação.";

title_movimentos.innerHTML = "Movimentos mais comuns no Crossfit";

p_movimentos.innerText = "Os movimentos mais utilizados no Crossfit incluem levantamentos olímpicos (snatch, clean and jerk), agachamentos (back squat, front squat, overhead squat), deadlift, push press, thrusters, kettlebell swings, box jumps, wall balls e corridas curtas. Na parte ginástica, são comuns pull-ups, chest to bar, toes to bar, dips, handstand push-up, rope climb e muscle up. Nos condicionamentos, aparecem exercícios como remo, assault bike, burpees, double unders, corrida e circuitos de alta intensidade. Esses movimentos desenvolvem força global, coordenação, mobilidade e condicionamento de forma integrada.";

//Sessão de Treinos
    const section_crossfit = document.createElement("section");
   section_crossfit.innerHTML = `
<h2>Treino Completo — Crossfit(5 DIAS)</h2>

<h3>DIA 1 — Força Técnica (Levantamento Olímpico)</h3>
<h4>Aquecimento (8 min)</h4>
<ul>
  <li>2 min de remo leve</li>
  <li>Mobilidade de ombro e tornozelo — 3 min</li>
  <li>Drills de snatch com PVC — 3 min</li>
</ul>

<h4>Força / Técnica</h4>
<ul>
  <li>Snatch técnico — 8×2 (leve a moderado, foco na forma)</li>
  <li>Overhead squat — 4×3</li>
  <li>Snatch pull — 3×3 (70–80%)</li>
</ul>

<h4>WOD — EMOM 12</h4>
<ul>
  <li>Min 1: 10 Overhead squats leves</li>
  <li>Min 2: 12 burpees</li>
  <li>Min 3: 14 box jumps</li>
</ul>

<h4>Acessório</h4>
<ul>
  <li>Core: 3×20 hollow rocks</li>
</ul>


<h3>DIA 2 — WOD For Time (Condicionamento)</h3>
<h4>Aquecimento (5 min)</h4>
<ul>
  <li>Corrida leve — 400m</li>
  <li>Alongamento dinâmico — 2 min</li>
</ul>

<h4>Força</h4>
<ul>
  <li>Back squat — 5×5 (70–75%)</li>
</ul>

<h4>WOD — For Time</h4>
<ul>
  <li>3 rounds:</li>
  <ul>
    <li>400m corrida</li>
    <li>21 kettlebell swings</li>
    <li>12 pull-ups</li>
  </ul>
</ul>

<h4>Cooldown</h4>
<ul>
  <li>Mobilidade de quadril — 3 min</li>
</ul>


<h3>DIA 3 — Ginástica / Controle Corporal</h3>
<h4>Aquecimento (6 min)</h4>
<ul>
  <li>2 min de pular corda</li>
  <li>Shoulder taps — 2×20</li>
  <li>Mobilidade de punho — 1 min</li>
</ul>

<h4>Skill / Habilidade</h4>
<ul>
  <li>Handstand hold — 10 min de prática</li>
  <li>Muscle-up progressão — 5 sets de attempts</li>
</ul>

<h4>WOD — AMRAP 12</h4>
<ul>
  <li>10 toes-to-bar</li>
  <li>15 sit-ups</li>
  <li>20 air squats</li>
</ul>

<h4>Acessório</h4>
<ul>
  <li>3×12 face pulls (banda)</li>
</ul>


<h3>DIA 4 — Metcon Pesado (Power + Condicionamento)</h3>
<h4>Aquecimento (6 min)</h4>
<ul>
  <li>Bike leve — 2 min</li>
  <li>Mobilidade de quadril e tornozelo — 2 min</li>
  <li>Drills de clean — 2 min</li>
</ul>

<h4>Força / Levantamento</h4>
<ul>
  <li>Clean & Jerk — 5×3 (técnico, subindo leve)</li>
</ul>

<h4>WOD — AMRAP 20</h4>
<ul>
  <li>15 box jumps</li>
  <li>12 burpees</li>
  <li>9 thrusters</li>
  <li>6 kettlebell snatches por lado</li>
</ul>

<h4>Finalização</h4>
<ul>
  <li>Mobilidade torácica — 2 min</li>
</ul>


<h3>DIA 5 — Endurance + Core</h3>
<h4>Aquecimento (5 min)</h4>
<ul>
  <li>Mobilidade leve</li>
</ul>

<h4>WOD — Intervalado</h4>
<ul>
  <li>5 rounds:</li>
  <ul>
    <li>500m remo</li>
    <li>20 sit-ups</li>
    <li>10 push-ups</li>
  </ul>
</ul>

<h4>Core + Estabilidade</h4>
<ul>
  <li>Planchas: 3×1 minuto</li>
  <li>Side plank: 3×30s por lado</li>
</ul>

<h4>Cooldown</h4>
<ul>
  <li>Alongamento geral — 3 min</li>
</ul>
`;

 
    conteudo.appendChild(title);
    conteudo.appendChild(p1);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p2);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p3);

    conteudo.appendChild(divisao_title);
    conteudo.appendChild(p4);

    conteudo.appendChild(title_wod);
    conteudo.appendChild(p_wod);

    conteudo.appendChild(title_movimentos);
    conteudo.appendChild(p_movimentos);


    conteudo.appendChild(section_crossfit);

});











/*Funcional*/

botao_funcional.addEventListener("click", () => {

  conteudo.innerHTML = "";
  const Funcional_title = document.createElement('h1');
  Funcional_title.innerHTML = "Fundamentos do Funcional";

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const divisao_funcional_title = document.createElement('h1');

  p1.innerText = "O treinamento funcional é um tipo de atividade física que tem como objetivo melhorar movimentos naturais do corpo, como correr, agachar, levantar, empurrar, puxar, girar e saltar."
  p2.innerText = "Ou seja, ele treina funções reais do dia a dia, e não apenas músculos isolados."
  p3.innerText = "Esse tipo de treinamento busca desenvolver força, equilíbrio, coordenação, estabilidade do core (músculos do tronco), mobilidade e resistência, tendo como foco tornar o corpo mais eficiente, forte e preparado para qualquer atividade cotidiana ou esportiva."

  divisao_funcional_title.innerText = "Divisão de treino funcional (3x por semana)"

  const exemplo_funcional = `
<section>
   <h2>DIA 1 — Força + Core</h2>

   <h3>Aquecimento (5 min)</h3>
   <ul>
     <li>Corrida leve no lugar — 1 min</li>
     <li>Mobilidade de quadril e ombros — 2 min</li>
     <li>Agachamento leve — 2 min</li>
   </ul>
   <br>

   <h3>Treino Principal</h3>
   <ul>
     <li>1. Agachamento — 3x12</li>
     <li>2. Flexão — 3x8–12</li>
     <li>3. Remada — 3x12</li>
     <li>4. Lunge — 3x10 por perna</li>
     <li>5. Prancha — 3x30–45s</li>
   </ul>
   <br>

   <h3>Finalizador (opcional)</h3>
   <ul>
     <li>20s Mountain Climbers + 20s descanso</li>
   </ul>

   <h2>DIA 2 — Estabilidade + Mobilidade + Core</h2>

   <h3>Aquecimento (3–5 min)</h3>
   <ul>
     <li>Marcha com joelho alto — 1 min</li>
     <li>Mobilidade torácica e quadril — 2 min</li>
   </ul>
   <br>

   <h3>Treino Principal</h3>
   <ul>
     <li>1. Prancha lateral — 3x20–30s por lado</li>
     <li>2. Ponte de glúteo — 3x15</li>
     <li>3. Agachamento unilateral assistido — 3x8 por perna</li>
     <li>4. Bird Dog — 3x10 por lado</li>
     <li>5. Dead Bug — 3x12</li>
   </ul>
   <br>

   <h3>Alongamento final (3 min)</h3>
   <ul>
     <li>Foco em quadril, glúteo e lombar</li>
   </ul>

   <h2>DIA 3 — Condicionamento + Potência</h2>

   <h3>Treino Principal (Circuito)</h3>
   <h3>30s ON / 15s OFF — 3 a 4 voltas</h3>
   <ul>
     <li>1. Burpee</li>
     <li>2. Swing (kettlebell ou mochila)</li>
     <li>3. Jump Squat</li>
     <li>4. Corrida estacionária</li>
     <li>5. Prancha com toque no ombro</li>
   </ul>
   <br>

   <h3>Desaceleração (3 min)</h3>
   <ul>
     <li>Respiração e alongamento leve.</li>
   </ul>
</section>
`;

  conteudo.appendChild(Funcional_title);
  conteudo.appendChild(p1);
  conteudo.appendChild(p2);
  conteudo.appendChild(p3);
  conteudo.appendChild(divisao_funcional_title);
  conteudo.innerHTML += exemplo_funcional;
  scrollContent();
})



function scrollContent() {
  const scrolledelement = document.getElementById('workoutselection-content');
  scrolledelement.scrollTop = 0;
  scrolledelement.scrollIntoView({ behavior: "smooth" });
};











//Artes Marciais 

botao_artesmarciais.addEventListener("click", () => {
    
  conteudo.innerHTML = "";

    const title = document.createElement('h1');
    title.innerHTML = "Fundamentos das Artes Marciais";

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    const divisao_title = document.createElement('h1');
    const p4 = document.createElement('p');

    const title_metodos = document.createElement('h2');
    const p_metodos = document.createElement('p');

    const title_movimentos = document.createElement('h2');
    const p_movimentos = document.createElement('p');

    // TextBox
    p1.innerText = "Artes marciais englobam um conjunto de sistemas e práticas de combate — de striking a grappling — cujo objetivo é desenvolver capacidade técnica, economia de movimento, timing, tomada de decisão sob pressão e resistência física/mental. Ao contrário de treinos puramente físicos, o treinamento marcial integra técnica, tática, leitura do oponente e adaptação. Trabalha-se não só força e potência, mas também precisão, reflexo, postura, equilíbrio e respiração: atributos que permitem executar técnicas complexas com eficiência e minimizar o gasto energético.";

    p2.innerText = "Uma aula típica combina aquecimento, trabalho técnico, drills específicos (repetição com resistência progressiva), pad work/partner drills e rounds de sparring controlado ou randori. O desenvolvimento é sistemático: começa pela mecânica básica (postura, deslocamento, guard, pegada), passa por combinações elementares (ataque/defesa) e evolui para sequência de técnicas aplicadas com resistência progressiva e critérios de tempo, distância e pressão.";

    p3.innerText = "O progresso nas artes marciais depende de três pilares: técnica repetida corretamente (motor learning), condicionamento específico (energia e resistência dos movimentos marcantes) e inteligência de luta (estratégia, leitura e tomada de decisão). Periodizações bem feitas alternam blocos de 4–6 semanas focados em técnica, força explosiva, capacidade anaeróbia e sparring controlado, com semanas de recuperação/integração para consolidar ganhos.";

    divisao_title.innerHTML = "Estrutura de treino para Artes Marciais";
    p4.innerText = "Treinos podem ser organizados por ênfase: Técnica (habilidade), Condicionamento (capacidade física), Força/Prevenção (musculatura e articulações) e Sparring (aplicação). Em academias mistas, uma semana típica combina 2–3 sessões técnicas, 1–2 sessões de condicionamento específico e 1 sessão de sparring/repetição aplicável.";

    title_metodos.innerHTML = "Métodos de treino";
    p_metodos.innerText = "Work drills (repetição dirigida), pad work (precision e potência), partner drills (resistência progressiva), drilling posicional (especialmente em grappling), technical sparring (baixo intensidade implementando técnica) e full sparring (simulação de luta). Complementam: pliometria, treino de resistência localizada, trabalho de core, mobilidade articular e propriocepção.";

    title_movimentos.innerHTML = "Movimentos e habilidades comuns";
    p_movimentos.innerText = "Striking: jab, cross, hooks, uppercuts, low/ high kicks, knees, clinch; Grappling: quedas (takedowns), controle de clinch, passes de guarda, raspagens, finalizações; Defesa: esquivas, bloqueios, controle de distância e manejo de pegadas. Além disso: footwork (movimentação), mudança de nível, timing, cadência e respiração tática.";

   //Sessão de Treinos 
    const section_artesmarciais = document.createElement("section");
    section_artesmarciais.innerHTML = `
<h2>Semana Modelo — Artes Marciais (6 dias)</h2>

<h3>DIA 1 — Técnica de Striking + Mobilidade</h3>
<h4>Aquecimento (8–10 min)</h4>
<ul>
  <li>Corrida leve / pular corda — 3 min</li>
  <li>Mobilidade dinâmica (quadril, ombro, tornozelo) — 3 min</li>
  <li>Shadowboxing leve — 2 min, foco deslocamento</li>
</ul>

<h4>Técnica</h4>
<ul>
  <li>Fundamentos de mão: Jab + cross + footwork — 6×3 movimentos</li>
  <li>Combinações curtas no shadow e corrigir guard — 6×3</li>
  <li>Defesa: slip, roll e block drills — 4×5 cada</li>
</ul>

<h4>Pad work (par parceiro ou treinador)</h4>
<ul>
  <li>5 rounds x 2 min: combinações técnicas (ritmo controlado)</li>
</ul>

<h4>Força & Prevenção (acessório)</h4>
<ul>
  <li>Core: 3×30s hollow hold</li>
  <li>Fortalecimento de ombro com banda: 3×12</li>
</ul>



<h3>DIA 2 — Grappling (queda e controle) + Condicionamento específico</h3>
<h4>Aquecimento (8 min)</h4>
<ul>
  <li>Rolamentos e deslocamentos no solo — 4 min</li>
  <li>Mobilidade de quadril — 4 min</li>
</ul>

<h4>Tecnica</h4>
<ul>
  <li>Takedown drills (single/double leg progressão) — 5×4</li>
  <li>Posições de controle (top pressure): manter e transitar — 6×2</li>
  <li>Passagem de guarda — 5×3</li>
</ul>

<h4>Drills com resistência progressiva</h4>
<ul>
  <li>5 sets: 30s controlar + 30s recuperar (enfatizar postura)</li>
</ul>

<h4>Condicionamento</h4>
<ul>
  <li>Circuito: 4 rounds — 10 takedown shots, 10 burpees, 20 sit-ups (tempo moderado)</li>
</ul>



<h3>DIA 3 — Sparring técnico + análise (intensidade controlada)</h3>
<h4>Aquecimento e preparação mental</h4>
<ul>
  <li>Respiração, visualização e mobilidade leve — 5 min</li>
</ul>

<h4>Sparring técnico</h4>
<ul>
  <li>6×3 min rounds: foco em objetivo técnico (ex.: jogar jab e sair; cortar distância)</li>
  <li>Feedback entre rounds — 1 min</li>
</ul>

<h4>Drill de situação</h4>
<ul>
  <li>10 minutos: escapes e recoveries (posições de perigo)</li>
</ul>



<h3>DIA 4 — Força Explosiva e Potência para Luta</h3>
<h4>Aquecimento (6 min)</h4>
<ul>
  <li>Pular corda e mobilidade — 4 min</li>
</ul>

<h4>Força / Potência</h4>
<ul>
  <li>Hang power clean ou kettlebell swing — 5×3</li>
  <li>Pliometria: 3×8 box jumps</li>
  <li>Agachamento unilateral (Pistol progressão) — 3×6 por perna</li>
</ul>

<h4>Complemento</h4>
<ul>
  <li>Farmer carries ou loaded carries — 3×30–40m</li>
  <li>Neck work (prevenção de impactos) leve — 3×12</li>
</ul>



<h3>DIA 5 — Combinações Avançadas e Clinch / Trabalho de Perna</h3>
<h4>Aquecimento técnico (5 min)</h4>

<h4>Técnica</h4>
<ul>
  <li>Sequências striking-to-takedown: drillar transição — 6×3</li>
  <li>Clinch work: posição, control, knees — 6×2</li>
  <li>Leg conditioning: kicks controlados e recepção — 5×5 por perna</li>
</ul>

<h4>Pad rounds / Partner rounds</h4>
<ul>
  <li>6×2 min combinando striking e entradas de queda</li>
</ul>



<h3>DIA 6 — Endurance Marcial + Sparring livre (opcional)</h3>
<h4>Condicionamento marcial</h4>
<ul>
  <li>Intervalado: 6–8 rounds 30s on / 30s off — alternar sacos, remada, sprint leve</li>
</ul>

<h4>Sparring livre (controlado)</h4>
<ul>
  <li>4–6 rounds com intensidade progressiva, monitorar fadiga e técnica</li>
</ul>

<h4>Recuperação ativa</h4>
<ul>
  <li>Rolo miofascial, alongamento e respiração — 10 min</li>
</ul>



<h3>Recomendações gerais</h3>
<ul>
  <li>Periodize: blocos de 4–6 semanas com foco alternado (técnica, potência, resistência, sparring).</li>
  <li>Priorize sono, nutrição e trabalho de mobilidade para prevenir lesões.</li>
  <li>Use sparring técnico para testar técnica e sparring livre com moderação — recuperação é tão importante quanto exposição.</li>
</ul>
`;

   
    conteudo.appendChild(title);
    conteudo.appendChild(p1);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p2);
    conteudo.appendChild(qblinha.cloneNode());
    conteudo.appendChild(p3);

    conteudo.appendChild(divisao_title);
    conteudo.appendChild(p4);

    conteudo.appendChild(title_metodos);
    conteudo.appendChild(p_metodos);

    conteudo.appendChild(title_movimentos);
    conteudo.appendChild(p_movimentos);

   
    conteudo.appendChild(section_artesmarciais);

    
});

