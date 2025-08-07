import  logo  from "../assets/Images/logo.png";
import SocialMediaIcons from "./SocialMediaIcons";
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {

  const contactDetail = [
        { name: "+91- 12345 12345", icon: <Phone className="w-6 h-6 text-white" /> },
        { name: "loremipsum@gmail.com", icon: <Mail className="w-6 h-6 text-white" /> },
        { name: "City, State, Country - 123456", icon: <MapPin className="w-8 h-8 text-white" /> }
    ]
  return (
    <>
      <main>
        <div id="footer" className="bg-customPurple md:flex hidden justify-center p-2">

            <div id="logo-container" className="footer-el w-52">
              <img src={logo} alt="logo" />
            </div>

            <div id="quick-links" className="footer-el text-justify">
              <p>Ut sit luctus lacus, dui. Vestibulum varius efficitur. malesuada placerat ex turpis fringilla scelerisque convallis. orci Ut sit luctus lacus, dui. Vestibulum varius efficitur. malesuada placerat ex turpis fringilla scelerisque convallis. orci </p>
            </div>
            <div id="contact-details" className="footer-el justify-center inline-flex">
              <ul className="md:leading-10">
              <h1>Quick Links</h1>
                <li>Home</li>
                <li>About Us</li>
                <li>Puja</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>

            </div>
             <div id="contact-details" className="footer-el p-20"> 
              <h1 className="mb-4">Contact Us</h1>
                <div className="justify-center items-center m-auto">
                  {contactDetail.map((detail, index) => (
                    <div key={detail.name || index} className="flex items-center md:mb-5 m-2">
                      {detail.icon}
                      <p className="md:mx-5">{detail.name}</p>
                    </div>
                  ))}
                </div>
              <div className="md:py-5">
                <SocialMediaIcons/>
              </div>
             </div>
        </div>
        <div id="credits" className="bg-amber-300 h-12 text-xs md:text-base items-center justify-center font-lato flex">
          <p>Designed & Developed by : VM3 Tech Solutions LLP</p>
        </div>
      </main>
    </>
  )
}

export default Footer
