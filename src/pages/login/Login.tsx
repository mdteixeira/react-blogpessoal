import './Login.css';

function Login() {
  
  return (
    <>
      <div className="grid h-screen grid-cols-1 font-bold lg:grid-cols-2 place-items-center ">
        <form className="flex flex-col items-center justify-center w-1/2 gap-4" >
          <h2 className="text-5xl text-slate-900 ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
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
          <button  type='submit' className="flex justify-center w-1/2 py-2 text-white bg-indigo-400 rounded hover:bg-indigo-900">
            <span>Entrar</span>
          </button>

          <hr className="w-full border-slate-800" />

          <p>
            Ainda não tem uma conta?{' '}
           
          </p>
        </form>
        <div className="hidden fundoLogin lg:block"></div>
      </div>
    </>
  );
}

export default Login;