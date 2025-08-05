import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpiritualImage from '../assets/Images/spiritual.jpg';
import blogs from '/public/blogdata.json'


const SpiritualInsightsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
    {
      breakpoint: 768, // tablets & below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // desktop
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280, // large desktops
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
  };

  return (
    <div className="md:px-10 px-1 mx-auto">
      <Slider {...settings} className="-mx-2">
        {blogs.map((blogs) => (
          <div className="bg-[#fffff0] p-4 rounded-2xl m-5 place-items-end-safe overflow-visible">
              <img
                src="src/assets/Images/spiritual.jpg"
                alt={blogs.name}
                className="w-full object-cover  rounded-2xl"
              />
              <div className="p-4">
                <p className=" text-black">{blogs.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{blogs.heading}</h3>
                <p className="mt-2 text-sm">{blogs.information}</p>
              </div>
              <div className="flex font-playfair text-xl font-bold"><button className="mr-2 text-[#D4AF37]">Read More</button><p className="text-customPurple font-lato font-bold ">&gt;&gt;</p></div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpiritualInsightsSlider;

