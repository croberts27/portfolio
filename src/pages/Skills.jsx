/* eslint-disable no-unused-vars */
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function Skills() {
  return (
    <section className="flex flex-wrap justify-center items-center" id="skills">
      <div className="container mt-20 py-10">
        <div className="text-center mt-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-gray-900 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base font-semibold leading-relaxed pb-2 xl:w-2/4 lg:w-3/4 mx-auto">
            Below are the technologies that I have experience building apps and projects with! 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:w-2/3 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
