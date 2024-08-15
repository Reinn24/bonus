document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById("myModal");

    // Obtener la imagen y el modal la mostrará
    var img = document.getElementById("profileImg");
    var modalImg = document.getElementById("img01");

    // Cuando el usuario hace clic en la imagen, se muestra en el modal
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Funcionalidad del menú
    const h2Elements = document.querySelectorAll('.menu-container h2');
    const h3Elements = document.querySelectorAll('.menu-container h3');

    function toggleMenu(event) {
        const menuId = event.target.id.replace('turno-', 'menu-');
        const menuElement = document.getElementById(menuId);
        if (menuElement) {
            menuElement.classList.toggle('show');
        }
    }

    h2Elements.forEach(h2 => {
        h2.addEventListener('click', toggleMenu);
    });

    h3Elements.forEach(h3 => {
        h3.addEventListener('click', toggleMenu);
    });
});
