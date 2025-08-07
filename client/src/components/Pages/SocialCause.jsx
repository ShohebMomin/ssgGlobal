import {React, useRef, useState } from 'react'
import HeadingParagraph from '../HeadingParagraph'
import HeroSection from '../HeroSection'
import CTA from '../CTA'

const SocialCause = () => {

 const [selectedCause, setSelectedCause] = useState('first');

 const firstCauseRef = useRef(null);
 const secondCauseRef= useRef(null);
 const thirdCauseRef = useRef(null);

 const handleFirstCause = () => {
  firstCauseRef.current.classList.add('bg-customPurple');
  secondCauseRef.current.classList.remove('bg-customPurple');
  thirdCauseRef.current.classList.remove('bg-customPurple');
  setSelectedCause('first')
}
const handleSecondCause = () => {
   firstCauseRef.current.classList.remove('bg-customPurple');
   secondCauseRef.current.classList.add('bg-customPurple');
   thirdCauseRef.current.classList.remove('bg-customPurple');
   setSelectedCause('second')
  }
  const handleThirdCause = () => {
   firstCauseRef.current.classList.remove('bg-customPurple');
   secondCauseRef.current.classList.remove('bg-customPurple');
   thirdCauseRef.current.classList.add('bg-customPurple');
   setSelectedCause('third')
 }
 
 

  return (
    <>
     <HeroSection imagesrc="src/assets/Images/socialcause.png" textSize="text-xs md:text-5xl text-black" layout="top-2 md:-top-20 left-auto  md:left-40 h-full w-full md:w-full" heading="Serving Humanity, Spreading Light"/>
      <HeadingParagraph heading="Serving Humanity, Spreading Light" text="text-customPurple"/>
      <section className="m-auto">
        <div className="md:flex md:p-2 justify-center">

             <div onClick={handleFirstCause} className="text-center mx-2 bg-[#fffff0] text-customPurple font-lato font-bold">
                <div ref={firstCauseRef} className="  md:w-96 h-56 overflow-hidden  p-2 rounded-2xl ">
                    <img className="rounded-xl" src="src/assets/Images/mandir.jpg" alt="mandir" />
                </div>
                <h1>Social Cause 1</h1>
            </div>
            
            <div onClick={handleSecondCause} className="text-center mx-2 bg-[#fffff0] text-customPurple font-lato font-bold ">
            <div ref={secondCauseRef} className="md:w-96 mx-2 rounded-2xl  p-2">
                <img className="rounded-xl" src="src/assets/Images/cow.jpg" alt="cow" />
            </div>
                <h1>Social Cause 2</h1>
            </div>

            <div onClick={handleThirdCause} className="text-center mx-2 bg-[#fffff0] text-customPurple font-lato font-bold ">
                <div ref={thirdCauseRef} className="md:w-96 p-2 rounded-2xl  overflow-hidden ">
                    <img className="rounded-xl" src="src/assets/Images/womens.jpg" alt="womens" />
                </div>
                <h1>Social Cause 3</h1>
            </div>

        </div>

      </section>

      <section className="m-auto w-full font-lato">
        {selectedCause === 'first' && (
        <div className="bg-[#fffff0] w-5xl m-auto my-1 rounded-2xl md:p-5">
                <div className="m-auto w-5xl text-center font-bold text-customPurple md:text-xl"><h1>Helping Temples & Spiritual Centers</h1></div>
            <div className="m-auto w-5xl md:px-10">
                <h1 className="font-bold md:mb-4">Honoring the Divine Gift of Gaumata</h1>

                <p className="md:mb-2">Cows have been revered for centuries as a symbol of purity, abundance, and compassion. At our Gaushala (Cow Shelter), we are committed to protecting, nurturing, and serving these sacred beings who give so much to humanity.</p>

                <h1 className="font-bold md:mb-4">Our Mission: Protect, Care & Serve</h1>

                <p className="">Inspired by the teachings of Swamiji, our initiative focuses on:</p>
                <ul className="list-disc list-inside mb-3">
                    <li>Rescue & Rehabilitation – Saving injured, abandoned, and malnourished cows.</li>
                    <li>Shelter & Healthcare – Providing safe havens with nutritious food, medical care, and love.</li>
                    <li>Promoting Ahimsa & Awareness – Encouraging people to support and protect cows.</li>
                    <li>Organic Sustainability – Utilizing cow dung and cow urine for eco-friendly farming and products.</li>
                </ul>

                <h1 className="font-bold md:mb-2">How You Can Support This Noble Cause</h1>
                <ul className="list-disc list-inside">
                    <li>Adopt a Cow – Support the well-being of a rescued cow through monthly contributions.</li>
                    <li>Donate for Food & Medical Care – Help provide nutritious fodder, medicines, and shelter.</li>
                    <li>Volunteer at the Gaushala – Join hands in feeding, cleaning, and taking care of the cows.</li>
                    <li>Spread Awareness – Educate others about the importance of cow protection and ethical dairy practices.</li>
                </ul>
            </div>
        </div>
      )}

      {selectedCause === 'second' && (
        <div className="bg-[#fffff0] w-5xl m-auto my-1 rounded-2xl md:p-5">
                <div className="m-auto w-5xl text-center font-bold text-customPurple md:text-xl"><h1>Saving and Serving Cows: A Sacred Duty</h1></div>
            <div className="m-auto w-5xl md:px-10">
                <h1 className="font-bold md:mb-4">Honoring the Divine Gift of Gaumata</h1>

                <p className="md:mb-2">Cows have been revered for centuries as a symbol of purity, abundance, and compassion. At our Gaushala (Cow Shelter), we are committed to protecting, nurturing, and serving these sacred beings who give so much to humanity.</p>

                <h1 className="font-bold md:mb-4">Our Mission: Protect, Care & Serve</h1>

                <p className="">Inspired by the teachings of Swamiji, our initiative focuses on:</p>
                <ul className="list-disc list-inside mb-3">
                    <li>Rescue & Rehabilitation – Saving injured, abandoned, and malnourished cows.</li>
                    <li>Shelter & Healthcare – Providing safe havens with nutritious food, medical care, and love.</li>
                    <li>Promoting Ahimsa & Awareness – Encouraging people to support and protect cows.</li>
                    <li>Organic Sustainability – Utilizing cow dung and cow urine for eco-friendly farming and products.</li>
                </ul>

                <h1 className="font-bold md:mb-2">How You Can Support This Noble Cause</h1>
                <ul className="list-disc list-inside">
                    <li>Adopt a Cow – Support the well-being of a rescued cow through monthly contributions.</li>
                    <li>Donate for Food & Medical Care – Help provide nutritious fodder, medicines, and shelter.</li>
                    <li>Volunteer at the Gaushala – Join hands in feeding, cleaning, and taking care of the cows.</li>
                    <li>Spread Awareness – Educate others about the importance of cow protection and ethical dairy practices.</li>
                </ul>
            </div>
        </div>
      )}
      {selectedCause === 'third' && (
        <div className="bg-[#fffff0] w-5xl m-auto my-1 rounded-2xl md:p-5">
                <div className="m-auto w-5xl text-center font-bold text-customPurple md:text-xl"><h1>Empowering Women & Children</h1></div>
            <div className="m-auto w-5xl md:px-10">
                <h1 className="font-bold md:mb-4">Honoring the Divine Gift of Gaumata</h1>

                <p className="md:mb-2">Cows have been revered for centuries as a symbol of purity, abundance, and compassion. At our Gaushala (Cow Shelter), we are committed to protecting, nurturing, and serving these sacred beings who give so much to humanity.</p>

                <h1 className="font-bold md:mb-4">Our Mission: Protect, Care & Serve</h1>

                <p className="">Inspired by the teachings of Swamiji, our initiative focuses on:</p>
                <ul className="list-disc list-inside mb-3">
                    <li>Rescue & Rehabilitation – Saving injured, abandoned, and malnourished cows.</li>
                    <li>Shelter & Healthcare – Providing safe havens with nutritious food, medical care, and love.</li>
                    <li>Promoting Ahimsa & Awareness – Encouraging people to support and protect cows.</li>
                    <li>Organic Sustainability – Utilizing cow dung and cow urine for eco-friendly farming and products.</li>
                </ul>

                <h1 className="font-bold md:mb-2">How You Can Support This Noble Cause</h1>
                <ul className="list-disc list-inside">
                    <li>Adopt a Cow – Support the well-being of a rescued cow through monthly contributions.</li>
                    <li>Donate for Food & Medical Care – Help provide nutritious fodder, medicines, and shelter.</li>
                    <li>Volunteer at the Gaushala – Join hands in feeding, cleaning, and taking care of the cows.</li>
                    <li>Spread Awareness – Educate others about the importance of cow protection and ethical dairy practices.</li>
                </ul>
            </div>
        </div>
      )}
      </section>
      <CTA heading="Every Life Matters – Let’s Serve with Compassion" buttonText="Donate"/>
    </>
  )
}

export default SocialCause
