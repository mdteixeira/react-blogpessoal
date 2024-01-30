import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormularioPostagem() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null,
  });

  async function buscarPostagemPorId(id: string) {
    await buscar(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemaPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {
    await buscar('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      console.log('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarPostagemPorId(id);
      console.log(tema);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/postagens');
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ postagem });

    if (id != undefined) {
      try {
        await atualizar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Postagem atualizada com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente');
          handleLogout();
        } else {
          alert('Erro ao atualizar a Postagem');
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        alert('Postagem cadastrada com sucesso');

        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente');
          handleLogout();
        } else {
          alert('Erro ao cadastrar a Postagem');
        }
      }
    }
  }

  const carregandoTema = tema.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center mb-8">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? 'Editar Postagem' : 'Criar Postagem'}
      </h1>

      <form onSubmit={gerarNovaPostagem} className="flex flex-col w-1/2">
        <div className="input-group border rounded-3xl pl-5 pr-2 py-1">
          <div className="flex flex-col gap-2 relative">
            <input
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Titulo"
              name="titulo"
              required
              className="p-2 text-2xl font-bold"
              multiple
            />
            <span
              className={
                postagem.titulo.length < 5 || postagem.titulo.length > 100
                  ? 'absolute text-xs top-1 right-1 px-1 bg-slate-200 bg-opacity-50 rounded-2xl text-red-500'
                  : 'absolute text-xs top-1 right-1 px-1 bg-slate-200 bg-opacity-50 rounded-2xl'
              }
            >
              {postagem.titulo.length}/100
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-2 relative">
            <input
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Texto"
              name="texto"
              required
              className="p-2"
            />
            <span
              className={
                postagem.texto.length < 10 || postagem.texto.length > 100
                  ? 'absolute text-xs top-1 right-1 px-1 bg-slate-200 bg-opacity-50 rounded-2xl text-red-500'
                  : 'absolute text-xs top-1 right-1 px-1 bg-slate-200 bg-opacity-50 rounded-2xl'
              }
            >
              {postagem.texto.length}/100
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5 border rounded-2xl">
          <select
            name="tema"
            id="tema"
            className="p-3 px-3 mr-3 border-transparent rounded-2xl"
            onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um tema
            </option>
            {temas.map((tema) => (
              <>
                <option value={tema.id}>{tema.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button
          disabled={carregandoTema}
          type="submit"
          className="rounded-xl disabled:opacity-50 bg-primary-400 hover:bg-primary-600 text-white font-bold w-1/2 mx-auto block py-3 mt-5"
        >
          {carregandoTema ||
          postagem.titulo.length <= 5 ||
          postagem.titulo.length >= 100 ||
          postagem.texto.length <= 10 ||
          postagem.texto.length >= 100 ? (
            <span>Aguardando</span>
          ) : id !== undefined ? (
            'Editar'
          ) : (
            'Cadastrar'
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioPostagem;
