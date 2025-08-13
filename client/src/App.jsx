import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/Pages/HomePage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './components/Pages/AboutUs';
import AboutPuja from './components/Pages/AboutPuja';
import BlogsPage from './components/Pages/BlogsPage';
import ContactUs from './components/Pages/ContactUs';
import AboutSwamiji from './components/Pages/AboutSwamiji';
import SocialCause from './components/Pages/SocialCause';
import Blog from './components/Pages/Blog';


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
        <Route path="/about-puja" element={<AboutPuja />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-swamiji" element={<AboutSwamiji/>} />
        <Route path="/social-cause" element={<SocialCause/>} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>

      <Footer />
    </>
    
  )
}

export default App
