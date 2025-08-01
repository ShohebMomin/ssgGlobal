import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpiritualImage from '../assets/Images/spiritual.jpg';


const SpiritualInsightsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image: SpiritualImage,
      date: 'Date',
      heading: "The Spiritual Significance of the Ashtalakshmi Puja",
      information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .............."
    },
    {
      id: 2,
      image: SpiritualImage,
      date: 'Date',
      heading: "The Spiritual Significance of the Ashtalakshmi Puja",
      information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .............."
    },
    {
      id: 3,
      image: SpiritualImage,
      date: 'Date',
      heading: "The Spiritual Significance of the Ashtalakshmi Puja",
      information: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .............."
    },
  ];

  return (
    <div className="w-full h-[488px] px-10  mx-auto mb-30  ">
      <Slider {...settings} className="-mx-2">
        {slides.map((slide) => (
          <div className="bg-[#fffff0] w-[420px] rounded-xl p-5 place-items-end-safe overflow-visible">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full object-cover rounded-2xl"
              />
              <div className="p-8">
                <p className=" text-black">{slide.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{slide.heading}</h3>
                <p className="mt-2 text-sm">{slide.information}</p>
              </div>
              <div className=" flex font-playfair text-xl font-bold"><button className="mr-2 text-[#D4AF37]">Read More</button><p className="text-customPurple font-lato font-bold ">&gt;&gt;</p></div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpiritualInsightsSlider;

