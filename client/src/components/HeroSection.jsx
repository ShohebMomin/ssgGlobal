import React from 'react'

const HeroSection = (props) => {
    const className = `absolute  ${props.layout} flex items-center  text-white ${props.textSize} font-playfair font-bold md:leading-15`
    const Imagesrc = `${props.imagesrc}`

  return (
    <div className="overflow-hidden w-full h-full relative">
              <img className="w-full h-full" src={Imagesrc} alt="unknown" />
              <div  className={className}>
                {props.heading}
              </div>
    </div>
  )
  HeroSection.defaultProps = {
   layout: "absolute top-28 md:left-15 left-auto h-auto w-20 md:w-96",
   textSize: "text-xs md:text-4xl"
  };
}

export default HeroSection
