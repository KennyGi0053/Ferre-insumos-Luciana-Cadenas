const Navbar = () => {
  return (
    <nav className="w-full h-14 hidden lg:flex p-4 justify-between fixed z-10">

    <div className="h-auto w-auto">
    <p className="text-3xl text-gray-100 font-black">Ferre Insumos </p> 
    <p className="text-base text-gray-100">Emprendimiento Luciana Cadenas</p>  
     </div>
    <div className='flex space-x-8 me-56'>
        <a className='font-bold text-md text-white hover:underline hover:decoration-white hover:underline-offset-4' href="#Home">Inicio</a>
        <a className='font-bold text-md text-white hover:underline hover:decoration-white hover:underline-offset-4' href="#Sobre Nosotros">Sobre Nosotros</a>
        <a className='font-bold text-md text-white hover:underline hover:decoration-white hover:underline-offset-4' href="#Productos">Productos</a>
        <a className='font-bold text-md text-white hover:underline hover:decoration-white hover:underline-offset-4' href="Contactos">Contáctanos</a>

    </div>
    </nav>
  )
}

export default Navbar
