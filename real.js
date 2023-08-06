// Lista de frases que você deseja mostrar
var frases = [
  "Criação de sites responsivos",
  "Desenvolvimento de lojas virtuais",
  "Design personalizado para seu site",
  "Otimização para motores de busca (SEO)",
  "Integração com redes sociais",
  "Manutenção e suporte técnico",
];

var contador = 0;
var fraseAtual = "";

// Função para simular o efeito de digitação em tempo real
function typeWriter() {
  var elementoTexto = document.getElementById("fraseEmTempoReal");
  var texto = frases[contador];
  var i = 0;

  var typingInterval = setInterval(function () {
    if (i < texto.length) {
      elementoTexto.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(function () {
        apagarTexto();
      }, 1000); // Intervalo antes de apagar o texto (1 segundo)
    }
  }, 100); // Intervalo entre as letras (ajuste conforme necessário)
}

// Função para apagar o texto em tempo real
function apagarTexto() {
  var elementoTexto = document.getElementById("fraseEmTempoReal");
  var i = elementoTexto.innerHTML.length;

  var deletingInterval = setInterval(function () {
    if (i >= 0) {
      elementoTexto.innerHTML = elementoTexto.innerHTML.slice(0, i);
      i--;
    } else {
      clearInterval(deletingInterval);
      contador = (contador + 1) % frases.length; // Próxima frase
      setTimeout(function () {
        typeWriter();
      }, 1000); // Intervalo antes de começar a digitar a próxima frase (1 segundo)
    }
  }, 50); // Intervalo entre as letras sendo apagadas (ajuste conforme necessário)
}

// Inicia a animação após o carregamento da página
window.onload = typeWriter;
