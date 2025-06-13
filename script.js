document.addEventListener("DOMContentLoaded", function () {
    let imagens = document.querySelectorAll(".slides img");
    let index = 0;

    function mudarImagem() {
        imagens.forEach(img => img.style.display = "none");
        imagens[index].style.display = "block";
        index = (index + 1) % imagens.length;
    }

    setInterval(mudarImagem, 3000);
    mudarImagem();
});
