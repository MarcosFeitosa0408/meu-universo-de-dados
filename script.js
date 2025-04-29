document.addEventListener("DOMContentLoaded", () => {
  const barras = document.querySelectorAll(".progresso");
  barras.forEach(barra => {
    const largura = barra.getAttribute("style").match(/\\d+/)[0];
    setTimeout(() => {
      barra.style.width = largura + "%";
    }, 300);
  });
});

console.log("Site do Marcos carregado com sucesso!");


