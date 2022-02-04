import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home () {
  return (
    <div className='font-Sora'>
      <Navbar />
      <Description/>
      <Contact/>
      <Footer/>
    </div>
  )
}