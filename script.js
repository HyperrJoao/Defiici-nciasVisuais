// Script para controlar o comportamento do accordion
document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Alterna o estado 'ativo' do botão
            this.classList.toggle("active");
            
            // Seleciona o conteúdo do acordeão associado
            const content = this.nextElementSibling;
            
            // Exibe ou oculta o conteúdo
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
