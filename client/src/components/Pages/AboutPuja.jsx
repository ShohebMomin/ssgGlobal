import CTA from '../CTA'
import HeadingParagraph from '../HeadingParagraph'
import HeroSection from '../HeroSection'
import RandomImageContainer from '../RandomImageContainer'

const AboutPuja = () => {
  return (
    <>
      <HeroSection textSize="text-xs md:text-5xl" imagesrc="public\aboutpuja.jpg" layout="top-2 md:top-10 left-auto right-5 md:right-10 h-full w-20 md:w-96" heading="Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi." />

      {/* Mission Statement */}

      <section className="md:px-10 px-5 text-center">
        <HeadingParagraph text="text-customPurple text-base" heading="An Ancient Ritual for Modern Times" paragraph="The Ashtalakshmi Puja is a powerful and auspicious ritual rooted in Vedic traditions. It invokes the blessings of the eight manifestations of Goddess Lakshmi, each representing different facets of prosperity, including wealth, health, knowledge, courage, and spiritual growth.
This puja is ideal for those seeking divine guidance to overcome challenges, achieve success, and bring harmony to their personal and professional lives."/>
      </section>
      {/* image gallery  */}
      <section>
        <RandomImageContainer />
      </section>

      {/* The Blessings of the Ashtalakshmi */}
      <section>
        <div className="text-center"><HeadingParagraph text="text-customPurple" heading="The Blessings of the Ashtalakshmi" /></div>
        <main className="mb-10">
          <div className="md:flex  justify-center ashtalakshmi-div">

            <div className="ashtalakshmi-content-div"><img src="public/adi-lakshmi.png" alt="" />
              <h2>Adi Lakshmi:</h2>
              <p>Bestows eternal wealth and spiritual strength.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img src="public/dhan-lakshmi.png" alt="" />
              <h2>Dhana Lakshmi:</h2>
              <p>Brings financial abundance and prosperity.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img src="/src/assets/Images/dhanya-lakshmi.png" alt="" />
              <h2>Dhanya Lakshmi:</h2>
              <p>Blesses agricultural bounty and nourishment.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img src="/src/assets/Images/gaja-lakshmi.png" alt="" />
              <h2>Gaja Lakshmi:</h2>
              <p>Grants royal power, success, and prestige.</p>
            </div>

          </div>

          <div className="md:flex justify-center ashtalakshmi-div">

            <div className="ashtalakshmi-content-div"><img src="/src/assets/Images/santana-lakshmi.png" alt="" />
              <h2>Santana Lakshmi:</h2>
              <p>Blesses with offspring and family harmony.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img className="!w-16" src="/src/assets/Images/veera-lakshmi.png" alt="" />
              <h2>Veera Lakshmi:</h2>
              <p>Offers courage, strength, and resilience.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img src="/src/assets/Images/vidya-lakshmi.png" alt="" />
              <h2>Vidya Lakshmi:</h2>
              <p>Embodies knowledge, wisdom, and education.</p>
            </div>

            <div className="ashtalakshmi-content-div"><img src="/src/assets/Images/vijiya-lakshmi.png" alt="" />
              <h2>Vijaya Lakshmi:</h2>
              <p>Ensures victory and success in endeavors.</p>
            </div>

          </div>
        </main>
      </section>

      {/* Why Perform the Ashtalakshmi Puja? */}

      <section className="text-center">
        <HeadingParagraph heading="Why Perform the Ashtalakshmi Puja?" text="text-customPurple" />
        <div className="Why-perform-the-ashtalakshmi-puja md:p-10 px-5 md:justify-center flex text-left">
          <ul className="space-y-4 list-disc list-inside pl-2 text-black md:text-xl">
            <li>Removes financial obstacles and promotes prosperity.</li>
            <li>Enhances spiritual growth and inner peace.</li>
            <li>
              Invokes blessings for family harmony and health.
            </li>
            <li>
              Ensures success in personal and professional endeavors.
            </li>
            <li>
              Brings peace, positivity, and divine energy into your life.
            </li>
          </ul>
        </div>
      </section>
      {/* CTA */}
      <CTA heading="Ready to Experience the Divine Blessings?" buttonText="Reserve Your Puja" />

    </>
  )
}

export default AboutPuja
