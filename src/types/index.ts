import { z} from 'zod'
import type { GetProductoById, ProductoEditarSchemaResponse, ProductoEliminarSchemaResponse, ProductoSchemaResponse, ProductosSchema, ServerErrorResponse, Producto, ProductoDisponibilidadSchemaResponse } from '../schemas/productSchema'

//TYPES ERROR SERVIDOR
export type ServerErrorResponseType = z.infer<typeof ServerErrorResponse>

//TYPES CREAR PRODUCTO
export type ProductoResponseType = z.infer<typeof ProductoSchemaResponse>

export type RespuestaCreateErrorType = {
    success: false,
    msg: string
}
export type RespuestaCreateCorrectaType = {
    success: true,
    msg: string
}

export type RespuestaCreateType = RespuestaCreateErrorType | RespuestaCreateCorrectaType;

//TYPE PARA OBTENER PRODUCTOS

export type ProductoCreateType = z.infer<typeof Producto>

export type ProductosResponseType = z.infer<typeof ProductosSchema>

export type RespuestaGetErrorType = {
    success: false,
    msg: string
}
export type RespuestaGetCorrectaType = {
    data: ProductoCreateType[],
    success: true,
    msg: string
}

export type RespuestaGetType = RespuestaGetErrorType | RespuestaGetCorrectaType;

//TYPES OBTENER PRODUCTO POR ID

export type ProductoType = z.infer<typeof GetProductoById>;

export type RespuestaGetProductoErrorType = {
    success: false,
    msg: string
}

export type RespuestaGetProductoCorrectoType = {
    data: ProductoType,
    success: true,
    msg: string
}

export type RespuestaGetProductoType = RespuestaGetProductoCorrectoType | RespuestaGetProductoErrorType;


//TYPES PARA EDITAR UN PRODUCTO POR SU ID

export type ProductoResponseEditarType = z.infer<typeof ProductoEditarSchemaResponse>;

export type RespuestaEditarProductoErrorType = {
    success: false,
    msg: string
}

export type RespuestaEditarProductoCorrectoType = {
    data: ProductoType,
    success: true,
    msg: string
}

export type RespuestaEditarProductoType = RespuestaEditarProductoCorrectoType | RespuestaEditarProductoErrorType;

//TYPES ELIMINAR PRODUCTO

export type ProductoResponseEliminarType = z.infer<typeof ProductoEliminarSchemaResponse>

export type RespuestaEliminarProductoErrorType = {
    success: false,
    msg: string
}

export type RespuestaEliminarProductoCorrectoType = {
    data: ProductoType,
    success: true,
    msg: string
}

export type RespuestaEliminarProductoType = RespuestaEliminarProductoCorrectoType | RespuestaEliminarProductoErrorType;

//TYPES EDITAR DISPONIBILIDAD DE PRODUCTO
export type ProductoResponseEditarDisponibilidadType = z.infer<typeof ProductoDisponibilidadSchemaResponse>

export type RespuestaEditarDisponibilidadProductoErrorType = {
    success: false,
    msg: string
}

export type RespuestaEditarDisponibilidadProductoCorrectoType = {
    data: ProductoType,
    success: true,
    msg: string
}

export type RespuestaEditarDisponibilidadProductoType = RespuestaEditarDisponibilidadProductoCorrectoType | RespuestaEditarDisponibilidadProductoErrorType;

