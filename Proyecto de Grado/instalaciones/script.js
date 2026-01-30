    function abrirModal(src) {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("imagenGrande").src = src;
    }

    function cerrarModal() {
        document.getElementById("modal").style.display = "none";
    }