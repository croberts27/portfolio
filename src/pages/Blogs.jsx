import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { blogs } from "../data";

function Blogs() {
  return (
    <section id="blogs" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Blog Posts
          </h1>
          <p className="lg:w-2/3 mx-auto text-white font-semibold leading-relaxed text-base">
            Below are a few links to blog posts I have written about various
            topics in the coding industry.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 ">
          {blogs.map((blog) => (
            <a href={blog.link} key={blog.image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute rounded-xl inset-0 w-full h-full object-cover object-center"
                  src={blog.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {blog.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {blog.title}
                  </h1>
                  <p className="leading-relaxed">{blog.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
