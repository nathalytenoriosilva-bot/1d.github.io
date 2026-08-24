//===========MODO ESCURO==========//
const botaoTema=document.getElementByld("botaoTema");

function alternarTema(){
   document.body.classList.toggle("escuro");
   if(document.body.classList.contains("escuro")) {
      botaoTema.textContent ="☀️Modo claro";
  } else {
       botaoTema.textContent="🌛Modo
escuro";
   }
}
botaoTema.addEventListener("click",alternarTema);

//=========ALTERAR TEXTO=========//
const botaoMensagem=document.getElementByld("botaoMensagem");
const mensagem=document.getElementByld("mensagem");

function alterarTexto(){
  mensagem.textContent = "O texto foi alterado pelo JavaScript!";
}
botaoMensagem.addEventListener("click", alterarTexto);
