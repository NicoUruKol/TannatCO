import Swal from "sweetalert2";

export function dispararSweetError(message){
    return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonText: 'Entendido',
            timer: 2000,
            showConfirmButton: false
        });
    }