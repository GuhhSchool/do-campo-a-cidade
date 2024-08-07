// Buscar elementos
const historyButton = document.querySelector('.button__history--iniciar');
const buttons = document.querySelectorAll('.button__percurso');
const div = document.querySelector('.div__curiosidade');
const bodyIndex = document.getElementById('body__index');
const curiosityElement = document.querySelector('.a__item');
const curiosityTitleElement = document.querySelector('.h3__curiosity--title');

// Configurar url dos botões
const buttonArray = ['arroz', 'feijao', 'oleo-de-soja', 'carne-de-frango', 'carne-bovina', 'carne-suina', 'leite', 'couro', 'ovo'];


// Registrar evento de cliques de "percurso dos produtos"
buttons.forEach((button) => button.onclick = clickButton);

// Evento de clique nos botões de "percurso dos produtos"
function clickButton(button) {
    const buttonIndex = Number(button.currentTarget.classList[3].replace('button-', ''));

    button.currentTarget.classList.add('button__percurso--click');
    document.body.style.opacity = 0;
    
    setTimeout(() => window.open(`./percurso/${buttonArray[buttonIndex]}.html`, '_self'), 1000);
};

// Efeito ao passar mouse nas curiosidades
if (div) {
    curiosityElement.addEventListener('mouseover', () => curiosityTitleElement.classList.add('link'));
    curiosityElement.addEventListener('mouseout', () => curiosityTitleElement.classList.remove('link'));
}

function openLink(button) {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    window.open(buttonLinks[currentPage]);
}

// Se clicar no botão de iniciar história
if (historyButton) historyButton.onclick = () => {
    document.body.style.opacity = 0;
    setTimeout(() => window.open('historia.html', '_self'), 1000);
}

// Configurando efeito de fade in nas sessões
if (bodyIndex) {
    const sectionOportunidades = document.querySelector('.section__oportunidades');
    const sectionAgronegocio = [document.querySelector('.p__2023--pre-1'), document.querySelector('.p__2023--pre-2')];
    const windowLimit = window.innerHeight;
    bodyIndex.onscroll = verifyPosition;

    // Verifica se a posição da sessão está visível na tela
    let disabled = false;
    function verifyPosition() {
        // Sessão "oportunidades"
        if (!disabled && sectionOportunidades.getBoundingClientRect().y <= (windowLimit / 2)) startOportunidadesAnimation();
        
        // Sessão "Agronegócio"
        sectionAgronegocio.forEach((element, index) => {
            if (element.getBoundingClientRect().y <= (windowLimit / 1.5)) startAgronegocioAnimation(index);
        })
    }

    // Inicia a animação da sessão "oportunidades"
    async function startOportunidadesAnimation() {
        disabled = true;

        const delay = (ms) => new Promise(res => setTimeout(res, ms));
        const firstParag = document.querySelector('.p__oportunidades--1-pre');
        const secondParag = document.querySelector('.p__oportunidades--2-pre');
        const thirdParag = document.querySelector('.p__oportunidades--3-pre');
        const fourthParag = document.querySelector('.p__oportunidades--4-pre');

        firstParag.classList.remove('p__oportunidades--1-pre');
        await delay(500);
        secondParag.classList.remove('p__oportunidades--2-pre');
        await delay(500);
        thirdParag.classList.remove('p__oportunidades--3-pre');
        await delay(250);
        fourthParag.classList.remove('p__oportunidades--4-pre');
    }

    // Inicia as animações da sessão "agronegócio"
    function startAgronegocioAnimation(index) {
        sectionAgronegocio[index].classList.remove(`p__2023--pre-${index + 1}`);
        if (index == 1) bodyIndex.onscroll = null;
    }
} 