import Navbar from '../components/Navbar'
import portada from '../assets/imagen 1.jpg'
const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar/>
    
        <img className='w-full h-96' src={portada} alt="imagen principal" />

    
    </div>
  )
}

export default Home
