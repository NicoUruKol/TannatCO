import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { dispararSweetConfirmar} from "../assets/sweetAlert";
import {dispararSweetError} from "../assets/sweetAlertError"
import { agregarProducto } from "../assets/request";
import "../styles/FormularioProducto.css"

export default function FormularioProducto({ }) {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [nombresExistentes, setNombresExistentes] = useState([]);

    
    useEffect(() => {
        async function obtenerProductos() {
            try {
                const response = await fetch("https://68100d9127f2fdac24101f8a.mockapi.io/productos"); 
                const data = await response.json();
                const nombres = data.map(p => p.name.toLowerCase());
                setNombresExistentes(nombres);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                dispararSweetError("No se pudieron cargar los productos existentes.");
            }
        }
        obtenerProductos();
    }, []);

    const onSubmit = (data) => {
        const nombreNormalizado = data.name.toLowerCase().trim();

        if (nombresExistentes.includes(nombreNormalizado)) {
            setError("name", { type: "manual", message: "El nombre ya existe." });
            dispararSweetError("El nombre del producto ya existe.");
            return;
        }

        
        agregarProducto(data); 
        reset(); 
        dispararSweetConfirmar("Producto agregado", "El producto fue añadido con éxito.", "success");
    };

    return (
        <div className="form-container-formProducto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Agregar Producto</h2>

                <div>
                    <label>Nombre:</label>
                    <input
                        {...register("name", {
                            required: "El nombre es obligatorio.",
                            validate: value => value.trim() !== "" || "No puede estar vacío."
                        })}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        {...register("price", {
                            required: "El precio es obligatorio.",
                            valueAsNumber: true,
                            min: { value: 0.01, message: "El precio debe ser mayor que 0." }
                        })}
                    />
                    {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
                </div>

                <div>
                    <label>Descripción:</label>
                    <textarea
                        {...register("description", {
                            required: "La descripción es obligatoria.",
                            minLength: { value: 11, message: "Debe tener más de 10 caracteres." }
                        })}
                    />
                    {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                </div>

                <div>
                    <label>Avatar (URL):</label>
                    <input
                        type="url"
                        {...register("avatar", {
                            required: "La URL es obligatoria.",
                            pattern: {
                                value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                                message: "Debe ser una URL válida de imagen."
                            }
                        })}
                    />
                    {errors.avatar && <p style={{ color: "red" }}>{errors.avatar.message}</p>}
                </div>

                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
}


