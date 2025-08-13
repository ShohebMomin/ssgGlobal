import React, { useEffect, useState } from 'react'
import HeroSection from '../HeroSection'
import HeadingParagraph from '../HeadingParagraph'
// import details from '/aboutSwamiji.json'
import RandomImageContainer from '../RandomImageContainer'
import CTA from '../CTA'

const AboutSwamiji = () => {
  const [details, setDetails] = useState([]);
   
  useEffect(() => {
    fetch("/aboutSwamiji.json")
    .then((res) => res.json())
    .then((data) => setDetails(data))
    .catch((err) => console.log("error loading data: ",err))
  },[]);

  return (
    <>
      <HeroSection imagesrc="src/assets/Images/home.jpg" layout="absolute top-10 md:top-70 md:left-15 left-7 h-auto w-20 md:w-96"/>
      <section className="md:flex relative md:mb-10 mb-5">
        <div className="md:w-3/4">
         <HeadingParagraph heading="Swami Subrahmanyam Giri" text="text-customPurple"/>
         {
          details.map((information, index) => (
          <div  className="md:px-15 px-5 md:py-5 py-2"><p key={index}>{information.paragraph}</p></div>
          )
            
          )
         }
        </div>

        <div className="bg-customPurple md:w-2/6">
          <div className="md:w-lg absolute md:top-40 md:right-0.5 md:p-0 p-5 md:rounded-2xl overflow-hidden"><img className="w-full h-full" src="src/assets/Images/swamiji.jpg" alt="" /></div>
        </div>
      </section>

      <RandomImageContainer/>

      <section className="md:text-left text-center">

        <HeadingParagraph heading="The Divine Blessings of Swamiji" text="text-customPurple"/>

        <div className="font-lato m-auto mb-5 md:max-w-3xl bg-[#fffff0] md:p-5 md:rounded-2xl">

         <p className="text-center md:text-xl">Swamiji carries sacred symbols of the Chakra (Wheel) and Sankha (Conch) on his hands and feet, believed to be signs of divine energy. Wherever Swamiji steps, prosperity, health, and spiritual upliftment follow.</p>

         <h1 className="font-bold text-center md:text-xl md:my-5 my-2.5">Miracles & Spiritual Healing</h1>
         <ul className="list-disc z-50 list-outside md:pl-6 md:ml-6 px-5 space-y-4 md:text-xl text-left">
          <li><strong>Blessings for Parenthood</strong> - Countless childless couples have conceived through Swamiji's grace.</li>
          <li><strong>Healing the Ailing</strong> - He has cured thousands of people suffering from physical and mental illnesses.</li>
          <li><strong>Restoring the Senses</strong> - Swamiji has made the lame walk, the blind see, and the deaf hear</li>
          <li><strong>Guiding the Lost</strong> - Many struggling devotees have found peace, prosperity, and direction in life.</li>
         </ul>
        </div>
      </section>
      <CTA heading="Want to be part of this divine journey?" buttonText="Contact US"/>
    </>
  )
}

export default AboutSwamiji
