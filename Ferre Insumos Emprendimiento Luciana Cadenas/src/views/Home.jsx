import Navbar from '../components/Navbar/Navbar'
import portada from '../assets/imagen 4.jpg'
const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar/>
    <div className='justify-center items-center '>
        <img className='w-full h-96' src={portada} alt="imagen principal" />
    </div>
    </div>
  )
}

export default Home
