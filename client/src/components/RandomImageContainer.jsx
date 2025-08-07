import pujaImage1 from '../assets/Images/pujaImage1.jpg'
import pujaImage2 from '../assets/Images/pujaImage2.jpg'
import pujaImage4 from '../assets/Images/pujaImage4.jpg'
const RandomImageContainer = () => {
    const pujaImages = [
        {
            key: 1,
            src: pujaImage1
        },
        {
            key: 2,
            src: pujaImage2
        },
        {
            key: 3,
            src: pujaImage4
        },
        {
            key: 4,
            src: pujaImage1
        },
    ];
  return (
    <>
        <div id="image-container" className="md:flex justify-between md:p-20">
            {pujaImages.map((pujaImage) => (
                <div key={pujaImage.key} className="md:w-80 w-72 md:m-0 m-auto mb-1 overflow-hidden md:h-96 rounded-2xl border-2 border-amber-400 content-around ">
                    <img src={pujaImage.src} alt="pujaImage"/> 
                </div>
            ))}
        </div>
    </>
  )
}

export default RandomImageContainer
