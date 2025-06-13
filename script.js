document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".more-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const extra = btn.nextElementSibling;
      extra.classList.toggle("hidden");

      // Altera o texto do botão dinamicamente
      btn.textContent = extra.classList.contains("hidden") ? "Saiba mais" : "Ocultar";
    });
  });
});
