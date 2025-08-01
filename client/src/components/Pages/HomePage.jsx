import HeadingParagraph from '../HeadingParagraph'
import DevoteesSlider from '../DevoteesSlider'
import SpiritualInsightsSlider from '../SpiritualInsightsSlider'
import ReservePujaForm from '../ReservePujaForm'
import RandomImageContainer from '../RandomImageContainer'

function HomePage() {
  return (
    <>
      <main>

        <div className="relative">
          <div className="know-more-background place-items-center ">
              <img width="100%" src="src\assets\Images\image1.png" alt="unknown" />
          </div>
        <div  className=" w-120 absolute inset-0 flex items-center justify-center text-white text-5xl font-playfair font-bold left-20  leading-15 ">
          <p>Experience Divine Blessings with the Sacred Ashtalakshmi Puja</p>
        </div>
        <button id="know-more-btn" className="purple-btn left-20 inset-105">Know More</button>
        </div>
      {/* /////////////////////// */}

        {/* // about us  */}
        <HeadingParagraph heading="About US" paragraph=" At SSG Global, we are dedicated to helping you experience the spiritual energy and blessings of traditional Hindu rituals. Our team of experienced priests and spiritual practitioners specializes in conducting the sacred Ashtalakshmi Puja, ensuring it is performed with utmost devotion and authenticity." />
      
      {/* puja images container  */}
      <div id="puja-images-container" className="flex justify-between h-auto px-20  mb-10">
        <div className="puja-image">
        <img width="310" height="360" src="/src/assets/Images/pujaImage1.jpg" alt="pujaImage" />
        </div>
        <div className="puja-image">
        <img width="310" height="360" src="/src/assets/Images/pujaImage2.jpg" alt="pujaImage" />
        </div>
        <div className="puja-image">
        <img width="310" height="360" src="/src/assets/Images/pujaImage3.jpg" alt="pujaImage" />
        </div>
        <div className="puja-image">
        <img width="310" height="360" src="/src/assets/Images/pujaImage4.jpg" alt="pujaImage" />
        </div>

      </div>

      <div className=" mx-auto mb-10 max-w-[1080px] items-center text-center text-2xl">
      <p>
        With years of experience and a commitment to preserving Vedic traditions, we aim to create a serene and uplifting experience for devotees seeking divine blessings.
      </p>

      <div className="justify-center flex mt-10 mb-20">
        <button className="purple-btn">Know More</button>
      </div>
      </div>

       {/* // heading The Ashtalakshmi Puja  */}
      <HeadingParagraph heading="The Ashtalakshmi Puja"/>
       <div id="ashtalakshmi-puja" className="w-full flex justify-center px-10">
        <div className="rounded-2xl mr-5 h-[608] w-[530] overflow-hidden object-cover mb-5">
          <img width="530" height="608" src="\src\assets\Images\ashtalakshmi.jpg" alt="Ashtalakshmi" />
        </div>

        <div className="w-2/3 text-justify text-2xl font-lato font-[400] ">
          <p>The Ashtalakshmi Puja is a powerful Vedic ritual that invokes the blessings of the eight forms of Goddess Lakshmi, the deity of wealth, prosperity, and well-being. Each form represents a unique aspect of life, such as knowledge, strength, abundance, and victory. By performing this puja, devotees invite holistic blessings into their lives.</p>
          <p className="mt-2 text-customPurple font-lato">Eight Forms of Lakshmi :</p>
          <ul className="list-decimal list-inside leading-30 ml-2 font-[600] ">
            <li>Adi Lakshmi - The primal energy, representing eternal wealth and strength.</li>
            <li>Dhana Lakshmi - The goddess of material wealth and financial stability.</li>
            <li>Dhanya Lakshmi - The harbinger of agricultural prosperity and nourishment.</li>
            <li>Gaja Lakshmi - The symbol of royalty, power, and grandeur.</li>
          </ul>
          <div className="inline-flex items-center font-[700] ">
            <button className="mr-2 font-playfair text-yellow-300">Know More</button><p className="text-customPurple">&gt;&gt;</p></div>
        </div>
       </div>
       {/* What Our Devotees Say */}
       <HeadingParagraph heading="What Our Devotees Say"/>
       <DevoteesSlider/>

       {/* Spiritual Insights & Puja Guides */}
       <HeadingParagraph heading="Spiritual Insights & Puja Guides"/>
       <SpiritualInsightsSlider/>

       {/* Reserver Puja form */}
       <ReservePujaForm />


       {/* Random Image container */}
        <RandomImageContainer/>

      </main>
    </>
  )
}

export default HomePage
