import pujaImage1 from '../assets/Images/pujaImage1.jpg'
import pujaImage2 from '../assets/Images/pujaImage2.jpg'
import pujaImage4 from '../assets/Images/pujaImage4.jpg'
const RandomImageContainer = () => {
    const pujaImages = [pujaImage1, pujaImage2, pujaImage1, pujaImage4];
  return (
    <>
        <div id="image-container" className="flex justify-between p-20">
            {pujaImages.map((src) => (
                <div className="w-80 overflow-hidden h-[440px] rounded-2xl border-2 border-amber-400 content-around ">
                    <img src={src} alt="pujaImage"/> 
                </div>
            ))}
        </div>
    </>
  )
}

export default RandomImageContainer
