import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Pages/HomePage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
