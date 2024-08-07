import { CreateHistoryClass } from './classes.js';

// Configurando Histórias
new CreateHistoryClass({
    id: 0,
    history: 'Uma pequena observação: nenhuma informação é salva no sistema, então não se preocupe com suas decisões!',
    autoskip: 1,
});

new CreateHistoryClass({
    id: 1,
    history: 'Vamos começar...',
    autoskip: 2,
});

new CreateHistoryClass({
    id: 2,
    history: 'Dia 12 de setembro de 2004 nasce uma linda criança chamada G{fullNome}.',

    buttons: [{
        question: 'Continuar ➤',
        to: 3,
    }],
});

new CreateHistoryClass({
    id: 3,
    history: 'G{nome} veio de uma família simpática, tendo em seu coração o sonho de trabalhar na área:',

    buttons: [
        {
            question: 'Do campo',
            to: 4,
            ref: 'true', 
            reply: 'G{nome} desde a infância gostava do campo e, em sua primeira oportunidade, resolve plantar soja.',
        },
        {
            question: 'Da cidade',
            to: 19,
            ref: 'false',
            reply: 'G{nome} nasceu em uma pequena cidade e desde a sua infância tinha curiosidades sobre a área da robótica.G{space}Com o tempo, ganhou um trator de seus pais e quis transformá-lo em uma colheitadeira.',
        },
    ],
});

// Vida no Campo - id: 4
new CreateHistoryClass({
    id: 4,
    history: 'Vendo sua família diariamente cuidando da roça, G{nome} cresceu amando o campo com orgulho.',
    title: 'A Relação da Tecnologia no Campo',

    buttons: [{
        question: 'Continuar ➤',
        to: 5,
    }],
});

new CreateHistoryClass({
    id: 5,
    history: 'Passado um tempo, G{nome} cresceu e começou o seu primeiro trabalho no campo: plantio de soja.',

    buttons: [{
        question: 'Continuar ➤',
        to: 6,
    }],
});

new CreateHistoryClass({
    id: 6,
    history: 'Na hora de irrigar a soja, teve uma dúvida de quais equipamentos usar:',

    buttons: [
        {
            question: 'Uma mangueira - para evitar gastos',
            ref: 'true', 
            reply: 'Para irrigar a soja, G{nome} preferiu usar uma mangueira, no qual teve excesso de esforço e criou algumas plantas irregulares. Mas isso não desanimou.',
            to: 7,
        },
        {
            question: 'Um irrigador automático - para evitar esforços',
            ref: 'false', 
            reply: 'Para irrigar a soja, G{nome} preferiu usar um irrigador automático que ajudou a criar plantas bonitas e evitou excesso de esforço, apesar de ter investido dinheiro.',
            to: 8,
        }
    ],
});

new CreateHistoryClass({
    id: 7,
    history: 'G{nome} se esforça em irrigar a plantação periodicamente, vendo seu crescimento um pouco irregular mas belo!',

    buttons: [{
        question: 'Continuar ➤',
        to: 9,
    }],
});

new CreateHistoryClass({
    id: 8,
    history: 'Apesar de ter investido um pouco de dinheiro, G{nome} automatiza a irrigação da plantação e vê o crescimento regular e belo sem fazer muito esforço!',

    buttons: [{
        question: 'Continuar ➤',
        to: 9,
    }],
});

new CreateHistoryClass({
    id: 9,
    history: 'Chegada a hora da colheita, G{nome} pega a colheitadeira de seu pai que, pela quantidade de colheitas já feita, está em péssimas condições.',

    buttons: [{
        question: 'Continuar ➤',
        to: 10,
    }],
});

new CreateHistoryClass({
    id: 10,
    history: 'Um grande amigo de G{nome} vê sua situação e faz uma proposta de parceria onde emprestaria uma colheitadeira em troca de 15% do plantio colhido.',

    buttons: [
        {
            question: 'Aceitar a troca - evitar dor de cabeça',
            ref: 'true', 
            reply: 'Chegada a colheita, G{nome} preferiu colher a plantação com a colheitadeira de seu amigo, dando 15% da colheita como recompensa pela parceria.',
            to: 11,
        },
        {
            question: 'Recusar a proposta - evitar perda desnecessária da plantação',
            ref: 'false', 
            reply: 'Chegada a colheita, G{nome} preferiu colher a plantação com a colheitadeira antiga de seu pai, que deu problemas no percurso e atrasou a colheita, mas felizmente conseguiu colher 100% da soja.',
            to: 12,
        }    
    ],
});

