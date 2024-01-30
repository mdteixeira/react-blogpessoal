import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { toastAlerta } from '../../utils/toastAlerta';

function Cadastro() {
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
      <div className="grid h-screen grid-cols-1 font-bold lg:grid-cols-2 place-items-center">
        <div className="hidden fundoCadastro lg:block"></div>
        <form
          className="flex flex-col items-center justify-center w-2/3 gap-3"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-5xl text-slate-900">Cadastrar</h2>
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
          <div className="flex justify-around w-full gap-8">
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
    </>
  );
}

export default Cadastro;
