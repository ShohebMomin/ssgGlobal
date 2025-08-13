import React from 'react'

const Contacts = (props) => {
    
    const contactDetail = [
        {
            name: "+91- 12345 12345",
            src: "https://img.icons8.com/material/24/phone--v1.png"
        },
        {
            name: "loremipsum@gmail.com",
            src: "https://img.icons8.com/material/24/mail.png"
        },
        {
            name: "City, State, Country - 123456",
            src: "https://img.icons8.com/ios/50/marker--v1.png"
        }
    ]
    const ContactDivClass = `flex md:mb-5 m-2  ${props.FontSize}`
  return (
    <>
        <div className="justify-center items-center m-auto">
                {contactDetail.map((detail)=>(
                    <div key={detail.name || index} className={ContactDivClass}>
                        <img width={props.IconW} height={props.IconH} src={detail.src} alt={detail.name} />
                        <p className="md:mx-5">{detail.name}</p>
                    </div>
                ))}
                
            </div>
    </>
  )
}

export default Contacts
