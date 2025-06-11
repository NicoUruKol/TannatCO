import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useProductos } from '../contexts/ProductosContext';

export default function EditarProducto() {
    const { id } = useParams();
    const { productos, editarProducto } = useProductos();
    const [formData, setFormData] = useState({ nombre: '', precio: '', descripcion: '' });

    useEffect(() => {
        const producto = productos.find(p => p.id === id);
        if (producto) {
        setFormData(producto);
        }
    }, [id, productos]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editarProducto(id, formData);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input name="nombre" value={formData.nombre} onChange={handleChange} />
        <input name="precio" value={formData.precio} onChange={handleChange} />
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
        <button type="submit">Guardar cambios</button>
        </form>
    );
}
