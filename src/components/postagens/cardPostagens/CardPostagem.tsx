import { Link } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { DotsThree, PencilSimple, TrashSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  const [Show, setShow] = useState(false);
  const { usuario } = useContext(AuthContext);

  return (
    <div className="border flex flex-col rounded-3xl overflow-hidden justify-between relative">
      <DotsThree
        size={32}
        className="absolute right-0 top-0 m-2 bg-neutral-200 bg-opacity-0 hover:bg-opacity-100 rounded-full z-10"
        onClick={() => setShow(!Show)}
      />
      <div className="h-full flex flex-col justify-between">
        <div className="flex w-full pt-2 px-2 items-center gap-4">
          <img src={post.usuario?.foto} className="h-12 w-12 rounded-2xl" alt="" />
          <div>
            <h3 className="text-lg font-bold leading-5 flex gap-3 items-center">
              {post.usuario?.nome}
              <span className="text-xs text-slate-400 font-normal"></span>
            </h3>
            <p>
              @{post.usuario?.usuario.substring(0, post.usuario?.usuario.indexOf('@'))}
            </p>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 my-2">
            <h4 className="text-lg font-semibold">{post.titulo}</h4>
            <p className="">{post.texto}</p>
          </div>
          <div className="flex w-auto justify-between text-sm text-neutral-600 px-4 py-2 bg-neutral-50">
            <p>{post.tema?.descricao}</p>
            <p>
              {new Intl.DateTimeFormat('br', {
                dateStyle: 'short',
                timeStyle: 'short',
              }).format(new Date(post.data))}
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          Show && post.usuario?.id == usuario.id
            ? 'flex absolute right-0 p-2 rounded-3xl pr-12'
            : 'hidden'
        }
      >
        <Link
          to={`/editarPostagem/${post.id}`}
          className="w-full text-white bg-primary-400 hover:bg-primary-500 flex items-center justify-center px-2 rounded-s-full"
        >
          <button>
            <PencilSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
        <Link
          to={`/deletarPostagem/${post.id}`}
          className="text-white bg-red-500 hover:bg-red-600 w-full flex items-center justify-center px-2 rounded-e-full"
        >
          <button>
            <TrashSimple size={32} weight="bold" className="p-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
