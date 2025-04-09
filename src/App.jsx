import './App.css'
import Auction from './Components/Auction/Auction'
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
      <main>
        <Auction/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
