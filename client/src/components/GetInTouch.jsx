import Contacts from './Contacts'
import GoogleMap from './GoogleMap'
import HeadingParagraph from './HeadingParagraph'

function GetInTouch() {
  return (
    <>
        <HeadingParagraph heading="Get in Touch with Us" text="text-customPurple"/>
        <div className="md:flex md:m-auto md:px-20 justify-center md:mb-10">
            <GoogleMap/>

            <div className="justify-center items-center m-auto">
                <Contacts IconH="35" IconW="35" FontSize="md:text-xl text-customPurple"/>
                
            </div>
        </div>
    </>
  )
}

export default GetInTouch
