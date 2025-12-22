import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { agregarProducto } from "../services/ProductoServices";
import { toast } from "react-toastify";

export async function action({ request }: ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())

    if (Object.values(data).includes('')) {
        toast.error('Todos los campos son obligatorios')
        return null;
    }

    if (+data.price <= 0) {
        toast.error('El precio debe ser mayor a cero')
        return null;
    }

    const respuesta = await agregarProducto(data);

    if (respuesta.success) {
        toast.success(respuesta.msg)
        return redirect('/')
    } else {
        toast.error(respuesta.msg)
        return null;
    }
}