new CreateHistoryClass({
    id: 11,
    history: 'G{nome} aceita a proposta e, em pouco tempo, colhe toda a plantação, separando a quantidade prometida ao seu amigo.',

    buttons: [{
        question: 'Continuar ➤',
        to: 15,
    }],
});

new CreateHistoryClass({
    id: 12,
    history: 'G{nome} recusa gentilmente a proposta do amigo e, durante a colheita, a máquina de seu pai para de funcionar.',

    buttons: [{
        question: 'Continuar ➤',
        to: 13,
    }],
});

new CreateHistoryClass({
    id: 13,
    history: 'Depois de várias horas no Sol tentando consertar a máquina com seu pai, ela volta a funcionar!',

    buttons: [{
        question: 'Continuar ➤',
        to: 14,
    }],
});

new CreateHistoryClass({
    id: 14,
    history: 'Mas como já é tarde, G{nome} decide concluir no dia seguinte. Mas feliz por ter 100% do proveito da colheita.',

    buttons: [{
        question: 'Continuar ➤',
        to: 15,
    }],
});

new CreateHistoryClass({
    id: 15,
    history: 'No caminho para vender sua soja, G{nome} reflete sobre suas decisões e tem a conclusão de que:',

    buttons: [
        {
            question: 'Usar mangueira aparenta ser a melhor solução',
            ref: 'true', 
            reply: 'No caminho para vender a soja, G{nome} refletiu e concluiu que usar uma mangueira para irrigar a plantação foi uma boa ideia, apesar do trabalho excessivo e crescimento irregular que causa.',
            to: 16,
        },
        {
            question: 'Usar irrigador automático aparenta ser a melhor solução',
            ref: 'false', 
            reply: 'No caminho para vender a soja, G{nome} refletiu e concluiu que usar um irrigador automático para irrigar a plantação foi uma boa ideia, já que não exige muito esforço e garante o crescimento regular da soja.',
            to: 16,
        },
    ],
});

new CreateHistoryClass({
    id: 16,
    history: 'Também conclui que:',

    buttons: [
        {
            question: 'Parcerias não são boas opções, pois pegam parte dos seus plantios',
            ref: 'true', 
            reply: 'Também concluiu que ter parcerias não são boas ideias, pois sempre querem tirar proveito de seu esforço...',
            to: 17,
        },
        {
            question: 'Parcerias são boas opções, pois há a ajuda mútua',
            ref: 'false',
            reply: 'Também concluiu que ter parcerias sinceras servem como ajuda que fortalecem o crescimento socioeconômico de ambos!',
            to: 17,
        },
    ],
});

new CreateHistoryClass({
    id: 17,
    history: 'Chegando na empresa onde G{nome} venderá a soja, vê que aquele seu antigo amigo é dono dela. Vendo isso, ele oferece um contrato de parceria rural com duração de três anos com a empresa dele.',

    buttons: [{
        question: 'Continuar ➤',
        to: 18,
    }],
});

new CreateHistoryClass({
    id: 18,
    history: 'A empresa propõe o empréstimo de colheitadeiras modernas em troca de um menor preço pela soja e a venda exclusiva para a empresa dele.',

    buttons: [
        {
            question: 'Recusar a proposta - querem muito em troca de pouco',
            to: 100,
            ref: 'true', 
            reply: 'Ao chegar na empresa onde irá vender a soja, viu que seu antigo amigo é dono. Ele ofereceu uma proposta, mas G{nome} recusou o contrato de parceria oferecido, pois considerou ser uma prática muito abusiva da empresa dele, onde disponibilizava muita soja em troca de poucos recursos da empresa.G{space}Após isso, começa a cultivar mais soja seguindo o mesmo método de plantio que considerou o mais útil e, aos poucos, foi vendendo para diversas empresas.G{space}Com o passar dos anos, G{nome} finalmente compra uma nova colheitadeira, que demorou um pouco para ser comprada por conta dos frequentes reparos à antiga máquina de seu pai. G{space}E finalmente segue sua carreira sendo uma pessoa conservadora, recusando palpites alheios e tendo uma vida tranquila no campo com sua família como sempre sonhou.',
        },
        {
            question: 'Aceitar a proposta - o contrato parece interessante',
            to: 102,
            ref: 'false', 
            reply: 'Ao chegar na empresa onde irá vender a soja, G{nome} viu que seu antigo amigo é dono. Ele ofereceu um contrato de parceria e G{nome} aceitou rapidamente, pois viu que seria uma grande oportunidade para seu futuro.G{space}Feliz por ter novas máquinas pelo contrato, G{nome} cultiva mais sojas e as colhe seguindo o mesmo método de plantio que achou interessante.G{space}Economizando o dinheiro, G{nome} abre uma empresa e contrata novos agricultores para operar algumas das colheitadeiras também oferecidas pelo contrato.G{space}Com o passar dos anos, com o fim do contrato, G{nome} abre novas parcerias com outras empresas que impulsionam sua carreira no campo, que consegue mais terras, trabalhadores e diferentes tipos de plantações.G{space}G{nome} consegue uma vida rica no campo, assim como era em seu sonho de infância.',
        },
    ],
});

