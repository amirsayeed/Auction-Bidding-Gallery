import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Auction from './Components/Auction/Auction'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const [favourites, setFavourites] = useState([]);
  const [total, setTotal] = useState(0);
  const [hideContent, setHideContent] = useState(true);

  const notify = () => toast("🦄 Item Added to your Favourite Lists");
  const notify1 = () => toast.warn("🦄 Item Removed From Favourites!");

  const handleAddFavourite = (item,bidPrice) =>{
    setHideContent(false);
    setFavourites([...favourites,item]);
    handleTotal(parseInt(bidPrice));
    notify();
  }
  
  const handleRemoveFavourite = (id,price) =>{
    const remainingFavourite = favourites.filter(pd => pd.id !== id);
    setFavourites(remainingFavourite);
    setTotal(total-price);

    if(remainingFavourite.length === 0){
      setHideContent(true);
    }
    notify1();
  }

  const handleTotal = price =>{
    const totalAmount = total+price;
    setTotal(totalAmount);
  }

  return (
    <div>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <main>
        <ToastContainer/>
        <Auction 
          handleAddFavourite={handleAddFavourite}
          hideContent={hideContent} 
          favourites={favourites} 
          total={total}
          handleRemoveFavourite={handleRemoveFavourite}
         />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
