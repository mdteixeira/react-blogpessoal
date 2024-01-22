import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
      <header className="px-6 py-2 text-2xl font-bold text-white bg-indigo-800">
        Tema
      </header>
      <p className="h-full p-8 text-3xl bg-slate-200">{tema.descricao}</p>
      <div className="flex">
        <Link
          to={`/editarTema/${tema.id}`}
          className="flex items-center justify-center w-full py-2 bg-indigo-400 text-slate-100 hover:bg-indigo-800"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="flex items-center justify-center w-full bg-red-400 text-slate-100 hover:bg-red-700"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
