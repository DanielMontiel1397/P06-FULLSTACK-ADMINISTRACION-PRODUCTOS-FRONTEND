import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { editarProducto } from "../services/ProductoServices";
import { toast } from "react-toastify";

export async function action({ request, params }: ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())


    if (Object.values(data).includes('')) {
        toast.error('Todos los campos son obligatorios')
        return null
    }

    if (+data.price <= 0) {
        toast.error('El precio debe ser mayor a cero')
        return null;
    }


    if (params.id !== undefined) {
        const respuesta = await editarProducto(data, +params.id);
        if(respuesta.success){
            toast.success(respuesta.msg)
        } else {
            toast.error(respuesta.msg)
        }

    } else {
        toast.error('Error en la url')
    }
    
    return redirect('/')
}