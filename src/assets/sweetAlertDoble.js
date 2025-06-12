import Swal from "sweetalert2";

export function dispararSweetDoble(texto) {
    return Swal.fire({
        title: "¿Estás seguro?",
        text: texto,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!!"
    });
}