new CreateHistoryClass({
    id: 100,
    history: 'G{nome} recusa a proposta da empresa do amigo e começa a cultivar mais soja seguindo o mesmo método de plantio. Aos poucos foi vendendo para diversas empresas.',

    buttons: [{
        question: 'Continuar ➤',
        to: 101,
    }],
});

new CreateHistoryClass({
    id: 101,
    history: 'Com o passar dos anos, G{nome} finalmente compra uma nova colheitadeira dessa mesma empresa - que demorou um pouco para comprar por conta dos frequentes reparos à antiga máquina de seu pai.',

    buttons: [{
        question: 'Finalizar ➤',
    }],
});

new CreateHistoryClass({
    id: 102,
    history: 'G{nome} aceita a proposta da empresa do amigo e, feliz por ter novas máquinas, cultiva mais soja e as colhe seguindo o mesmo método de plantio que achou interessante.',

    buttons: [{
        question: 'Continuar ➤',
        to: 103,
    }],
});

new CreateHistoryClass({
    id: 103,
    history: 'Economizando o dinheiro, G{nome} contrata novos agricultores para que operem algumas colheitadeiras já que a empresa oferecia várias delas.',

    buttons: [{
        question: 'Finalizar ➤',
    }],
});

// Vida na cidade - id: 19
new CreateHistoryClass({
    id: 19,
    history: 'Desde menor, G{nome} mostrou ser diferente dos demais, pois achava assuntos relacionados à robótica muito interessantes.',
    title: 'A Relação da Tecnologia na Cidade',

    buttons: [{
        question: 'Continuar ➤',
        to: 20,
    }],
});

new CreateHistoryClass({
    id: 20,
    history: 'Anos se passam e seus pais decidem dar um pequeno trator que ganharam do Sistema Faep.',

    buttons: [{
        question: 'Continuar ➤',
        to: 21,
    }],
});

new CreateHistoryClass({
    id: 21,
    history: 'G{nome}, usando seu conhecimento de robótica, resolve fazer algumas personalizações para tornar o pequeno trator em uma sofisticada colheitadeira.',

    buttons: [{
        question: 'Continuar ➤',
        to: 22,
    }],
});

new CreateHistoryClass({
    id: 22,
    history: 'G{nome} tinha algumas peças guardadas, porém muito desgastadas. Então, para montar a colheitadeira, resolve:',

    buttons: [
        {
            question: 'Comprar peças novas - evitar que as antigas quebrem',
            to: 23,
            ref: 'true',
            reply: 'Então, usando um dinheiro que tinha guardado, G{nome} comprou as novas peças sem arrependimento, pois tinha muito carinho com seu trabalho, e faz tudo funcionar perfeitamente!',
        },
        {
            question: 'Usar peças atuais - Evitar gastos',
            to: 24,
            ref: 'false',
            reply: 'Então, G{nome} tentou montá-lo usando as peças velhas que tinha, mas sem sucesso, pois as peças quebraram... Então foi obrigado a usar seu dinheiro guardado para comprar novas peças e montar sua colheitadeira, que com um pouco de esforço fez funcionar!'
        }
    ],
});

new CreateHistoryClass({
    id: 23,
    history: 'G{nome} decide comprar novas peças com toda a mesada que tinha e monta perfeitamente a nova colheitadeira!',

    buttons: [{
        question: 'Continuar ➤',
        to: 28,
    }],
});

new CreateHistoryClass({
    id: 24,
    history: 'G{nome} decide usar as peças ruins que tinha em casa e monta a nova colheitadeira.',

    buttons: [{
        question: 'Continuar ➤',
        to: 25,
    }],
});

new CreateHistoryClass({
    id: 25,
    history: 'Mas, na hora de ligar a máquina, a maioria das peças se quebram...',

    buttons: [{
        question: 'Continuar ➤',
        to: 26,
    }],
});

new CreateHistoryClass({
    id: 26,
    history: 'Triste, G{nome} resolve comprar novas peças com o dinheiro da mesada que tinha e tenta novamente montar a colheitadeira, mostrando ser uma pessoa esforçada.',

    buttons: [{
        question: 'Continuar ➤',
        to: 27,
    }],
});

