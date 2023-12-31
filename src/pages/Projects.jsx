/* eslint-disable no-unused-vars */
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section
      id="projects"
      className="text-black flex flex-wrap justify-center items-center  body-font"
    >
      <div className="container mt-20 px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col mb-5 w-full mt-20">
          <CodeIcon className="mx-auto inline-block w-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black">
            Projects &amp; Apps
          </h1>
          <p className="lg:w-2/3 mx-auto text-black mb-4 font-semibold leading-relaxed text-base">
            Below are links to projects and applications I have built.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4"
              style={{ flex: "0 0 calc(50% - 1rem)" }} // Adjusted width style for a rectangular layout
            >
              <div className="flex relative h-64 overflow-hidden">
                {/* Adjusted height to create rectangular boxes */}
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-xl font-semibold text-yellow-500 mb-3">
                    {project.title}
                  </h1>
                  <p className="text-white font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
