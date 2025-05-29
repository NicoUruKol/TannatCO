import Swal from "sweetalert2";

export function dispararSweetConfirmar(titulo, texto, icon) {
    return Swal.fire({
        title: titulo,
        text: texto,
        icon: icon,
        timer: 2000,
        showConfirmButton: false,
        background: '#fdf6f0', 
        color: '#333333',      
        iconColor: '#571B2D', 
        customClass: {
            popup: 'mi-sweet-popup',
            title: 'mi-sweet-title',
            confirmButton: 'mi-sweet-confirm'
        }
    });
}

