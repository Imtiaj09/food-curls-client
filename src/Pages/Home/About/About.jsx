import React from "react";
import person from "../../../assets/images/about_us/person.png";

const About = () => {
  return (
    <section className="hero">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-2xl font-bold text-red-500 pl-2 pb-5">About Us</p>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Acmattis
            <br />
            <span className="dark:text-violet-400">senectus</span> erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold btn-outline btn-ghost  rounded  dark:text-gray-900"
            >
              Get More Info
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={person} alt="" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
