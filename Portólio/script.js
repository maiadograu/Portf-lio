const rectangle3D = document.querySelector('.rectangle-3d');

// Adiciona evento de clique para rotacionar o retângulo
rectangle3D.addEventListener('click', () => {
    rectangle3D.classList.toggle('rotate-down');
});