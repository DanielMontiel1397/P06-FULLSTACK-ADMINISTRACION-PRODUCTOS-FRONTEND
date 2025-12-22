import { z} from 'zod'

//ERRORES
export const ServerErrorResponse = z.object({
    msg: z.string()
})

//SCHEMA CREAR PRODUCTO

export const Producto= z.object({
    id: z.number(),
    createdAt: z.string(),
    name: z.string(),
    price: z.coerce.number(),
    disponibilidad: z.boolean()
})

export const FormProductSchema = z.object({
    name: z.string(),
    price: z.number()
})

export const ProductoCrearSchemaResponse = z.object({
    data: Producto,
    msg: z.string()
})

//OBTENER PRODUCTOS SCHEMA
export const ProductosSchema = z.object({
    data: z.array(Producto),
    msg: z.string()
})

//OBTENER PRODUCTO POR ID SCHEMA

export const GetProductoById = Producto.extend({
    updatedAt: z.string()
})
export const ProductoSchemaResponse = z.object({
    data: GetProductoById,
    msg: z.string()
})


//EDICION PRODUCTOS SCHEMAS

export const FormEditarProductoSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.coerce.number(),
    disponibilidad: z.string().transform(val => val === 'true')
})

export const ProductoEditar = Producto.extend({
    price: z.number(),
    updatedAt: z.string()
})

export const ProductoEditarSchemaResponse = z.object({
    data: ProductoEditar,
    msg: z.string()
})


//ELIMINAR PRODUCTOS SCHEMAS

export const ProductoEliminarSchemaResponse = z.object({
    data: GetProductoById,
    msg: z.string()
})


//EDITAR DISPONIBILIDAD SCHEMA
export const ProductoDisponibilidadSchemaResponse = z.object({
    data: GetProductoById,
    msg: z.string()
})