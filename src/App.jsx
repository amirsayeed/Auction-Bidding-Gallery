import { useState } from 'react'
import './App.css'
import Auction from './Components/Auction/Auction'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [favorites, setFavourites] = useState([]);

  const handleAddFavourite = item =>{
    // handleHide();
    setFavourites([...favorites,item]);
  }

  // const handleHide = () =>{
  //   document.getElementById('no-content').style.display='none';
  // }

  return (
    <div>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <Auction handleAddFavourite={handleAddFavourite} favorites={favorites}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
