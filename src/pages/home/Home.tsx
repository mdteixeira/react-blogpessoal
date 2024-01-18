import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Home() {
    useEffect(() => {
        document.title = 'Blog Pessoal - Início';
    }, []);

    const { usuario } = useContext(AuthContext);

    return (
        <>
            <div id="container" className="flex justify-center bg-indigo-900">
                <div
                    id="subcontainer"
                    className="container grid grid-cols-2 text-white "
                >
                    <div
                        id="texto"
                        className="flex flex-col items-center gap-4 text-center justify-evenly"
                    >
                        <section
                            id="top"
                            className="flex flex-col items-center gap-5"
                        >
                            <h2 className="text-5xl font-bold">
                                Boas vindas,{' '}
                                {usuario.nome.length > 0
                                    ? usuario.nome
                                    : 'blogger!'}
                            </h2>
                            <p className="text-xl">
                                Expresse aqui os seus pensamentos e opiniões
                            </p>
                        </section>
                        <div className="flex justify-around gap-4">
                            <button className="px-4 py-2 bg-white rounded-xl text-slate-800">
                                Ver postagens
                            </button>
                            <div className="px-4 py-2 text-white border-2 border-white border-solid rounded-xl">
                                Nova Postagem
                            </div>
                        </div>
                    </div>
                    <figure id="imagem" className="flex justify-center">
                        <img
                            className="max-w-[66.66%] h-auto"
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da página Inicial"
                        />
                    </figure>
                </div>
            </div>
        </>
    );
}

export default Home;
