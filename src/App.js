import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../src/components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Carousel from "./components/Carousel/carousel.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Menu from "./components/Menu/Menu.jsx"
import Booking from "./components/Booking/Booking.jsx"
import { Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<> <Header />
          <Home />
          <Cards />
          <Carousel />
          <Footer />
        </>} />

        <Route path="/menu" element={
          <><Header />
            <Menu /></>} />

  

      <Route path='/booking' element={
          <><Header />
            <Booking />
          </>
      }/>
    </Routes>
          
    </div>
        )
}

        export default App