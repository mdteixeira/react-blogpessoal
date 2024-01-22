function FormularioTema() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="my-8 text-4xl text-center">Cadastrar tema</h1>

      <form className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do tema</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="p-2 border-2 rounded border-slate-700"
          />
        </div>
        <button
          className="block w-1/2 py-2 mx-auto bg-indigo-400 rounded text-slate-100 hover:bg-indigo-800"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioTema;
