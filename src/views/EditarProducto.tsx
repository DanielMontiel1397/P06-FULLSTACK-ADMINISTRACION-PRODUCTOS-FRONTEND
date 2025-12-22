import { Link, Form, useLoaderData } from "react-router-dom"

import type { ProductoType } from "../types";
import ProductoForm from "../components/ProductoForm";

const disponibilidadOptions = [
    { name: 'Disponible', value: true },
    { name: 'No Disponible', value: false }
]

export default function EditarProducto() {

    const producto = useLoaderData() as ProductoType;
   
    
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>
                <Link
                    to="/"
                    className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                >
                    Ver Productos
                </Link>
            </div>

            <Form
                className="mt-10"
                method="POST"
            >
                <ProductoForm
                    producto={producto}
                />

                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="availability"
                    >
                        Disponibilidad:
                    </label>
                    <select
                        id="disponibilidad"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        name="disponibilidad"
                        defaultValue={producto?.disponibilidad.toString()}
                    >

                        {disponibilidadOptions.map(option => (
                            <option key={option.name} value={option.value.toString()}>{option.name}</option>
                        ))}

                    </select>
                </div>

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Guardar Cambios"
                />

            </Form>
        </>
    )
}
