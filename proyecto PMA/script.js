document.querySelectorAll('.btn-popup').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        document.querySelector(target).style.display = 'flex';
    });
});

document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup').style.display = 'none';
    });
});
// Guardar la posición del scroll antes de salir de la página
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Restaurar la posición del scroll al cargar la página
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});