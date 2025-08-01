import SocialMediaIcons from './SocialMediaIcons'

function Navbar() {
  return (
    <>
      <header id='header' className="header">
        <p className="ml-11">Volunteer | Call Us: 12345 12345</p>
        <div id="social-media-icons" className="flex absolute right-11 gap-1">
          <SocialMediaIcons/>
        </div>
      </header>
      <nav className="flex p-7 justify-center items-center m-2">
        <div id='logo' className="absolute left-15">
          <img width="88" height="88" src="\src\assets\Images\logo.png" alt="logo" />
        </div>
        <ul id="navbar-elments" className="flex gap-20 font-bold font-lato text-xl">
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
