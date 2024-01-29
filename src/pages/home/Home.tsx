import homeLogo from '../../assets/home.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
  useEffect(() => {
    document.title = 'Blog Pessoal - Início';
  }, []);

  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="bg-primary-600 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center py-4 h-100 justify-evenly">
            <div className="text-center flex flex-col gap-5">
              <h2 className="text-5xl font-bold text-center">
                Boas-Vindas, {usuario.nome.length > 0 ? usuario.nome : 'blogger!'}!
              </h2>
              <hr className="border-primary-500" />
              <p>Expresse suas opiniões aqui!</p>
            </div>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to={'/postagens'}>
                <button className="rounded-3xl bg-white text-slate-800 py-2 px-4">
                  Ver postagens
                </button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
