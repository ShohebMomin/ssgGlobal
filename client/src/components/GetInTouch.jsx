import GoogleMap from './GoogleMap'
import HeadingParagraph from './HeadingParagraph'

function GetInTouch() {
    const contactDetail = [
        {
            name: "+91- 12345 12345",
            src: "https://img.icons8.com/forma-light-sharp/48/7950F2/phone.png"
        },
        {
            name: "loremipsum@gmail.com",
            src: "https://img.icons8.com/forma-light-sharp/48/7950F2/secured-letter.png"
        },
        {
            name: "City, State, Country - 123456",
            src: "https://img.icons8.com/forma-light-sharp/48/7950F2/marker.png"
        }
    ]
    
  return (
    <>
        <HeadingParagraph heading="Get in Touch with Us" text="text-customPurple"/>
        <div className="md:flex md:m-auto md:px-20 justify-center md:mb-10">
            <GoogleMap/>

            <div className="justify-center items-center m-auto">
              {contactDetail.map((detail)=>(
                      <div key={detail.name || index} className="flex md:mb-5 m-2">
                          <img width="40" height="40" src={detail.src} alt={detail.name} />
                          <p className="md:mx-5">{detail.name}</p>
                      </div>
                ))}
                
            </div>
        </div>
    </>
  )
}

export default GetInTouch