new CreateHistoryClass({
    id: 27,
    history: 'Para a surpresa de G{nome}, finalmente tudo funciona!',

    buttons: [{
        question: 'Continuar ➤',
        to: 28,
    }],
});

new CreateHistoryClass({
    id: 28,
    history: 'Com isso, G{nome} fica muito contente pela nova conquista e mostra para todos os seus amigos.',

    buttons: [{
        question: 'Continuar ➤',
        to: 29,
    }],
});

new CreateHistoryClass({
    id: 29,
    history: 'Vendo isso, um amigo precisava da ajuda de G{nome}, pois a colheitadeira do pai dele estava em péssimas condições.',

    buttons: [{
        question: 'Continuar ➤',
        to: 30,
    }],
});

new CreateHistoryClass({
    id: 30,
    history: 'Ele ofereceu 15% da plantação de soja dele em troca da colheitadeira de G{nome} emprestada.',

    buttons: [
        {
            question: 'Aceitar proposta - receber plantação',
            to: 31,
            ref: 'true',
            reply: 'Após mostrar para todos seus amigos, G{nome} aceitou a proposta de um amigo que ofereceu 15% dos plantios em troca da colheitadeira personalizada emprestada.G{space} Isso ajudou o amigo e fez G{nome} recuperar o dinheiro investido nas peças da máquina para melhorá-la e vendê-la por um preço melhor.'
        },
        {
            question: 'Recusar proposta - podem estragar a máquina',
            to: 34,
            ref: 'false',
            reply: 'Após mostrar para todos seus amigos, um amigo ofereceu 15% das colheitas dele em troca da máquina emprestada. Porém, a proposta foi recusada, pois G{nome} ficou com receio de que estragassem sua colheitadeira.'
        },
    ],
});

new CreateHistoryClass({
    id: 31,
    history: 'G{nome} empresta a colheitadeira ao amigo, que consegue colher todas as plantações e devolve os 15% do plantio.',

    buttons: [{
        question: 'Continuar ➤',
        to: 32,
    }],
});

new CreateHistoryClass({
    id: 32,
    history: 'Com a soja adquirida, G{nome} a vende para recuperar o dinheiro da mesada para fazer novas melhorias na máquina e vendê-la futuramente por um melhor preço.',

    buttons: [{
        question: 'Continuar ➤',
        to: 33,
    }],
});

new CreateHistoryClass({
    id: 33,
    history: 'Em pouco tempo, G{nome} consegue vender a máquina agrícola por um ótimo preço, já que ela parecia muito chamativa e bonita.',

    buttons: [{
        question: 'Continuar ➤',
        to: 36,
    }],
});

new CreateHistoryClass({
    id: 34,
    history: 'G{nome} prefere evitar que quebrem sua obra de arte e acaba por não emprestar a colheitadeira que criou, já que pretende vendê-la futuramente.',

    buttons: [{
        question: 'Continuar ➤',
        to: 35,
    }],
});

new CreateHistoryClass({
    id: 35,
    history: 'Um longo tempo passou e, com a ajuda dos pais, G{nome} finalmente consegue vender a máquina agrícola.',

    buttons: [{
        question: 'Continuar ➤',
        to: 36,
    }],
});

new CreateHistoryClass({
    id: 36,
    history: 'Para conseguir mais dinheiro, G{nome} segue um pensamento:',

    buttons: [
        {
            question: 'Comprar colheitadeiras e vendê-las mais caro',
            to: 37,
            ref: 'true',
            reply: 'Para conseguir mais dinheiro, G{nome} resolveu comprar mais colheitadeiras para revendê-las mais caro, apesar da demora, pois os compradores preferiram comprar de lugares mais barato.G{space}Entretanto, com o tempo G{nome} conseguiu repetir mais vezes essas compras e vendas de colheitadeiras.'
        },
        {
            question: 'Comprar tratores e personalizá-los',
            to: 39,
            ref: 'false',
            reply: 'Para conseguir mais dinheiro, G{nome} resolveu comprar tratores e personalizá-los para ter lucro mesmo revendendo abaixo do valor de uma colheitadeira normal.G{space}Essa ideia foi tão boa que rapidamente vendeu a máquina, fazendo G{nome} repetir várias vezes essas compras, personalizações e vendas.'
        },
    ],
});

