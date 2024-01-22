import { Link } from 'react-router-dom';

export default function CardTemas() {
  return (
    <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
      <header className="px-6 py-2 text-2xl font-bold text-white bg-indigo-800">
        Tema
      </header>
      <p className="h-full p-8 text-3xl bg-slate-200">Descricao tema:</p>

      <div className="flex">
        <Link
          to="/"
          className="flex items-center justify-center w-full py-3 bg-indigo-400 text-slate-100 hover:bg-indigo-800"
        >
          <button>Editar</button>
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center w-full py-3 bg-red-400 text-slate-100 hover:bg-red-700"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}
