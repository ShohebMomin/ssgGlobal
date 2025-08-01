import Contacts from './Contacts'
import GoogleMap from './GoogleMap'
import HeadingParagraph from './HeadingParagraph'

function ContactUs() {
  return (
    <>
        <HeadingParagraph heading="Get in Touch with Us"/>
        <div className="flex m-auto px-20 justify-center mb-10">
            <GoogleMap/>

            <div className="justify-center items-center m-auto">
                <Contacts IconH="35" IconW="35" FontSize="text-xl"/>
                
            </div>
        </div>
    </>
  )
}

export default ContactUs
