import React from "react";
import { IoIosContact } from "react-icons/io";

const AboutMe = () => {
  return (
    <div
      name="about me"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div
        data-aos="fade-up"
        className="bg-[#F4F6F8] dark:bg-[#161B22] p-4 rounded-2xl"
      >
        <div className="flex items-center rounded-2xl py-3 bg-[#e9ecf3] dark:bg-[#1f252c] ">
          <IoIosContact size={30} className="mx-3" />
          <p className="text-xl font-extrabold w-fit">About Me</p>
        </div>
        <p className="text-lg indent-7 p-3 pb-0">
          I'm a software developer with over three years of experience in
          developing and maintaining software applications. I have experience in
          designing and implementing software solutions for various clients and
          projects. I'm proficient in Java and Javascript language and I have
          ability to code on other language such as C#, PHP, Dart, Swift and
          Tyepscript. I graduated from Royal University of Phnom Penh with a
          degree in Computer Science. Currently, I work at Wing bank as a
          Back-End developer.
        </p>
        <h1 className="p-3 text-xl font-extrabold w-fit">
          Education Background
        </h1>
        <ul data-aos="fade-up" className="timeline timeline-vertical w-[200px]">
          <li>
            <div className="timeline-start">2012-2015</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box w-[500px] max-md:w-[60vw] bg-transparent border-none shadow-none">
              Finished Sok Ann Tounlap High school
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2016-2017</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box w-[500px] max-md:w-[60vw] bg-transparent border-none shadow-none">
              Studied English at Paññāsāstra University of Cambodia
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2015-2019</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box w-[500px] max-md:w-[60vw] bg-transparent border-none shadow-none">
              Gratuated from Royal University of Phnom Penh
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2018-2019</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box w-[500px] max-md:w-[60vw] bg-transparent border-none shadow-none">
              Completed Desktop development course at ANT Training
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2019-2020</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box w-[500px] max-md:w-[60vw] bg-transparent border-none shadow-none">
              Completed Web development course at ANT Training
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
