import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <div>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main></main>
      <footer className='mt-20'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
