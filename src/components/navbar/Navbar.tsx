import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Hamburger, List, SignOut, User } from 'phosphor-react';
import Popup from 'reactjs-popup';
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'info');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario.token !== '') {
    navbarComponent = (
      <div className="w-full bg-primary-600 text-white flex justify-between py-2 items-center px-3 lg:px-8">
        <Popup
          trigger={<List size={32} className="md:hidden" />}
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          position={'bottom left'}
          contentStyle={{ padding: '0px', border: 'none' }}
          arrow={false}
        >
          <div className="p-8 flex flex-col gap-8">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastroTema" className="hover:underline">
              Cadastrar tema
            </Link>
          </div>
        </Popup>
        <Link to="/home" className="text-2xl font-bold flex items-center">
          <img src="Logo.png" className="h-12" alt="" />
          <h1>ZetaBlog</h1>
        </Link>
        <div className="container hidden md:flex w-full justify-between text-lg items-center">
          <div className="flex justify-center w-full gap-4 items-center">
            <Link to="/postagens" className="hover:underline">
              Postagens
            </Link>
            <Link to="/temas" className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastroTema" className="hover:underline">
              Cadastrar tema
            </Link>
          </div>
        </div>
        <div className="user relative">
          <Popup
            trigger={
              <img
                src={usuario?.foto}
                className="h-10 w-10 rounded-full object-cover"
                alt=""
              />
            }
            position="bottom right"
            closeOnDocumentClick
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false}
          >
            <div
              className={
                'flex flex-col gap-2 border-2 bg-white border-primary-500 absolute text-slate-900 p-5 rounded-2xl right-0 mt-2 z-[60] w-64'
              }
            >
              <Link
                to="/perfil"
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
          </Popup>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