new CreateHistoryClass({
    id: 37,
    history: 'G{nome} junta um pouco mais de dinheiro trabalhando com os pais e compra uma nova colheitadeira para vendê-la por um preço melhor.',

    buttons: [{
        question: 'Continuar ➤',
        to: 38,
    }],
}); 

new CreateHistoryClass({
    id: 38,
    history: 'Apesar de parecer uma boa prática, G{nome} demora um pouco para conseguir vender, já que os compradores preferem comprar de lugares mais barato.',

    buttons: [{
        question: 'Continuar ➤',
        to: 41,
    }],
});

new CreateHistoryClass({
    id: 39,
    history: 'G{nome} compra um novo trator e começa a personalizá-lo de acordo o que considerava mais eficiente.',

    buttons: [{
        question: 'Continuar ➤',
        to: 40,
    }],
});

new CreateHistoryClass({
    id: 40,
    history: 'Com essa prática, G{nome} consegue vender abaixo do preço normal de uma colheitadeira e com mais eficiência.',

    buttons: [{
        question: 'Continuar ➤',
        to: 41,
    }],
});

new CreateHistoryClass({
    id: 41,
    history: 'No fim, essa prática é repetida e as coisas melhoram, já que os compradores começam a reconhecer G{nome}!',

    buttons: [{
        question: 'Continuar ➤',
        to: 42,
    }],
});

new CreateHistoryClass({
    id: 42,
    history: 'Por incentivo dos pais, G{nome} abre uma empresa para vender suas máquinas personalizadas.',

    buttons: [{
        question: 'Continuar ➤',
        to: 43,
    }],
});

new CreateHistoryClass({
    id: 43,
    history: 'E aquele amigo que pediu sua primeira máquina emprestada entra em contato oferecendo um contrato de parceria com duração de 3 anos.',

    buttons: [{
        question: 'Continuar ➤',
        to: 44,
    }],
});

new CreateHistoryClass({
    id: 44,
    history: 'No contrato, G{nome} emprestaria colheitadeiras em troca das sojas do amigo por um menor preço, tendo também a venda exclusiva delas para a sua empresa.',

    buttons: [
        {
            question: 'Aceitar parceria - ter planos para a soja',
            to: 45,
            ref: 'true',
            reply: 'Por incentivo dos pais, G{nome} abriu uma empresa para continuar seu grande trabalho com as colheitadeiras. E, entre as vendas, G{nome} aceitou fazer uma parceria com aquele antigo amigo, pois teve ideias de revender a soja dele por um preço abaixo do mercado.G{space}Isso manteve uma margem de lucro para comprar e vender tranquilamente novas colheitadeiras, criando assim um parceiro fixo caso as vendas na empresa compliquem.G{space}Em pouco tempo G{nome} conseguiu fama, expandindo seu trabalho contratando mais funcionários e comprando várias máquinas de uma só vez.G{space}Por conta dessa decisão, G{nome} fez grandes parcerias já que experimentou isso no passado, fortalecendo relações entre o campo e cidade e tendo seu grande sonho de infância realizado.'
        },
        {
            question: 'Recusar parceria - só trabalhar com máquinas',
            to: 47,
            ref: 'false',
            reply: 'Por incentivo dos pais, G{nome} abriu uma empresa para continuar seu grande trabalho com as colheitadeiras. E, entre as vendas, o antigo amigo de G{nome} novamente apareceu com uma proposta de parceria, porém G{nome} gentilmente recusou, pois trabalhava somente com colheitadeiras.G{space}Apesar de perder uma chance de parceria, G{nome} não desanimou e continuou vendendo suas máquinas agrícolas.G{space}Com o passar dos anos, G{nome} foi crescendo de forma independente no seu próprio ritmo, vivendo o sonho que tanto queria quando menor.'
        },
    ],
});

new CreateHistoryClass({
    id: 45,
    history: 'G{nome} aceita a oferta já que tem várias máquinas agrícolas, expandindo seu negócio para a venda de soja também, podendo revender a soja abaixo do preço do mercado mantendo uma margem de lucro!',

    buttons: [{
        question: 'Continuar ➤',
        to: 46,
    }],
});

new CreateHistoryClass({
    id: 46,
    history: 'No último dia do contrato o amigo de G{nome} compra várias máquinas da empresa, deixando ambos felizes pela parceria que fizeram durante os anos.',

    buttons: [{
        question: 'Finalizar ➤',
    }],
});

new CreateHistoryClass({
    id: 47,
    history: 'G{nome} recusa gentilmente a oferta do amigo já que trabalha apenas com máquinas, não vendo vantagens no momento em optar por outras áreas.',

    buttons: [{
        question: 'Finalizar ➤',
    }],
});