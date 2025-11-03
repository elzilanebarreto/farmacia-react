function Navbar() {
  return (
    <div
        className="w-full flex justify-center py-4 
                      bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          {/* <Link to="/home" className="hover:underline text-2xl font-bold">
          </Link> */}
          Projeto Farmacia

          <div className="flex gap-4">
            {/* <Link to="/postagens" className="hover:underline"></Link> */}
            Listar Categorias
            Cadastrar Categoria
            {/* Sair */}
          </div>
        </div>
      </div>
  )
}

export default Navbar