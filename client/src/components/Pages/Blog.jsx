import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
// import blogImage from "../assets/Images/aboutpuja.jpg"
const Blog = () => {


    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
      fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.log("error loading blog:", err));
    }, []);

    const { id } = useParams();
    const blog = blogData.find((b) => b.id.toString() === id);

if (!blog) return <p>Blog not found</p>;
  return (
    <>
      <main className="grid grid-cols-1">
        <section className="font-lato">
            <div key={blog.id} className=" grid place-items-center mb-20">
                <h1 className="text-customPurple font-playfair font-bold text-2xl mt-10">{blog.title}</h1>
                <p className="mb-5 font-lato italic">by : {blog.author}  {blog.date}</p>
                <div className="p-5 md:w-3/6 grid place-items-start-safe overflow-hidden">
                    <img src={blog.image} alt="puja-image" className="rounded-2xl" />
                </div>
                {blog.sections.map((blog, idx)=>(
                    <div key={Math.random(idx)} className=" text-justify px-20 mx-20 w-2/3"> 
                        <h1 key={Math.random(idx)} className="text-xl my-2 text-customPurple font-playfair font-bold" >{blog.heading}</h1>
                        {Array.isArray(blog.content) ? (
                            <ul className="list-disc list-inside pl-0">
                            {blog.content.map((item, i) => (
                                <li key={Math.random(i)}>{item}</li>
                            ))}
                            </ul>
                            ) : (
                            <p>{blog.content}</p> )}
                    </div>
                ))}
            </div>
        </section>
      </main>
    </>
  )
}

export default Blog
