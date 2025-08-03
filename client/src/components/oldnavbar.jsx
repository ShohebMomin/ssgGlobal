import SocialMediaIcons from './SocialMediaIcons'

function Navbar() {
  return (
    <>
      <div id='header' className="header w-full md:w-32 lg:w-full">
        <p className="">Volunteer | Call Us: 12345 12345</p>
        <div id="social-media-icons" className="flex absolute right-11 gap-1">
          <SocialMediaIcons/>
        </div>
      </div>
        <div id='logo' className="absolute left-15">
          <img  className="w-20 h-20 md:h-20 md:w-20 lg:w-20" src="\src\assets\Images\logo.png" alt="logo" />
        </div>
      <nav className="flex p-7 justify-center items-center m-2">
        <ul id="navbar-elments" className="flex  gap-5 font-bold font-lato text-sm/ ">
          <li id="home">Home</li>
          <li id="about-us">About Us</li>
          <li id="about-puja">About Puja</li>
          <li id="blog">Blog</li>
          <li id="contact">Contact</li>
        </ul>
          <button id="reserve-puja-btn" className="purple-btn right-15">Reserve Your Puja</button>
      </nav>
    </>
  )
}

export default Navbar
