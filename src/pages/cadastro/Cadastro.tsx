import './Cadastro.css';

function Cadastro() {
    return (
        <>
            <div className="grid h-screen grid-cols-1 font-bold lg:grid-cols-2 place-items-center">
                <div className="hidden fundoCadastro lg:block"></div>
                <form className="flex flex-col items-center justify-center w-2/3 gap-3">
                    <h2 className="text-5xl text-slate-900">Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="p-2 border-2 rounded border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="p-2 border-2 rounded border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="p-2 border-2 rounded border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="p-2 border-2 rounded border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="p-2 border-2 rounded border-slate-700"
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className="w-1/2 py-2 text-white bg-red-400 rounded hover:bg-red-700">
                            Cancelar
                        </button>
                        <button
                            className="w-1/2 py-2 text-white bg-indigo-400 rounded hover:bg-indigo-900"
                            type="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Cadastro;
