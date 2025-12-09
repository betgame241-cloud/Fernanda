// 1. Alerta de bienvenida cuando se abre la página
window.addEventListener('load', () => {
    alert('¡Bienvenido al perfil de Fernanda Carillo! 🎉');
});

// 2. Funcionalidad para abrir historias en grande
const historias = document.querySelectorAll('.historia');
const contenedorHistoriaGrande = document.createElement('div');

// Crea el cuadro para mostrar la historia grande
contenedorHistoriaGrande.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

// Crea la imagen grande de la historia
const imagenHistoriaGrande = document.createElement('img');
imagenHistoriaGrande.style.cssText = `
    width: 80%;
    max-width: 300px;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
`;

// Agrega la imagen al contenedor y el contenedor al cuerpo de la página
contenedorHistoriaGrande.appendChild(imagenHistoriaGrande);
document.body.appendChild(contenedorHistoriaGrande);

// Añade el evento de clic a cada historia
historias.forEach(historia => {
    historia.addEventListener('click', () => {
        const imgSrc = historia.querySelector('.historia-circulo img').src;
        imagenHistoriaGrande.src = imgSrc;
        contenedorHistoriaGrande.style.display = 'flex';
    });
});

// Cierra la historia grande al hacer clic fuera de ella
contenedorHistoriaGrande.addEventListener('click', (e) => {
    if (e.target === contenedorHistoriaGrande) {
        contenedorHistoriaGrande.style.display = 'none';
    }
});

// 3. Mensaje cuando se hace clic en el enlace del manager
const enlaceManager = document.querySelector('.biografia a');
if (enlaceManager) {
    enlaceManager.addEventListener('click', (e) => {
        confirm('¿Quieres ir al perfil del manager de Fernanda? 📩');
        // Si el usuario da "Aceptar", se abre el enlace; si no, se cancela
        // (el confirm ya lo hace automáticamente si devuelve false)
    });
}
