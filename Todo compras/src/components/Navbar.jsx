const Navbar = () => {
  return (
    <nav className="w-full h-14 hidden lg:flex p-4 justify-between fixed z-10">

    <div className="h-auto w-auto">
    <p className="text-xl text-sky-500 font-black">Ferre Insumos Emprendimiento Luciana Cadenas</p>   
     </div>
    <div className='flex space-x-8 me-36'>
        <a className='font-bold text-md text-white' href="#Home">Inicio</a>
        <a className='font-bold text-md text-white' href="#Sobre Nosotros">Sobre Nosotros</a>
        <a className='font-bold text-md text-white' href="#Productos">Productos</a>
        <a className='font-bold text-md text-white' href="Contactos">Contáctanos</a>

    </div>
    </nav>
  )
}

export default Navbar
