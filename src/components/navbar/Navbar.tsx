import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();

  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    navigate('/login');
  }

  return (
    <>
      <div className="flex justify-center w-full py-4 text-white bg-indigo-900">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold">
            <Link to="/home" className="text-2xl font-bold">
              Blog Pessoal
            </Link>
          </div>

          <div className="flex gap-4">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <div className="hover:underline">Postagens</div>
            <div className="hover:underline">Temas</div>
            <div className="hover:underline">Cadastrar tema</div>
            <div className="hover:underline">Perfil</div>
            <Link to="/" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
