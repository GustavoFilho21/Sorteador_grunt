// Adiciona um ouvinte de evento ao documento que aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', ()=>{

  // Adiciona um ouvinte de evento ao formulário com o id 'form-sorteador' que é acionado quando o formulário é enviado
  document.getElementById('form-sorteador').addEventListener('submit', (e)=>{

    // Previne o comportamento padrão do evento de envio do formulário
    e.preventDefault();

    // Obtém o valor do elemento com o id 'numero-maximo'
    let numeroMaximo = document.getElementById('numero-maximo').value;

    // Converte o valor obtido para um número inteiro
    numeroMaximo = parseInt(numeroMaximo);

    // Gera um número aleatório entre 0 e 'numeroMaximo'
    let numeroAleatorio = Math.random() * numeroMaximo;

    // Arredonda o número aleatório para baixo e adiciona 1, resultando em um número entre 1 e 'numeroMaximo'
    numeroAleatorio = Math.floor(numeroAleatorio + 1);

    // Exibe o número aleatório no elemento com o id 'resultado-valor'
    document.getElementById('resultado-valor').innerText = numeroAleatorio;

    // Exibe o elemento com a classe 'resultado'
    document.querySelector('.resultado').style.display = 'block'
  })
})
