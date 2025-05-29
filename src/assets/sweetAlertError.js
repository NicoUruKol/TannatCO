import Swal from "sweetalert2";

export function dispararSweetError(message){
    return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonText: 'Entendido',
            timer: 2000,
            showConfirmButton: false,
            background: '#571B2D', 
            color: '#fdf6f0',      
            iconColor: '#fdf6f0', 
            customClass: {
            popup: 'mi-sweet-popup',
            title: 'mi-sweet-title',
            confirmButton: 'mi-sweet-confirm'
        }
    });
}