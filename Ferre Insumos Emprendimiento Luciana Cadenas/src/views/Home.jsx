import Navbar from '../components/Navbar/Navbar'
import portada from '../assets/imagen 10.jpg'
const Home = () => {
  return (
    <div className='relative w-full h-full'>
    <Navbar/>
    <div className='flex flex-col lg:flex-row w-full h-96'>
      <img className='w-full lg:w-1/2 h-96 object-cover' src={portada} alt="imagen principal" />
      <div className='flex flex-col justify-center items-start p-4 lg:p-8 bg-black bg-opacity-50 lg:w-1/2'>
        <p className='text-white text-xl font-bold mb-4 transition transform duration-500 hover:scale-105 hover:translate-x-2'>Construye con lo mejor, construye con Ferre Insumos.</p>
        <p className='text-white transition transform duration-500 hover:scale-105 hover:translate-x-2'>
          En Ferre Insumos Emprendimiento Luciana Cadenas, contamos con una amplia gama de herramientas y materiales para la construcción, 
          así como insumos y herramientas especializadas para herrería. Todo lo que necesitas para llevar a cabo tus proyectos, 
          desde la construcción hasta trabajos de herrería, lo encontrarás en un solo lugar. Confía en nosotros para equiparte con productos de calidad y al mejor precio.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Home
