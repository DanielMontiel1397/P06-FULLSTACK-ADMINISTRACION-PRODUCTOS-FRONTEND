import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { eliminarProducto } from "../services/ProductoServices";
import { toast } from "react-toastify";
import { sleep } from "../utils";

export async function action({ params }: ActionFunctionArgs) {
    const id = params.id;

    if (id !== undefined) {

        const respuesta = await eliminarProducto(+id);
        if (respuesta.success) {
            toast.success(respuesta.msg)
        } else {
            toast.error(respuesta.msg)
        }
        await sleep(800)
    } else {
        toast.error('Error en la url')
        await sleep(800)
    }

    return redirect('/')
}