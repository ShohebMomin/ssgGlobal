import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Pages/HomePage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './components/Pages/AboutUs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Optional: show on all pages */}
      <Navbar />

      {/* Route definitions must be inside <Routes> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
    
  )
}

export default App
