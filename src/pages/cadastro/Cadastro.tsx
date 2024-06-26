import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../utils/toastAlerta';
import InfoServer from '../../components/infoserver';

function Cadastro() {
  useEffect(() => {
    document.title = 'ZetaBlog - Boas-vindas!';
  }, []);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(usuario);
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
    console.log(confirmaSenha);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        toastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error) {
        toastAlerta('Erro ao cadastrar o usuário!', 'erro');
      }
    } else {
      toastAlerta(
        'Dados estão inconsistentes. Verifique as informações do cadastro',
        'erro'
      );
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid h-screen grid-cols-1 font-bold place-items-center ">
        <div className="flex justify-center items-center  flex-col gap-8 w-full mx-auto lg:max-w-[1000px]">
          <div className="text-2xl font-bold flex items-center">
            <img src="Logo.png" className="h-16" alt="" />
            <h1 className="text-3xl">ZetaBlog</h1>
          </div>
            <InfoServer />
          <hr className="border-primary-300 w-full" />
          <form
            className="w-11/12 md:w-3/5  flex flex-col items-center justify-center gap-4 rounded-3xl"
            onSubmit={cadastrarNovoUsuario}
          >
            <h2 className="text-5xl text-slate-900 mb-8">Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="p-3 border-2 rounded-2xl "
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="p-3 border-2 rounded-2xl "
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="p-3 border-2 rounded-2xl "
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="p-3 border-2 rounded-2xl "
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="p-3 border-2 rounded-2xl "
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8 mt-4">
              <button
                className="w-1/2 py-3 text-white bg-red-400 rounded-2xl hover:bg-red-600"
                onClick={retornar}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex justify-center w-1/2 py-3 text-white bg-primary-400 rounded-2xl hover:bg-primary-500"
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  <span>Cadastrar</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
