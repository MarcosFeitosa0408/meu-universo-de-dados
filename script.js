// Só para futuras animações de clique, exibições de projetos etc.
// Aqui podemos fazer animações de botões, cards etc. depois se quiser.

console.log("Site do Marcos carregado com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
    const barras = document.querySelectorAll(".progresso");
    barras.forEach(barra => {
      const largura = barra.getAttribute("style").match(/\\d+/)[0];
      barra.style.width = largura + "%";
    });
  });

