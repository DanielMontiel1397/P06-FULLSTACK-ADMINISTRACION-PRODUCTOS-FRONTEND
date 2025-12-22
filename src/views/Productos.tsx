import { Link, useLoaderData } from "react-router-dom"
import ProductosDetalles from "../components/ProductosDetalles";
import type { ProductoCreateType, RespuestaGetType } from "../types";
import { toast } from "react-toastify";
import { useEffect } from "react";
import ProductosDetallesMobile from "../components/ProductosDetallesMobile";

export default function Productos() {

    const respuesta = useLoaderData() as RespuestaGetType;
    let productos = [] as ProductoCreateType[];
    
    useEffect(() => {
        if (!respuesta.success) {
            toast.error(respuesta.msg)
        }
    }, []);

    if (respuesta.success) {
        productos = respuesta.data;
    }


    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-500">Productos</h2>
                <Link
                    to="productos/nuevo"
                    className="w-full sm:w-auto text-center rounded-md bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                >
                    Agregar Producto
                </Link>
            </div>

            <div className="overflow-hidden">
                {/* Vista Desktop - Tabla */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Producto
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Precio
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Disponibilidad
                                </th>
                                <th className="p-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {productos.length ? (
                                productos.map(producto => (
                                    <ProductosDetalles
                                        key={producto.id}
                                        producto={producto}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="text-center p-8 text-gray-500 font-semibold">
                                        No hay productos disponibles
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Vista Mobile - Cards */}
                <div className="md:hidden space-y-4">
                    {productos.length ? (
                        productos.map(producto => (
                            <ProductosDetallesMobile
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    ) : (
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <p className="text-gray-500 font-semibold">No hay productos disponibles</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
