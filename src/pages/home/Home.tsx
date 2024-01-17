function Home() {
    return (
        <>
            <div id="container" className="flex justify-center bg-indigo-900">
                <div
                    id="subcontainer"
                    className="container grid grid-cols-2 text-white "
                >
                    <div
                        id="texto"
                        className="flex flex-col items-center justify-center gap-4 py-4"
                    >
                        <h2 className="text-5xl font-bold">
                            Boas vindas, blogger!
                        </h2>
                        <p className="text-xl">
                            Expresse aqui os seus pensamentos e opiniões
                        </p>
                        <div className="flex justify-around gap-4">
                            <button className="px-4 py-2 text-blue-800 bg-white rounded">
                                Ver postagens
                            </button>
                            <div className="px-4 py-2 text-white border-2 border-white border-solid rounded">
                                Nova Postagem
                            </div>
                        </div>
                    </div>
                    <figure id="imagem" className="flex justify-center">
                        <img
                            className="w-2/3"
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
