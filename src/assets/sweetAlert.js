import Swal from "sweetalert2";

export function dispararSweetConfirmar(titulo, texto, icon) {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: icon,
        timer: 2000,
        showConfirmButton: false,
        background: '#571B2D', 
        color: '#333333',      
        iconColor: '#fdf6f0', 
        customClass: {
            popup: 'mi-sweet-popup',
            title: 'mi-sweet-title',
            confirmButton: 'mi-sweet-confirm'
        }
    });
}

