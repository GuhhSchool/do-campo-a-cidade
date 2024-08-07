import { adjustHeight } from './history.js';
import { getUsername } from './history.js';

const buttonBoxElement = document.querySelector('.div--buttons');
const textHistoryElement = document.querySelector('.p--text');
const titleHistoryElement = document.querySelector('.h2--title');
const divInteractionsElement = document.querySelector('.div--interactions');
const divInputElement = document.querySelector('.div--input');
const footerElement = document.querySelector('footer');

const historiesGlobalArray = [];
const currentHistory = [];

// Função para criar e organizar as histórias
export class CreateHistoryClass {
    #historyParams;

    // Inserir parâmetro na classe
    constructor(historyParams) {
        if (typeof historyParams === 'undefined') return;

        // Ajustando variáveis
        this.#historyParams = historyParams;
        
        // Iniciando funções
        this.#verifyParamErrors();
        this.#addHistory();
    }

    // Função para buscar a array de uma história 
    getHistoryById(id) {
        return historiesGlobalArray.find(f => f.id === id);
    }

    // Função para buscar a array das histórias
    getAllHistories() {
        return historiesGlobalArray;
    }


    // Função para criar a história
    #addHistory() {
        // Editando referência
        if (this.#historyParams.buttons?.some(s => s.ref)) this.#historyParams.buttons = this.#historyParams.buttons.map(m => ({ ...m, ref: `${this.#historyParams.id}=${m.ref}` }));

        // Adicionando história
        historiesGlobalArray.push(this.#historyParams);
    }

    // Função para verificar erros nas sintaxes
    #verifyParamErrors() {
        if (typeof this.#historyParams !== 'object') console.error(`Dados da história a ser criada não foi enviada corretamente. \n"Objeto" enviado: ${this.#historyParams}`);
        if (historiesGlobalArray.find(f => f.id === this.#historyParams.id)) console.error(`Conflito no id enviado da história. \nErro no envio da história: ${this.#historyParams.history}`)
        if (typeof this.#historyParams.history !== 'string') console.error(`A história está vazia. Erro no envio da história: ${this.#historyParams.history}`)
        if (typeof this.#historyParams.autoskip !== 'number' && !Array.isArray(this.#historyParams.buttons)) console.error(`Parte da história enviada precisa ter as alternativas no formato "Array". "Array" enviada: ${this.#historyParams.buttons}`);
        if (typeof this.#historyParams.autoskip !== 'number' && this.#historyParams.buttons?.some(s => typeof s.question !== 'string')) console.error(`O parâmetro de botões de uma história precisa ter o campo "question" como uma String. Erro no envio da história: ${this.#historyParams.history}`)
        if (typeof this.#historyParams.id !== 'number') console.error(`História criada sem id definido! Sem o id, não será possível localizar esta parte da história.\nParte da história: ${this.#historyParams?.id}`);
    }
        
}

// Classe para a organização e demonstração de histórias
export class ShowHistoryClass {
    // Variáveis locais
    #currHistoryObj;

    // Inserir parâmetro na classe
    constructor(id) {
        this.#currHistoryObj = this.getHistory(id);
    }

    // Função para buscar os dados de histórias 
    getHistory(id) {
        return new CreateHistoryClass().getHistoryById(id);
    }

    // Função para começar a configurar história
    setHistory() {
        this.#setTitle();
        this.#setButtons();
        adjustHeight();
    }

    // Função para buscar o nome do autor
    getName(type) {
        // Se o nome tiver na url
        if (window.location.href.includes('?')) {
            const configObj = this.#urlConfigObj();
            const name = decodeURI(configObj.username.replaceAll('_', ' '));
        
            if (type === 'full') return name;
            else return name.split(' ')[0];
        }

        // Se o nome não tiver na url
        return getUsername(type);
    }

    // Retorna os dados da url pertencentes à customização da pessoa
    #urlConfigObj() {
        const link = window.location.href;
        const urlArea = link.slice(link.indexOf('?') + 1, link.indexOf('#'));
        return Object.fromEntries(urlArea.split('&').map(m => m.split('=')));
    }

    // Função privada para criar o texto da história
    #setTitle() {
        textHistoryElement.innerHTML = this.#currHistoryObj.history.replaceAll('G{nome}', this.getName('first')).replaceAll('G{fullNome}', this.getName('full'));

        // Animações
        textHistoryElement.animate({ color: 'transparent'}, { duration: 0, fill: 'forwards' });
        
        // Timeout para nova animação
        setTimeout(() => {
            textHistoryElement.animate({ color: '#D7F9FF'}, { duration: 250, fill: 'forwards' });
            textHistoryElement.style.color = '#D7F9FF';
            textHistoryElement.style.opacity = 1;

            // Ajustando título
            if (this.#currHistoryObj.title) titleHistoryElement.innerHTML = this.#currHistoryObj.title;
        }, 500);
    }

    // Função para criar os botões
    #setButtons() {
        if (typeof this.#currHistoryObj.autoskip === 'number') return this.#autoskip();

        // Animações
        buttonBoxElement.animate({ opacity: 0, display: 'none' }, { duration: 0, fill: 'forwards' });
        
        // Timeout para nova animação
        setTimeout(() => {
            buttonBoxElement.animate({ opacity: 1, display: 'flex' }, { duration: 500, fill: 'forwards' });
            adjustHeight();
        }, 2000);

        setTimeout(() => adjustHeight(), 2050);

        for (const alternative of this.#currHistoryObj.buttons) {
            // Criando elemento e conteúdo   
            const alternativeButton = document.createElement('button');
            alternativeButton.textContent = alternative.question;
            
            // Registrando click e adicionando na div
            alternativeButton.onclick = () => this.#onclick(alternative);
            buttonBoxElement.appendChild(alternativeButton); 
        }
    }

    // Função para receber os clicks dos botões 
    #onclick(clickInfo) {
        // Ajustando dados do botão e da história
        buttonBoxElement.textContent = "";
        if (clickInfo.reply) currentHistory.push(`${clickInfo.ref}`);

        // Criando nova história
        if (clickInfo.to) new ShowHistoryClass(clickInfo.to).setHistory();
        else this.#createLink();
    }

    // Função para passar para a próxima parte da história
    #autoskip() {
        let timeoutLeft = this.#currHistoryObj.history.length * 50;
        if (timeoutLeft < 3000) timeoutLeft = 3000;

        setTimeout(() => {
            // Ajustando dados do botão e da história
            buttonBoxElement.textContent = "";

            // Criando nova história
            new ShowHistoryClass(this.#currHistoryObj.autoskip).setHistory();
        }, timeoutLeft);
    }

    // Função para criar um link com o resultado das seleções
    #createLink() {
        const urlHistory = `#${currentHistory.join('&')}`;
        const title = (titleHistoryElement.innerHTML.endsWith('Campo')) ? 0 : 1;
        
        return window.location.href =  `${window.location.href}?username=${this.getName('full').replaceAll(' ', '_')}&title=${title}${urlHistory}`;
    }

    // Função para juntar o link e formar a história
    async showResult() {
        // Ajustando design
        buttonBoxElement.textContent = "";
        divInputElement.style.display = "none";
        document.documentElement.style.setProperty('--color-border', '#ffef08');
        
        // Configurando partes
        const partsArray = Object.values(this.#createByURL());
        partsArray.unshift('Biografia de: <span class="color-yellow">G{fullNome}</span><br>Ano: <span class="color-yellow">2024</span>');

        // Titulo - sistema para diminuir tamanho do link
        if (this.#urlConfigObj().title === '0') titleHistoryElement.innerHTML = 'A Relação da Tecnologia no Campo';
        else titleHistoryElement.innerHTML = 'A Relação da Tecnologia na Cidade';

        // Trocando variáveis "G{variável}" pelo texto designado
        const htmlArray = partsArray.join('G{space}')
            .replaceAll('G{nome}', this.getName())
            .replaceAll('G{fullNome}', this.getName('full'))
            .split('G{space}');

        // Cabeçalho
        textHistoryElement.innerHTML = htmlArray.shift();
        adjustHeight();

        for (const item of htmlArray) {
            // Animação de texto aparecendo
            await timeout(500);
            textHistoryElement.innerHTML = `${textHistoryElement.innerHTML}</br></br><span class="text-invisible">${item}</span>`;;
            adjustHeight();

            await timeout(500);
            const spanText = document.querySelector('.text-invisible').classList.remove('text-invisible')
        }

        // Interações & Rodapé
        divInteractionsElement.style.display = "flex";
        footerElement.style.display = 'block';
        adjustHeight();

        // Timeout para repetir loops com delay
        async function timeout(ms) {
            return new Promise(res => setTimeout(res, ms));
        }
    }

    // Função para criar a história pela url
    #createByURL() {
        const url = window.location.href.split('#')[1];
        
        // Transformando url em object
        let parts = Object.fromEntries(url.split('&').map(m => m.split('=')));
        return this.#refToReply(parts);
    }

    // Função para transformar o "ref" da url em "reply" (como se fosse trocar o id pelo seu valor)
    #refToReply(urlParts) {
        let newParts = {};
        for (const part in urlParts) {
            const id = Number(part);
            const ref = urlParts[part];
            const history = new CreateHistoryClass().getHistoryById(id);
            const button = history.buttons.find(f => f.ref === `${id}=${ref}`);
            
            if (button.reply) newParts[id] = button.reply;
        }
        return newParts;
    }
}