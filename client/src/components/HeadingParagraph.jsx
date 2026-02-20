import React from 'react'

const HeadingParagraph = (props) => {
  const headingClass = `heading1 mx-5 overflow-hidden ${props.text}`
  return (
    <>
      {/* // Heading */}
      <div id="about-us-homepage" className="flex justify-center items-center mt-10 h-auto">

        <span>
          <img width="50" height="50" src="/Images/flower1.png" alt="flower-icon" />
        </span>

        <h1 className={headingClass}>{props.heading}</h1>

        <span><img width="50" height="50" src="/Images/flower1.png" alt="flower-icon" />
        </span>

      </div>

      <div className=" md:mx-auto mb-10 max-w-6xl items-center text-center text-2xl">

        {/* Paragraph */}
        <p>
          {props.paragraph}
        </p>

      </div>

    </>
  )
}

export default HeadingParagraph
