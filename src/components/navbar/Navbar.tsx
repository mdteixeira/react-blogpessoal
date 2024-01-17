import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='flex justify-center w-full py-4 text-white bg-indigo-900'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Postagens</div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar