// Buscar elementos
const buttons = document.querySelectorAll('.button__percurso');
const div = document.querySelector('.div__curiosidade');
const historyButton = document.querySelector('.button__history--iniciar');

// Configurar url dos botões
const buttonLinks = {
    arroz: 'https://planetaarroz.com.br/guia-agrodados-planeta-arroz-de-tipos-de-arroz-no-brasil/',
    feijao: 'https://www.agrolink.com.br/colunistas/coluna/producao-e-suprimento-mundial-de-feijao_386836.html#:~:text=No%20Mundo%2C%20h%C3%A1%20mais%20de%2040%20mil%20variedades%20(esp%C3%A9cies)%20de%20feij%C3%A3o%2C%20mas%20apenas%20pequena%20parte%20%C3%A9%20comest%C3%ADvel.',
    'oleo-de-soja': 'https://summitagro.estadao.com.br/web-stories/o-soja-ou-a-soja/',
    'carne-de-frango': 'https://higienealimentar.com.br/no-dia-mundial-do-frango-celebramos-a-carne-mais-consumida-do-brasil/#:~:text=A%20carne%20de%20frango%20%C3%A9%20a%20mais%20consumida%20pelos%20brasileiros%2C%20presente%20em%2094%25%20dos%20lares',
    'carne-bovina': 'https://www.band.uol.com.br/entretenimento/masterchef/noticias/carnes--entenda-a-diferenca-entre-picanha-maminha-file-mignon-e-mais-16305055',
    'carne-suina': 'https://www.agrimidia.com.br/agronegocio/a-historia-do-porco/#:~:text=confinamento%20de%20galinhas-,1b)%20A%20Domestica%C3%A7%C3%A3o,-Os%20mais%20antigos',
    leite: 'https://www.tetrapak.com/pt-br/insights/food-categories/dairy/uht-faq#:~:text=O%20que%20%C3%A9%20leite%20longa%20vida%20e%20em%20que%20ele%20difere%20do%20%22leite%20fresco%22%20e%20do%20leite%20cru%3F',
    couro: 'https://www.afe.com.br/artigos/couro-de-peixe-conheca-uma-maneira-de-expandir-sua-renda',
    ovo: 'https://blog.mantiqueirabrasil.com.br/ovo-na-geladeira/#:~:text=Nas%20geladeiras%20dom%C3%A9sticas%2C%20o%20indicado%20%C3%A9%20que%20eles%20fiquem%20em%20uma%20temperatura%20m%C3%A9dia%20de%2010%E2%80%AF%C2%B0C.%C2%A0',
};

buttons.forEach((button) => button.onclick = clickButton);
const buttonArray = Object.keys(buttonLinks);

function clickButton(button) {
    const buttonIndex = Number(button.currentTarget.classList[3].replace('button-', ''));

    button.currentTarget.classList.add('button__percurso--click');
    document.body.style.opacity = 0;
    
    setTimeout(() => window.open(`./percurso/${buttonArray[buttonIndex]}.html`, '_self'), 1000);
};

// Configurar url das curiosidades
if (div) div.onclick = openLink;

function openLink(button) {
    // const currentPage = window.location.pathname.replace('/percurso/', '');
    // const currentPage = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1).replace('.html', '');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    window.open(buttonLinks[currentPage]);
}

if (historyButton) historyButton.onclick = () => window.open('history.html', '_self');