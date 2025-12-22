import { createBrowserRouter } from 'react-router-dom'

//COMPONENTES
import Layout from './layouts/Layout'
import Productos from './views/Productos'
import NuevoProducto from './views/NuevoProducto'
import EditarProducto from './views/EditarProducto'

//LOADERS
import {loader as obtenerProductos} from './loaders/productosLoader'
import {loader as editarProductoLoader} from './loaders/obtenerProductoLoader';

//ACTIONS
import {action as editarDisponibilidad} from './actions/editarDisponibilidadAction'
import {action as eliminarProducto} from './actions/eliminarProductoAction'
import {action as editarProductoAction} from './actions/editarProductoAction';
import {action as nuevoProductoAction} from './actions/crearProductoAction';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Productos/>,
                loader: obtenerProductos,
                action: editarDisponibilidad
            },
            {
                path: 'productos/nuevo',
                element: <NuevoProducto/>,
                action: nuevoProductoAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource-oriented design
                element: <EditarProducto/>,
                loader: editarProductoLoader,
                action: editarProductoAction
            },{
                path: 'productos/:id/eliminar',
                action: eliminarProducto
            }
        ]
    }
])