document.addEventListener('DOMContentLoaded', function() {
    // Función para alternar la visibilidad del menú
    function toggleMenu(event) {
        const menuId = event.target.id.replace('toggle-', 'menu-');
        const menuElement = document.getElementById(menuId);
        if (menuElement) {
            menuElement.classList.toggle('show');
        }
    }

    // Selecciona todos los elementos h2 en el contenedor del menú
    const headers = document.querySelectorAll('.menu-container h2');
    headers.forEach(header => {
        header.addEventListener('click', toggleMenu);
    });
});
