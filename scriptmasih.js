
// Nome do usuário definido
 const userName = prompt("Qual o seu nome?");

const objectName = {name: userName}; // OBJETO COM NOME FORNECIDO PELO USUÁRIO

// VARIÁVEIS PARA ARMAZENAR MENSAGENS DA API
const mainHTML = document.querySelector("main");
const autoScroll = document.querySelector(".auto-scroll");


// COMUNICAÇÃO COM O SERVER (ADIÇÃO DO USUÁRIO À API):
const promisePost = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", objectName);
promisePost.then(addUser);
promisePost.catch(addUserFailed);

function addUser(code) {
    const statusCode = code.status;
    console.log(statusCode);
}

function addUserFailed(error) {
    const errorCode = error.response.status;
    console.log(errorCode);
}

// COMUNICAÇÃO COM O SERVER (CARREGANDO MENSAGENS DA API):
const promiseGet = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
promiseGet.then(getMensages); // PRINTA MENSAGENS NA HORA
setInterval(refreshMensages, 3000) // RECARREGA MENSAGENS
// FUNÇÃO DE RECARREGAR MENSAGENS NA TELA
function refreshMensages() {
    mainHTML.innerHTML = "";
    promiseGet.then(getMensages);
}
// FUNÇÃO PARA PRINTAR MENSAGENS NA TELA
function getMensages(mensages) {
    const mensagesData = mensages.data;
    console.log(mensagesData);
    for (i = 0; i < mensagesData.length; i++) {
        if (mensagesData[i].type === "status") {
            mainHTML.innerHTML += `
            <div class="mensagensrecebidas1">
            <p><time>${mensagesData[i].time} </time><span class="user">${mensagesData[i].from} </span>${mensagesData[i].text}</p>
            </div>
            `;
        }
        else if (mensagesData[i].type === "reserved" && mensagesData[i].to === userName) {
            mainHTML.innerHTML += `
            <div class="to-someone">
            <p><time>${mensagesData[i].time} </time><span class="user">${mensagesData[i].from} </span>reservadamente para <span class="user">${mensagesData[i].to} </span>${mensagesData[i].text}</p>
            </div>
            `;
        }
        else if (mensagesData[i].type === "normal") {
            mainHTML.innerHTML += `
            <div class="to-everyone">
            <p><time>${mensagesData[i].time} </time><span class="user">${mensagesData[i].from} </span>para <span class="user">${mensagesData[i].to} </span>${mensagesData[i].text}</p>
            </div>
            `;
        }
    }
    autoScroll.scrollIntoView(false);
}

// TIRA JANELA DE ESCOLHER CONTATO DA TELA
function removeHiddenWindow(window) {
    window.classList.add("hidden");
}
// COLOCA JANELA DE ESCOLHER CONTATO DA TELA
function showHiddenWindow() {
    const window = document.querySelector("aside");
    window.classList.remove("hidden");
}