import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/login.jpg';
import { toastAlerta } from '../../utils/toastAlerta';
import ListaPostagensPerfil from '../../components/postagens/listaPostagens/ListaPostagensPerfil';
import { DotsThree, PencilSimple, TrashSimple } from 'phosphor-react';
import Popup from 'reactjs-popup';
function Perfil() {
  let navigate = useNavigate();

  useEffect(() => {
    document.title = 'ZetaBlog - Seu Perfil';
  }, []);

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === '') {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate('/login');
    }
  }, [usuario.token]);

  return (
    <>
      <div className="container mx-auto mt-4 rounded-3xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src={loginLogo}
          alt="Capa do Perfil"
        />
        <img
          src={usuario.foto}
          alt={`Foto de perfil de ${usuario.nome}`}
          className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
        />
        <div className="relative mt-[-6rem] h-72 flex flex-col bg-primary-500 text-white text-2xl items-center justify-center">
          <Popup
            trigger={
              <DotsThree
                size={32}
                className="absolute right-0 top-0 m-2 bg-primary-400 bg-opacity-0 hover:bg-opacity-100 rounded-full z-10"
              />
            }
            position="left top"
            closeOnDocumentClick
            contentStyle={{ padding: '0px', border: 'none' }}
            arrow={false}
          >
            <div className={'flex absolute right-0 pr-2 rounded-3xl'}>
              <button
                className="w-full text-white bg-primary-400 bg-opacity-50 hover:bg-opacity-100 flex items-center justify-center px-2 rounded-full"
                onClick={() => {
                  toastAlerta('Não foi implementado ainda :(', 'info');
                }}
              >
                <button>
                  <PencilSimple size={32} weight="bold" className="p-2" />
                </button>
              </button>
            </div>
          </Popup>
          <p>{usuario.nome} </p>
          <p>{usuario.usuario}</p>
        </div>
      </div>
      {/* <ListaPostagensPerfil /> */}
    </>
  );
}

export default Perfil;
