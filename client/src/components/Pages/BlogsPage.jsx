import HeroSection from "../HeroSection"
import blogs from '/public/blogdata.json'

const BlogsPage = () => {
  return (
    <>
      <HeroSection textSize="text-xs md:text-5xl" imagesrc="src\assets\Images\book.jpg" layout="top-2 md:top-10 left-auto right-5 md:right-10 h-full w-20 md:w-96" heading="Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi."/>

      <div className="md:px-10 px-1 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      
        {blogs.map((blogs) => (
          <div className="bg-[#fffff0] p-4 rounded-2xl m-5 place-items-end-safe overflow-visible md:w-md lg:w-md ">
              <img
                src="src/assets/Images/spiritual.jpg"
                alt={blogs.name}
                className="md:w-96 lg:w-96 object-cover rounded-2xl m-auto"
              />
              <div className="p-4">
                <p className=" text-black">{blogs.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{blogs.heading}</h3>
                <p className="mt-2 text-sm">{blogs.information}</p>
              </div>
              <div className="flex font-playfair text-xl font-bold"><button className="mr-2 text-[#D4AF37]">Read More</button><p className="text-customPurple font-lato font-bold ">&gt;&gt;</p></div>
            </div>
        ))}
    </div>
    </>
  )
}

export default BlogsPage
