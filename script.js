/*let nameUser;
cadastrarName();

function cadastrarName () {
    nameUser = {name: prompt('Nome de Usuário?')};
    console.log(nameUser);
    let requisicaoNome = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', nameUser);
    requisicaoNome.then(tratarSucesso);
    requisicaoNome.catch(tratarErro);
}
function tratarSucesso() {
  console.log('Requisicao foi bem sucedida!');
}

function tratarErro(erro) {
  let statusCode = erro.response.status;
  console.log(statusCode);
  if (statusCode == 400) {
      cadastrarName();
  }

}*/
/*
let mensagem = []; // quero do servidor


 ///Função que vai buscar as mensagens no servidor 
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    promise.then(promessaCumprida);
    console.log("funfa");
  
  function promessaCumprida(resposta) {
    console.log(resposta.data);// receitas do servidor
    messages = resposta.data;
    messages.renderizarMensagem;
    renderizarMensagem(messages);
  }
  
  function renderizarMensagem() {
    const main = document.querySelector(".main") 
    main.innerHTML = null;
    for (let i = 0; i < messages.length; i++) {
      main.innerHTML += ` <div class="mensagensrecebidas1">
      <p class="hora">(${messages.data[i].time})</p>
      <p class="quemEscreveu">${messages.data[i].from}</p>
      <p class="textomensagem"> ${messages.data[i].text}</p> 
    </div>`;}
    console.log(main)
   
  }
  ///TESTANDO
  /*
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
  promise.then(renderizarMensagem);
  console.log("funfa");
  setInterval(refreshMessage, 3000)


function refreshMessage() {
  let main = document.querySelector(".main")
  promise.then(renderizarMensagem);
}

function renderizarMensagem(messages) {
  const mensagemdata = messages.data;

  for (let i = 0; i < messages.length; i++) {
    if (mensagemdata[i].type === "status"){
    main.innerHTML += ` <div class="mensagensrecebidas1">
    <p class="hora">(${messages.data[i].time})</p>
    <p class="quemEscreveu">${messages.data[i].from}</p>
    <p class="textomensagem"> ${messages.data[i].text}</p> 
  </div>`;}
  else if (mensagemdata[i].type === "message"){
    main.innerHTML += ` <div class="mensagensrecebidas1">
    <p class="hora">(${messages.data[i].time})</p>
    <p class="quemEscreveu">${messages.data[i].from}</p>
    <p class="textomensagem"> ${messages.data[i].text}</p> 
  </div>`;}
  else if (mensagemdata[i].type === "private_message"){
    main.innerHTML += ` <div class="mensagensrecebidas1">
    <p class="hora">(${messages.data[i].time})</p>
    <p class="quemEscreveu">${messages.data[i].from}</p>
    <p class="textomensagem"> ${messages.data[i].text}</p> 
  </div>`;}
  
}
  
///Ideias 
  /*<div class="container-mensagens edit">
            <div class="mensagensrecebidas1">
                <time class="hora"></time>
                <p class="quemescreveu"></p>
                <p class="paraQuemEnviou"></p>
                <p class="textomensagem"></p>
            </div>
    }*/

/*  var elementoMensagem = document.querySelectorAll(".textomensagem");
var elementohora = document.querySelectorAll(".hora");
var elementoQuemEnviou = document.querySelectorAll(".quemescreveu");
var elementoParaQuem = document.querySelectorAll(".paraQuemEnviou");
 ///exibição das mensagens na tela
 elementoMensagem.innerHTML = mensagensexibidas.data.text;
 elementohora.innerHTML = mensagensexibidas.data.times
 elementoQuemEnviou.innerHTML = mensagensexibidas.data.from
 elementoParaQuem.innerHTML - mensagensexibidas.data.to*/

/*///verificação de status para adição ou não da classe cor
var elementoType = mensagensexibidas.data.status 
if (elementoType === "status") {
  classerecebedora = document.querySelector(".mensagensrecebidas1") 
  classerecebedora.classlist.add(".cinza") ///pesquisar como adicionar aqui uma classe que vai contar o background color de acordo com o type da mensagem
} elseif (elementoType === "message");{
  classerecebedora = document.querySelector(".mensagensrecebidas1") 
  classerecebedora.classlist.add(".branco")
} elseif (elementoType === "private_message")
 { classerecebedora = document.querySelector(".mensagensrecebidas1") 
classerecebedora.classlist.add(".cinza")
}
/// fazer uma função pra checar se é uma mensagem privada e apenas mostrar se a pessoa destinataria estiver online
///uma ideia é que a parte "to" deve ter pelo menos um match em todos os usuarios que estiverem presentes no site, descobrir como fazer.
if (elementoType === "private_message")
 { classerecebedora = document.querySelector(".mensagensrecebidas1") 
classerecebedora.classlist.add(".cinza")
}
///fazer uma função para recarregar as mensagens na tela 
 

///fazer uma função que vai scrollar mensagens novas na tela 
const elementoQueQueroQueApareca = document.querySelector('.mensagensrecebidas1');
elementoQueQueroQueApareca.scrollIntoView();*/

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