import  logo  from "../assets/Images/logo.png";
import Contacts from "./Contacts";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <>
      <main>
        <div id="footer" className="bg-customPurple flex justify-center p-2">
            <div id="logo-container" className="testing-class">
              <img src={logo} alt="logo" />
            </div>
            <div id="quick-links" className="testing-class text-justify">
              <p>Ut sit luctus lacus, dui. Vestibulum varius efficitur. malesuada placerat ex turpis fringilla scelerisque convallis. orci Ut sit luctus lacus, dui. Vestibulum varius efficitur. malesuada placerat ex turpis fringilla scelerisque convallis. orci </p>
            </div>
            <div id="contact-details" className="testing-class justify-center inline-flex">
              <ul className="leading-10">
              <h1>Quick Links</h1>
                <li>Home</li>
                <li>About Us</li>
                <li>Puja</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>

            </div>
             <div id="contact-details" className="testing-class"> 
              <h1 className="mb-4">Contact Us</h1>
              <Contacts IconH="20" IconW="25" FontSize="text-sm"/>
              <div className="py-5">
                <SocialMediaIcons/>
              </div>
             </div>
        </div>
        <div id="credits" className="bg-amber-300 h-12  items-center justify-center font-lato flex">
          <p>Designed & Developed by : VM3 Tech Solutions LLP</p>
        </div>
      </main>
    </>
  )
}

export default Footer
