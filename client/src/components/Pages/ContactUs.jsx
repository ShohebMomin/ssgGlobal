import React from 'react'
import HeroSection from '../HeroSection'
import GetInTouch from '../GetInTouch'
import ReservePujaForm from '../ReservePujaForm'

const ContactUs = () => {
  return (
    <>
      <HeroSection imagesrc="/Images/bell.jpg" layout="absolute top-10 md:top-70 md:left-15 left-7 h-auto w-20 md:w-96" textSize="text-xs md:text-4xl"
        heading="Experience Divine Blessings with the Sacred Ashtalakshmi Puja" />
      <GetInTouch />
      <ReservePujaForm />
    </>
  )
}

export default ContactUs
