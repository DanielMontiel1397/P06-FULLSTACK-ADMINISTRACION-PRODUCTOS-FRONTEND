import { Link, Form } from "react-router-dom"
import ProductoForm from "../components/ProductoForm";


export default function NuevoProducto() {


    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Productos</h2>
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
    
                <ProductoForm/>

                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
                    value="Registrar Producto"
                />

            </Form>
        </>
    )
}
