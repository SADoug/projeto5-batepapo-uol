

// Nome do usuário definido
const userName = prompt("Qual o seu nome?");

const objectName = {name: userName}; // OBJETO COM NOME FORNECIDO PELO USUÁRIO

const promisePost = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", objectName);
promisePost.then(addUser);
promisePost.catch(addUserFailed);

function addUser(code) {
    const statusCode = code.status;
    console.log(statusCode);
}

function addUserFailed(error) {
    const errorCode = error.response.status;
    console.log(errorCode);}

///Função que vai buscar as mensagens no servidor 
const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
promise.then(promessaCumprida);
setInterval(refreshMensages, 3000)

function refreshMensages() {
  mainHTML = document.querySelector(".main")
  promise.then(promessaCumprida);
}

function promessaCumprida(resposta) {
  console.log(resposta.data);// receitas do servidor
  messages = resposta.data;
  renderizarMensagem(messages);
}

function renderizarMensagem(messages) {
  
  const main = document.querySelector("main")
  
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].type === "status") {
      main.innerHTML += ` <div class="mensagensrecebidas1">
       <p class="hora">(${messages[i].time})</p>
       <p class="quemEscreveu">${messages[i].from}</p> 
       <p data-identifier="message" class="textomensagem"> ${messages[i].text}</p> 
     </div>`;
    }
    
    else if (messages[i].type === "private_message") {
    main.innerHTML += ` <div class="mensagensrecebidas2">
    <p class="hora">(${messages[i].time})</p>
    <p class="quemEscreveu">${messages[i].from}</p> 
    <p>reservadamente para</p>
    <p class="quemEscreveu">${messages[i].to}</p>
    <p data-identifier="message" class="textomensagem"> ${messages[i].text}</p> 
      </div>`;
  }
  else if (messages[i].type === "message") {
    main.innerHTML += ` <div class="mensagensrecebidas3">
    <p class="hora">(${messages[i].time})</p>
    <p class="quemEscreveu">${messages[i].from}</p>
    <p>para</p>
    <p class="para">${messages[i].to}</p>
    <p data-identifier="message" class="textomensagem"> ${messages[i].text}</p> 
  </div>`;
  }
  const elementoQueQueroQueApareca = document.querySelector('.mensagensrecebidas1');
elementoQueQueroQueApareca.scrollIntoView();
}
}