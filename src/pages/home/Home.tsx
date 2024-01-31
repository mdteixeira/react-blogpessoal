import homeLogo from '../../assets/home.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../utils/toastAlerta';

function Home() {
  useEffect(() => {
    document.title = 'ZetaBlog - Início';
  }, []);

  const { usuario } = useContext(AuthContext);

  return (
    <>
      <div className="bg-primary-600 flex justify-center text-white py-8">
        <div
          id="grid-left"
          className="flex flex-col gap-4 items-center py-4 h-100 justify-evenly"
        >
          <div className="text-center flex flex-col gap-5">
            <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold text-center">
              Boas-Vindas, {usuario.nome.length > 0 ? usuario.nome : 'blogger!'}!
            </h2>
            <hr className="border-primary-500" />
            <p>Expresse suas opiniões aqui!</p>
          </div>

          <div id="buttons-main" className="flex justify-around gap-4">
            <ModalPostagem />
            <Link to={'/postagens'}>
              <button className="rounded-3xl bg-white text-slate-800 py-2 px-4">
                Ver postagens
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
