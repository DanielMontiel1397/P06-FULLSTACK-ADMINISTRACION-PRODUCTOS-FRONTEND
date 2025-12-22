import { useNavigate, useFetcher } from "react-router-dom"
import type { ProductoCreateType } from "../types"
import { formatCurrency } from "../utils"
import ConfirmarDialog from "./ConfirmarDialog"
import { useState } from "react"

import { TrashIcon, Pencil1Icon } from "@radix-ui/react-icons"


type ProductoDetallesProps = {
    producto: ProductoCreateType
}

export default function ProductosDetalles({ producto }: ProductoDetallesProps) {

    const estaDisponible = producto.disponibilidad;

    const fetcher = useFetcher();

    const navigate = useNavigate();

    //MODAL
    const [modal, setModal] = useState(false);


    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
    
                <td className="p-4">
                    <span className="text-mds font-medium text-gray-900">
                        {producto.name}
                    </span>
                </td>

                <td className="p-4">
                    <span className="text-mds font-semibold text-gray-900">
                        {formatCurrency(producto.price)}
                    </span>
                </td>


                <td className="p-4">
                    <fetcher.Form method="POST">
                        <button
                            type="submit"
                            name="id"
                            value={producto.id}
                            className={`hover:cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105 ${estaDisponible
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                                }`}
                        >
                            <span className={`w-2 h-2 rounded-full ${estaDisponible ? 'bg-green-500' : 'bg-red-500'}`} />
                            {estaDisponible ? 'Disponible' : 'No Disponible'}
                        </button>
                    </fetcher.Form>
                </td>

           
                <td className="p-4">
                    <div className="flex gap-2">
                        <button
                            onClick={() => navigate(`/productos/${producto.id}/editar`)}
                            className="hover:cursor-pointer flex-1 inline-flex justify-center items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                        >
                            <Pencil1Icon className="w-4 h-4" />
                            Editar
                        </button>
                        <button
                            onClick={()=> setModal(true)}
                            className="hover:cursor-pointer flex-1 inline-flex justify-center items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                        >
                            <TrashIcon className="w-4 h-4" />
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>

            <ConfirmarDialog
                producto={producto}
                open={modal}
                onOpenChange={setModal}
            />
        </>
    )
}

/*

*/