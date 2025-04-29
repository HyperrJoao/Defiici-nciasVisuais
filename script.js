function alterarCores(tipo) {
    const body = document.body;
    
    // Remover todas as classes de tipos de deficiência visual
    body.classList.remove('protanopia', 'deuteranopia', 'tritanopia', 'normal');
    
    // Adicionar a classe correspondente ao tipo escolhido
    body.classList.add(tipo);
}
