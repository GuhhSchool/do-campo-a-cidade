import { ShowHistoryClass } from './classes.js';

// Buscando elementos
const mainBoxElement = document.querySelector('.div--main');
const mainBoxAnimElement = document.querySelector('.div--anim-background');
const textHistoryElement = document.querySelector('.p--text');
const divInputElement = document.querySelector('.div--input');
const inputElement = document.querySelector('.input--name');
const startButtonElement = document.querySelector('.button--send');
const buttonRetry = document.querySelector('.button--retry');
const buttonShare = document.querySelector('.button--share');

// Variáveis usadas no projeto
let username = '';

// Função principal para começar a história 
onload();
async function onload() {
    const { ShowHistoryClass } = await import('./classes.js');

    // Mostrando resultado ou apenas começando a história
    if (window.location.href.includes('?')) new ShowHistoryClass().showResult();
    else start();
}

// Começando a história
function start() {
    textHistoryElement.innerHTML = 'Olá! <br><br>Antes de começar a história, qual nome de usuário você gostaria de usar?';
    adjustHeight();

    // Enviando click do "enter" do teclado para enviar o nome de usuário
    inputElement.addEventListener("keypress", (event) => { if (event.key === 'Enter') verifyName(); });
    
    // Verificando nome enviado
    startButtonElement.addEventListener('click', verifyName);
}

// * funções extras
// Função para buscar o nome do usuário
export function getUsername(type) {
    if (type === 'full') return username;
    else return username.split(' ')[0];
}

// Função para ajustar a altura da caixa da história
export function adjustHeight() {
    mainBoxAnimElement.style.height = mainBoxElement.clientHeight + 'px';
    setTimeout(() => mainBoxAnimElement.style.height = mainBoxElement.clientHeight + 'px', 500);
}

// Verificar se nome é válido
function verifyName() {
    // Ajustando respostas de erros
    const temporaryName = inputElement.value;
    const letters = /^[A-Za-z çÇáÁíÍãÃóÓéÉêÊâÂúùÚÙüÜ]+$/; // Limitando caracteres permitidos
    
    // Minha turma ♡
    username = ['Alexia', 'André', 'Alisson', 'Bianca', 'Danielle', 'Eduardo', 'Emanuelle', 'Felipe', 'Franciane', 'Gabriel Marins', 'Gabriel Nascimento', 'Gabriel Pereira', 'Guilherme', 'Gustavo', 'Hudson', 'Igor', 'Isabelly Costa', 'Isabelly Eduarda', 'Júlia', 'Karol', 'Ketlyn', 'Nícolas', 'Rafael', 'Vitor', 'Williane'];
    
    // Se for nome de usuário pessoal
    if (temporaryName.length) {
        if (temporaryName.length <= 2) return alert('Ops! Seu nome precisa ter pelo menos 3 caracteres (você pode deixar vazio se preferir).');
        if (!temporaryName.match(letters)) return alert('Ops! Seu nome não pode conter caracteres especiais (exceto espaços)');
        
        // Ajustando nome
        username = temporaryName
            .trim() // Tirando espaços no começo e no fim
            .split(/ +/g)  // Criando array a partir dos espaços entre as palavras
            .map(m => { 
                if (m.length > 3) return m.replace(m[0], m[0].toUpperCase());  // Adicionando letra maiúscula no nome
                else return m; // Não adicionando letra maiúscula no nome
            })
            .join(' '); // Juntando em uma String
    }
    else username = username[Math.floor(Math.random() * username.length)];

    // Iniciando história
    divInputElement.style.display = 'none';
    new ShowHistoryClass(0).setHistory();
}

// Configurando botões de tentar novamente e de copiar link
buttonRetry.onclick = retry;
buttonShare.onclick = share;

// Botão de tentar novamente
function retry() {
    location.replace(location.href.split('?')[0]);
}

// Botão de compartilhar
let disable = false;
function share() {
    // Anti Multi cliques 
    if (disable) return;
    disable = true;
    setTimeout(() => disable = false, 2100);

    // Copiando
    navigator.clipboard.writeText(window.location.href);
    const lastHtml = buttonShare.innerHTML; 

    // Ajustando textos
    buttonShare.innerHTML = '✅ | Link Copiado';
    buttonShare.classList.add('button--share-clicked');
    setTimeout(() => {
        buttonShare.innerHTML = lastHtml;
        buttonShare.classList.remove('button--share-clicked');
    }, 2000);
}

// Ajustando tamanho da caixa a cada 2,5 segundos
setInterval(adjustHeight, 2500);