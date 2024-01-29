import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { SignOut, User } from 'phosphor-react';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  let navbarComponent;

  const [Show, setShow] = useState(false);

  if (usuario.token !== '') {
    navbarComponent = (
      <div className="w-full bg-primary-600 text-white flex justify-center py-2">
        <div className="container flex justify-between text-lg items-center">
          <Link to="/home" className="text-2xl font-bold uppercase">
            Blog Pessoal
          </Link>

          <div className="flex gap-4 items-center">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastroTema" className="hover:underline">
              Cadastrar tema
            </Link>
            <div className="user relative">
              <img
                src={usuario?.foto}
                className="h-10 w-10 rounded-full"
                alt=""
                onClick={() => setShow(!Show)}
              />
              <div
                className={
                  Show
                    ? 'flex flex-col gap-2 border-2 bg-white border-primary-500 absolute text-slate-900 p-5 rounded-2xl right-0 mt-2 z-[60] w-64'
                    : 'hidden'
                }
              >
                <Link
                  to=""
                  onClick={logout}
                  className="hover:underline flex gap-3 items-center justify-between"
                >
                  Perfil
                  <span>
                    <User size={16} className="text-primary-700" weight="bold" />
                  </span>
                </Link>
                <hr />
                <Link
                  to=""
                  onClick={logout}
                  className="hover:underline flex gap-3 items-center justify-between"
                >
                  Sair
                  <span>
                    <SignOut size={16} className="text-primary-700" weight="bold" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
