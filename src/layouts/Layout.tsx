import { Outlet } from "react-router-dom"
import { ToastContainer, Bounce } from "react-toastify"
import 'react-toastify'

export default function Layout() {
    return (
        <>
            <header className="bg-slate-700">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10 
                        flex flex-col sm:flex-row 
                        sm:items-center sm:justify-between 
                        gap-4 sm:gap-0">

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                        Administrador de Productos
                    </h1>

                    <button
                        onClick={() => window.open(`${import.meta.env.VITE_BACKEND_URL}/docs`, '_blank')}
                        className="bg-white text-slate-700 font-semibold px-4 py-2 
                           rounded-lg shadow hover:bg-slate-100 transition
                           w-full sm:w-auto"
                    >
                        Documentación API
                    </button>

                </div>
            </header>

            <main className="mt-4 sm:mt-6 lg:mt-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:p-10 bg-white shadow-sm sm:shadow">
                <Outlet />
            </main>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    )
}
