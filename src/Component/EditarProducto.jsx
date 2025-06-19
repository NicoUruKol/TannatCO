import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";
import { dispararSweetConfirmar } from "../assets/sweetAlert";
import { dispararSweetError } from "../assets/sweetAlertError";
import "../styles/editarProducto.css";

const EditarProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { productos, editarProducto } = useProductos();
    const producto = productos.find((p) => String(p.id) === id);


    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        avatar: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (producto) {
        setForm({
            name: producto.name || "",
            price: producto.price || "",
            description: producto.description || "",
            avatar: producto.avatar || "",
        });
        }
    }, [producto]);

    const validar = (campo, valor) => {
        let error = "";

        if (!valor.trim()) {
        error = "Este campo es obligatorio.";
        } else if (campo === "price" && (!/^\d+$/.test(valor) || parseInt(valor) <= 0)) {
        error = "El precio debe ser un número mayor a 0.";
        } else if (campo === "avatar" && !/^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i.test(valor)) {
        error = "Debe ser una URL válida de imagen.";
        }

        setErrors((prev) => ({ ...prev, [campo]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        validar(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        Object.entries(form).forEach(([campo, valor]) => validar(campo, valor));

        const hayErrores = Object.values(errors).some((error) => error) ||
        Object.values(form).some((v) => !v.trim());

        if (hayErrores) {
        dispararSweetError("Revisá los campos antes de guardar.");
        return;
        }

        await editarProducto(producto.id, form);
        dispararSweetConfirmar("Producto actualizado", "Los cambios se guardaron correctamente", "success");
        navigate("/admin/editarProducto");
    };

    const handleCancelar = () => {
        navigate("/admin/editarProducto");
    };

    if (!producto) {
        return <p style={{ textAlign: "center", color: "red" }}>Producto no encontrado</p>;
    }

    return (
        <div>
            <h2>Editar Producto</h2>
            <form className="form-editar-producto" onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </label>

                <label>
                    Precio:
                    <input type="text" name="price" value={form.price} onChange={handleChange} />
                    {errors.price && <p className="error">{errors.price}</p>}
                </label>

                <label>
                    Descripción:
                    <textarea name="description" value={form.description} onChange={handleChange} />
                    {errors.description && <p className="error">{errors.description}</p>}
                </label>

                <label>
                    URL de imagen:
                    <input type="text" name="avatar" value={form.avatar} onChange={handleChange} />
                    {errors.avatar && <p className="error">{errors.avatar}</p>}
                </label>

                <div>
                    <button className="editar-botones" type="submit" disabled={Object.values(errors).some((e) => e) || Object.values(form).some((v) => !v.trim())}>
                    Guardar
                    </button>
                    <button className="editar-botones" type="button" onClick={handleCancelar}>
                    Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
    };

export default EditarProducto;
