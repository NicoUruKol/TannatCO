import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dispararSweetConfirmar } from "../assets/sweetAlert";
import { dispararSweetError } from "../assets/sweetAlertError";
import { useProductos } from "../contexts/ProductosContext";
import "../styles/agregarProducto.css";

export default function FormularioProducto() {
    const { productos, agregarProducto } = useProductos();
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [nombresExistentes, setNombresExistentes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const nombres = productos.map(p => p.name.toLowerCase());
        setNombresExistentes(nombres);
    }, [productos]);

    const onSubmit = async (data) => {
        const nombreNormalizado = data.name.toLowerCase().trim();

        if (nombresExistentes.includes(nombreNormalizado)) {
        setError("name", { type: "manual", message: "El nombre ya existe." });
        dispararSweetError("El nombre del producto ya existe.");
        return;
        }

        try {
        await agregarProducto(data);
        reset();
        dispararSweetConfirmar("Producto agregado", "El producto fue añadido con éxito.", "success");
        } catch (error) {
        dispararSweetError("Error al agregar el producto.");
        console.error(error);
        }
    };

    const handleCancelar = () => {
        navigate("/admin");
    }
    return (
        <div>
            <h2>Agregar Producto</h2>
            <form className="form-agregar-producto" onSubmit={handleSubmit(onSubmit)}>
                    <label>Nombre:</label>
                    <input type="text"
                        {...register("name", {
                        required: "El nombre es obligatorio.",
                        validate: value => value.trim() !== "" || "No puede estar vacío."
                        })}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

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

                    <label>Descripción:</label>
                    <textarea
                        {...register("description", {
                        required: "La descripción es obligatoria.",
                        minLength: { value: 11, message: "Debe tener más de 10 caracteres." }
                        })}
                    />
                    {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}

                    <label>Avatar (URL):</label>
                    <input 
                        type="text"
                        {...register("avatar", {
                        required: "La URL es obligatoria.",
                        pattern: {
                            value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i,
                            message: "Debe ser una URL válida de imagen."
                        }
                        })}
                    />
                    {errors.avatar && <p style={{ color: "red" }}>{errors.avatar.message}</p>}

                <div>   
                    <button className="botones" type="submit">Agregar Producto</button>
                    <button className="botones" type="button" onClick={handleCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}
