import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { obtenerProducto } from "../services/ProductoServices";
import { toast } from "react-toastify";

export async function loader({ params }: LoaderFunctionArgs) {

    if (params.id !== undefined) {
        const idProducto = params.id;
    
        const respuesta = await obtenerProducto(+idProducto);
      
        if(!respuesta.success){
            toast.error(respuesta.msg)
            return redirect('/')
           
        } else {
            return respuesta.data;
        }

    } else {
        return redirect('/')
    }

}