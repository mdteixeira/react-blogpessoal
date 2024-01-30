import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import { buscar } from '../../../services/Service';
import CardPostagem from '../cardPostagens/CardPostagem';
import { toastAlerta } from '../../../utils/toastAlerta';

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      console.log('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'erro');
        handleLogout();
      }
    }
  }

  let skeleton = (
    <div className="border flex flex-col rounded-3xl overflow-hidden justify-between relative">
      <div className="h-full flex flex-col justify-between">
        <div className="flex w-full pt-2 px-2 items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-neutral-200 animate-pulse" />
          <div>
            <h3 className="text-lg font-bold leading-5 flex gap-3 items-center bg-neutral-200 animate-pulse rounded-md text-transparent">
              Nome usuario
            </h3>
            <p className="bg-neutral-200 animate-pulse rounded-md text-transparent w-24 mt-2 leading-4">
              @Usuario
            </p>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 my-2">
            <h4 className="text-lg font-semibold bg-neutral-200 animate-pulse rounded-md text-transparent leading-6">
              Título da Postagem
            </h4>
            <p className="bg-neutral-200 animate-pulse rounded-md text-transparent mt-2">
              Texto da postagem Texto da postagem Texto da Postagem
            </p>
          </div>
          <div className="flex w-auto justify-between text-sm text-neutral-600 px-4 py-2 bg-neutral-50">
            <p className="bg-neutral-200 animate-pulse rounded-md text-transparent">
              Tema da postagem
            </p>
            <p className="bg-neutral-200 animate-pulse rounded-md text-transparent">
              00/00/00, 00:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  function loading() {
    var loading = [];
    for (let i = 0; i < 18; i++) {
      loading.push(skeleton);
    }
    return loading;
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);
  return (
    <>
      {postagens.length === 0 && (
        <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading()}
        </div>
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  );
}

export default ListaPostagens;
