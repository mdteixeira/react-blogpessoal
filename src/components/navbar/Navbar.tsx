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
            <Link to={'/'} className="hover:underline">Postagens</Link>
            <Link to={'/temas'} className="hover:underline">Temas</Link>
            <Link to={'/'} className="hover:underline">Cadastrar tema</Link>
            <Link to={'/'} className="hover:underline">Perfil</Link>
            <Link to="/" onClick={logout} className="hover:underline">Sair</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
