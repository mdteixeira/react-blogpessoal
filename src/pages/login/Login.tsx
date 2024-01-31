import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  useEffect(() => {
    document.title = 'ZetaBlog - Login';
  }, []);

  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  useEffect(() => {
    if (usuario.token !== '') {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="grid h-screen grid-cols-1 font-bold lg:grid-cols-2 place-items-center ">
        <div className="flex justify-center items-center  flex-col gap-8 w-full mx-auto">
          <div className="text-2xl font-bold flex items-center">
            <img src="Logo.png" className="h-16" alt="" />
            <h1 className="text-3xl">ZetaBlog</h1>
          </div>
          <form
            className="flex flex-col items-center justify-center w-3/5 gap-4 border p-12 rounded-3xl"
            onSubmit={login}
          >
            <hr className="border-primary-300" />
            <h2 className="text-5xl text-slate-900 lg:mb-8">Entrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="p-3 border-2 rounded-2xl"
                value={usuarioLogin.usuario}
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
                className="p-3 border-2 rounded-2xl"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button
              type="submit"
              className="flex justify-center w-1/2 py-3 mt-5 text-white bg-primary-400 rounded-2xl hover:bg-primary-600"
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
                <span>Entrar</span>
              )}
            </button>

            <hr className="w-full my-5 border-slate-200" />

            <p>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-indigo-700 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
        <div className="hidden fundoLogin lg:block"></div>
      </div>
    </>
  );
}

export default Login;
