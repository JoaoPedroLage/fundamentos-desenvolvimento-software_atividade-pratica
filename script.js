document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('botaoMensagem');
  const mensagemDiv = document.getElementById('mensagem');
  
  botao.addEventListener('click', function() {
      mensagemDiv.textContent = "A jornada de mil milhas começa com um único passo. Continue progredindo!";
      mensagemDiv.style.display = 'block';
  });
});