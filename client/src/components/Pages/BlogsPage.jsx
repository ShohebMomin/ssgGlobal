import HeroSection from "../HeroSection"
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {
  const navigate = useNavigate();


  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log("error loading data: ", err))
  }, [])


  return (
    <>
      <HeroSection textSize="text-xs md:text-2xl " imagesrc="src\assets\Images\book.jpg" layout="top-8 md:top-52 left-2 md:left-20" heading="Discover the sacred ritual that blesses every aspect of your life with the divine grace of the eight forms of Goddess Lakshmi." />

      <div className="md:px-10 px-1 mx-auto my-5 grid grid-cols-1 md:grid-cols-3 gap-6">

        {blogs.map((blogs, index) => (
          <div key={index} className="bg-[#fffff0] p-4 rounded-2xl  place-items-end-safe overflow-visible md:w-md lg:w-md ">
            <img key={index}
              src="src/assets/Images/spiritual.jpg"
              alt={blogs.name}
              className="md:w-96 lg:w-96 object-cover rounded-2xl m-auto"
            />
            <div className="p-4">
              <p className=" text-black">{blogs.date}</p>
              <h3 className="mt-2 text-xl font-semibold">{blogs.heading}</h3>
              <p className="mt-2 text-sm">{blogs.information}</p>
            </div>
            <div className="flex font-playfair text-xl font-bold"><button onClick={() => navigate(`/blog/${blogs.id}`)} className="cursor-pointer mr-2 text-[#D4AF37]">Read More</button><p className="text-customPurple font-lato font-bold ">&gt;&gt;</p></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogsPage
