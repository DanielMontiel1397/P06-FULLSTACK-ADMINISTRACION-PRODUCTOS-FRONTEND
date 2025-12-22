
import { obtenerProductos } from "../services/ProductoServices";

export async function loader() {

    const respuesta = await obtenerProductos();


    return respuesta;
}