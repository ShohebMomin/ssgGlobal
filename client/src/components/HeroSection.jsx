import React from 'react'


const HeroSection = ({ imagesrc, layout, textSize, heading }) => {
  const className = `absolute  ${layout} flex items-center  text-white ${textSize} font-playfair font-bold md:leading-15`
  // const Imagesrc = `${props.imagesrc}`

  return (
    <>

      <div className="overflow-hidden w-full h-full relative">
        <img className="w-full h-full" src={imagesrc} alt="unknown" />
        <div className={className}>
          {heading}
        </div>
      </div>

    </>
  )
}

export default HeroSection
