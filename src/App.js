import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import FavoritesBody from './components/FavoritesBody';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react'


function App() {

  const [products] = useState ([
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._SL1500_.jpg",
      name: "Logitech mis",
      price: 3800,
      favorite : false
    },
    {
      id: 2,
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483083_sd.jpg",
      name: "Logitech gejmerska tastatura",
      price: 9600,
      favorite : false
    },
    {
      id: 3,
      img: "https://api.tehnomanija.rs/medias/?context=bWFzdGVyfGltYWdlc3w1MTczN3xpbWFnZS9qcGVnfGhjMC9oYzEvODg0ODk2OTc5MzU2NnxkNzU0NDFmZTZkMWYyZGI3MmRhMDFkMjFlZDQyYmFiNmUzOWU4ZWZkY2E5OTdiMjA2MzY1MWE3NTVhNmI5NjQ3",
      name: "Dell laptop",
      price: 34000,
      favorite : false
    },
    {
      id: 4,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ2X2?wid=2136&hei=1433&fmt=jpeg&qlt=95&.v=1651797386505",
      name: "HP stampac",
      price: 12000,
      favorite : false
    },
    {
      id: 5,
      img: "https://i0.wp.com/itmarket.rs/images/test/reviews/review_maj_2012/asus-vg23ah-w1.jpg",
      name: "Desktop ekran",
      price: 4500,
      favorite : false
    },
    {
      id: 6,
      img: "https://www.market.metalac.com/UserFiles/products/details/tesla-televizor-led-32t319bh.jpg",
      name: "Tesla televizor",
      price: 75000,
      favorite : false
    }
  ])

  const [numFav, setNumFav]=useState(0)
  const [favProd, setFavProd]=useState([])

  const addFavorites = (id) =>{
    setNumFav(numFav+1)
    products.map((product)=>{
      if(product.id === id){
        product.favorite=true
      }
    })
    refreshFavorites()
  }

  const removeFavorite = (id) => {
    if(numFav>0){
      setNumFav(numFav-1)
    }
    products.map((product)=>{
      if(product.id === id){
        product.favorite=false
      }
    })
    refreshFavorites()
  }

  const refreshFavorites = () => {
    var newFav=products.filter((product)=>product.favorite===true)
    setFavProd(newFav)
  }

  return (
    <>
    <BrowserRouter>
      <Navbar numFavorite={numFav}></Navbar>
        <Routes>
          <Route path='/' element={
            <Body/>
          }/>
          <Route path='/products' element={
            <Products products={products} addFavorites={addFavorites} removeFavorite={removeFavorite}/>
          }/>
          <Route path='/favorites' element={
            <FavoritesBody products={favProd} removeFavorite={removeFavorite}/>
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </>  
  );
}



export default App;