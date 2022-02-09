function buscarDados() {  ///Função que vai buscar as mensagens no servidor 
    const mensagens = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
    mensagens.then(renderizarPersonagem);
  }
  
  function renderizarPersonagem(mensagensexibidas) {
    var elementoMensagem = document.querySelectorAll(".mensagensrecebidas");
    elementoMensagem.innerHTML = mensagensexibidas.data.text;
    console.log(elementoMensagem)
    
  }