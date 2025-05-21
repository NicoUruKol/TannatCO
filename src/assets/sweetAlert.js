import Swal from "sweetalert2";

export function dispararSweetConfirmar(titulo, texto, icon){
    Swal.fire({
    title: titulo,
    text: texto,
    icon: icon
});
}