import axios from "axios";
import { FormEditarProductoSchema, FormProductSchema, ProductoCrearSchemaResponse, ProductoDisponibilidadSchemaResponse, ProductoEditarSchemaResponse, ProductoEliminarSchemaResponse, ProductoSchemaResponse, ProductosSchema, ServerErrorResponse } from "../schemas/productSchema";
import type { RespuestaCreateType, ProductoType, RespuestaGetType, RespuestaGetProductoType, RespuestaEditarProductoType, RespuestaEliminarProductoType, RespuestaEditarDisponibilidadProductoType } from "../types";

type ProductoData = {
    [k: string]: FormDataEntryValue;
}

export async function agregarProducto(data: ProductoData): Promise<RespuestaCreateType> {

    try {
        const result = FormProductSchema.safeParse({
            name: data.name,
            price: +data.price
        });

        if (result.success) {

            const url = `${import.meta.env.VITE_BACKEND_URL}/productos`

            const { data } = await axios.post(url, {
                name: result.data.name,
                price: result.data.price
            });

            const resultApi = ProductoCrearSchemaResponse.safeParse(data)
        
            if (resultApi.success) {
                return {
                    success: true,
                    msg: resultApi.data.msg
                }
            } else {
                return {
                    success: false,
                    msg: 'Error del servidor'
                }
            }

        } else {
            return {
                success: false,
                msg: 'Datos no válidos'
            }
        }

    } catch (error) {

        if (axios.isAxiosError(error) && error.response) {
            const { data } = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            }

        }

        return {
            success: false,
            msg: 'Error de conexión, verifica tu internet'
        }
    }
}

export async function obtenerProductos() : Promise<RespuestaGetType> {

    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/productos`;
        const { data } = await axios.get(url);

        const result = ProductosSchema.safeParse(data);

        if (result.success) {
            return {
                data: result.data.data,
                success: true,
                msg: result.data.msg
            }
        } else {
            return {
                success: false,
                msg: 'Error del servidor'
            }
        }

    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            const {data} = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            }
        }
    }

    return {
        success: false,
        msg: 'Error de conexión, verifica tu internet'
    }

}

export async function obtenerProducto(id: ProductoType['id']) : Promise<RespuestaGetProductoType> {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/productos/${id}`;
        const { data } = await axios.get(url);

        const result = ProductoSchemaResponse.safeParse(data);

        if (result.success) {
            return {
                data: result.data.data,
                success: true,
                msg: result.data.msg
            }
        } else {
            return {
                success: false,
                msg: 'Error del servidor'
            }
        }
    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            const {data} = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            } else {
                return {
                    success: false,
                    msg: 'Error del servidor'
                }
            }
        }

        return {
            success: false,
            msg: 'Error de conexión, verifica tu internet'
        }
    }
}

export async function editarProducto(data: ProductoData, id: ProductoType['id']) : Promise<RespuestaEditarProductoType> {
    try {

        const result = FormEditarProductoSchema.safeParse({
            id: id,
            name: data.name,
            price: data.price,
            disponibilidad: data.disponibilidad
        })


        if (result.success) {
            const url = `${import.meta.env.VITE_BACKEND_URL}/productos/${id}`;
           
            const { data } = await axios.put(url, {
                name: result.data.name,
                price: result.data.price,
                disponibilidad: result.data.disponibilidad
            })

            const resultado = ProductoEditarSchemaResponse.safeParse(data);

            if (resultado.success) {
                return {
                    success: true,
                    data: resultado.data.data,
                    msg: resultado.data.msg
                }
            } else {
                return {
                    success: false,
                    msg: 'Error del servidor'
                }
            }

        } else {
            return {
                    success: false,
                    msg: 'Datos no válidos'
                }
        }

    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            const {data} = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            }

            return {
                success: false,
                msg: 'Error del servidor'
            }
        }

        return {
            success: false,
            msg: 'Error de conexión, verifica tu internet'
        }
    }
}

export async function eliminarProducto(id: ProductoType['id']) : Promise<RespuestaEliminarProductoType>{
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/productos/${id}`;
        const { data } = await axios.delete(url);

        const result = ProductoEliminarSchemaResponse.safeParse(data);

        if (result.success) {
            return {
                success: true,
                data: result.data.data,
                msg: result.data.msg
            }
        } else {
            return {
                success: false,
                msg: 'Hubo un error al validar los campos'
            }
        }

    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            const {data} = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            } else {
                return {
                    success: false,
                    msg: 'Error del servidor'
                }
            }
        }

        return {
            success: false,
            msg: 'Error de conexión, verifica tu internet'
        }
    }
}

export async function editarDisponibilidad(id: ProductoType['id']) : Promise<RespuestaEditarDisponibilidadProductoType>{
    try {

        const url = `${import.meta.env.VITE_BACKEND_URL}/productos/${id}`;
        const { data } = await axios.patch(url);

        const result = ProductoDisponibilidadSchemaResponse.safeParse(data)

        if (result.success) {
            return {
                success: true,
                data: result.data.data,
                msg: result.data.msg
            }
        } else {
            return {
                success: false,
                msg: 'Error del servidor'
            }
        }
    } catch (error) {
        if(axios.isAxiosError(error) && error.response){
            const {data} = error.response;
            const result = ServerErrorResponse.safeParse(data);

            if(result.success){
                return {
                    success: false,
                    msg: result.data.msg
                }
            } else {
                return {
                    success: false,
                    msg: 'Error del servidor'
                }
            }
        }

        return {
            success: false,
            msg: 'Error de conexión, verifica tu internet'
        }
    }
}