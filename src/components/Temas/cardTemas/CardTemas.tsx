import { Link } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { DotsThree, PencilSimple, TrashSimple } from 'phosphor-react';
import { useState } from 'react';

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  const [Show, setShow] = useState(false);
  return (
    <div className="flex flex-col justify-between overflow-hidden border rounded-3xl relative">
      <DotsThree
        size={32}
        className="absolute right-0 top-0 m-2 bg-primary-200 bg-opacity-0 hover:bg-opacity-100 rounded-full z-10"
        onClick={() => setShow(!Show)}
      />
      <p className="h-full p-4 px-8 text-3xl -bold">{tema.descricao}</p>
      <div className={Show ? 'flex absolute right-0 p-2 pr-12' : 'hidden'}>
        <Link
          to={`/editarTema/${tema.id}`}
          className="flex px-2 rounded-s-full items-center justify-center w-full bg-primary-400 text-slate-100 hover:bg-primary-500"
        >
          <button>
            <PencilSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
        <Link
          to={`/deletarTema/${tema.id}`}
          className="flex px-2 rounded-e-full items-center justify-center w-full bg-red-500 text-slate-100 hover:bg-red-600"
        >
          <button>
            <TrashSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
