import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DevoteesImage from '../assets/Images/Devotees.png'; // Adjust the path as needed


const DevoteesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: DevoteesImage,
      name: 'Devotees Name',
      review: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
    },
    {
      id: 2,
      image: DevoteesImage,
      name: 'Devotees Name',
      review: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
    },
    {
      id: 3,
      image: DevoteesImage,
      name: 'Devotees Name',
      review: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
    },
  ];

  return (
    <div className="w-full px-10  mx-auto ">
      <Slider {...settings} className="-mx-2">
        {slides.map((slide) => (
          <div className="bg-amber-50 rounded-xl p-5 place-items-center-safe overflow-hidden">
              <img
                src={slide.image}
                alt={slide.name}
                className="w-28 h-28 object-cover"
              />
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{slide.name}</h3>
                <p className="mt-2 text-gray-600 text-sm">{slide.review}</p>
              </div>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default DevoteesSlider;

