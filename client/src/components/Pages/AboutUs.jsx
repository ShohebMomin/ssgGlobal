
import HeroSection from '../HeroSection'
import HeadingParagraph from '../HeadingParagraph'
import mandirImage from "../../assets/Images/mandir-image.jpg"
import pujaImage2 from "../../assets/Images/pujaImage2.jpg"
import RandomImageContainer from '../RandomImageContainer'
import CTA from '../CTA'

const AboutUs = () => {
    const headingHeroSection = "At SSG Global, we bring you closer to the divine through authentic spiritual practices."

    return (
        <>
            <HeroSection imagesrc="/Images/image2.jpg" layout="top-2 md:top-10 left-auto right-5 md:right-10 h-full w-20 md:w-96" heading={headingHeroSection} textSize="text-xs md:text-5xl" />

            {/* Our Story */}
            <HeadingParagraph heading="Our Story" text="text-customPurple" />
            <section className="md:flex">
                <div className="relative md:w-1/2 w-full md:h-full rounded-2xl md:pb-70 pb-32 px-10 flex">
                    <div className="rounded-2xl overflow-hidden md:w-80 md:h-96 w-40 h-48">
                        <img
                            className="md:w-80 md:h-96 rounded-2xl"
                            src={pujaImage2}
                            alt="pujaimage2"
                        />
                    </div>

                    <div className="md:w-80 md:h-96 w-40 h-48 absolute left-40 top-32 md:left-74 z-50 md:top-70 rounded-2xl overflow-hidden border-white border-8 ">
                        <img
                            className="md:w-80 md:h-96 rounded-2xl"
                            src={mandirImage}
                            alt="pujaimage2"
                        />
                    </div>
                </div>
                <div className="md:w-1/2 w-full md:px-2 md:p-0 p-5 font-lato md:text-2xl md:flex-col">
                    <p className="leading-relaxed mb-6">Founded with the vision of preserving ancient Vedic traditions, SSG Global is dedicated to spreading the light of spirituality and devotion. Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.</p>
                    <p className="leading-relaxed mb-6">
                        With a deep understanding of scriptures and rituals, our team of experienced priests ensures that every puja is conducted with authenticity, precision, and utmost devotion. Whether at home, temple, or online, we strive to make spiritual practices accessible and meaningful for everyone.</p>
                    <p className="leading-relaxed mb-6">
                        Founded with the vision of preserving ancient Vedic traditions, SSG Global is dedicated to spreading the light of spirituality and devotion. Our expertise lies in performing the sacred Ashtalakshmi Puja, a powerful ritual that invokes the blessings of the eight forms of Goddess Lakshmi.</p>
                </div>
            </section>

            {/* Our vision and Mission  */}

            <section>
                <div className="w-full px-2 md:px-44 items-center text-center bg-customPurple md:text-2xl text-white font-lato my-2">
                    <HeadingParagraph heading="Our Mission & Vision" text="text-white" />
                    <h1 className="mb-6 text-2xl font-bold">Mission</h1>
                    <p className="mb-10">To empower individuals and families with the divine blessings of the Ashtalakshmi Puja, fostering prosperity, harmony, and spiritual well-being.</p>
                    <h1 className="mb-6 text-2xl font-bold">Vision</h1>
                    <p className="mb-10">To be a trusted global platform for authentic Vedic rituals, bridging the gap between tradition and modernity.</p>
                </div>
            </section>

            {/* Why SSG Global */}
            <section>
                <HeadingParagraph heading="Why SSG Global" text="text-customPurple" />
                <div className="why-ssg-global ">
                    <ul className="space-y-5 list-disc list-inside pl-6 text-gray-800 md:text-xl">
                        <li><span className="text-purple-800 font-semibold">Authenticity:</span>   {" "}Our rituals are performed by experienced and certified priests with strict adherence to Vedic scriptures.</li>
                        <li><span className="text-purple-800 font-semibold">Personalized Service:</span>  {" "}We customize every puja to meet your specific spiritual needs and intentions.</li>
                        <li>
                            <span className="text-purple-800 font-semibold"> Convenience:</span>   {" "}Perform pujas at your preferred location, whether at home, in a temple, or online.
                        </li>
                        <li>
                            <span className="text-purple-800 font-semibold"> Trusted by Many:</span>   {" "}With years of experience and countless satisfied devotees, we are a name you can trust.
                        </li>
                        <li>
                            <span className="text-purple-800 font-semibold">Holistic Experience:</span>  {" "} Beyond rituals, we offer spiritual guidance, mantras, and blessings to enrich your life.
                        </li>
                    </ul>
                </div>
                <RandomImageContainer />
            </section>
            <CTA heading="Ready to Invite Divine Blessings?" buttonText="Reserve Your Puja" />
        </>
    )
}

export default AboutUs
