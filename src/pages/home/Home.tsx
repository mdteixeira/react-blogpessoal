function Home() {
    return (
        <>
            <div>
                <div
                    id="container"
                    style={{
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div id="subcontainer">
                        <div
                            style={{
                                width: '80vw',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <h1>Seja bem-vinde!</h1>
                            <p>Expresse aqui os seus pensamentos e opiniões</p>
                        </div>
                        <div
                            style={{
                                width: '80vw',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="https://i.imgur.com/VpwApCU.png"
                                alt="Imagem da página Inicial"
                                width="400px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
