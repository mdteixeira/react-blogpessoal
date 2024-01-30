import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';

function DeletarTema() {
  const [tema, setTema] = useState<Tema>({} as Tema);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
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

  useEffect(() => {
    if (token === '') {
      console.log('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate('/temas');
  }

  async function deletarTema() {
    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta('Tema apagado com sucesso', 'sucesso');
    } catch (error) {
      toastAlerta('Erro ao apagar o Tema', 'erro');
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="my-4 text-4xl text-center">Deletar tema</h1>

      <p className="mb-4 font-semibold text-center">
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>

      <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
        <p className="h-full p-8 text-3xl">{tema.descricao}</p>
        <div className="flex">
          <button
            className="w-full py-2 bg-primary-200 hover:bg-primary-400"
            onClick={retornar}
          >
            Não, voltar
          </button>
          <button
            className="flex items-center justify-center w-full bg-red-400 text-slate-100 hover:bg-red-600"
            onClick={deletarTema}
          >
            Deletar tema
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
