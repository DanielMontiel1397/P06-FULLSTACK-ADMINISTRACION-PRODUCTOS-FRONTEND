// paginas/NotFound.tsx
import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <div className="flex h-max-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-gray-700">404</h1>
      <p className="mt-4 text-xl text-gray-500">
        La página que buscas no existe.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-bold shadow hover:bg-indigo-500 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}