import type { ActionFunctionArgs } from "react-router-dom";
import { editarDisponibilidad } from "../services/ProductoServices";
import { toast } from "react-toastify";

export async function action({request} : ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())
    const id = data.id;
    const respuesta = await editarDisponibilidad(+id);

    if(respuesta.success){
        toast.success(respuesta.msg)
    } else {
        toast.error(respuesta.msg)
    }
   
    return null
}