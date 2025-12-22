import { useState } from 'react'
import { useNavigate, useFetcher } from "react-router-dom"
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import type { ProductoCreateType } from "../types"
import { formatCurrency } from "../utils"
import ConfirmarDialog from './ConfirmarDialog';

type ProductoDetallesMobileProps = {
    producto: ProductoCreateType
}

export default function ProductosDetallesMobile({ producto }: ProductoDetallesMobileProps) {
    const estaDisponible = producto.disponibilidad;
    const fetcher = useFetcher();
    const navigate = useNavigate();
    
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                {/* Header - Nombre y Precio */}
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="font-semibold text-gray-900 text-base">
                            {producto.name}
                        </h3>
                        <p className="text-lg font-bold text-indigo-600 mt-1">
                            {formatCurrency(producto.price)}
                        </p>
                    </div>
                    
                    {/* Disponibilidad */}
                    <fetcher.Form method="POST">
                        <button
                            type="submit"
                            name="id"
                            value={producto.id}
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                                estaDisponible
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${estaDisponible ? 'bg-green-500' : 'bg-red-500'}`} />
                            {estaDisponible ? 'Disponible' : 'No Disponible'}
                        </button>
                    </fetcher.Form>
                </div>

                {/* Botones de Acción */}
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => navigate(`/productos/${producto.id}/editar`)}
                        className="flex-1 inline-flex justify-center items-center gap-2 px-3 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors"
                    >
                        <Pencil1Icon className="w-4 h-4" />
                        Editar
                    </button>
                    <button
                        onClick={() => setModal(true)}
                        className="flex-1 inline-flex justify-center items-center gap-2 px-3 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors"
                    >
                        <TrashIcon className="w-4 h-4" />
                        Eliminar
                    </button>
                </div>
            </div>

            <ConfirmarDialog 
                producto={producto}
                open={modal}
                onOpenChange={setModal}
            />
        </>
    )
}