import React from "react";
import HeroImage from "./../assets/cover.jpeg";
import wingbank from "./../assets/wingbank.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div
      name="home"
      className="flex flex-col md:flex-row md:h-screen items-center justify-center max-md:pt-[80px]"
      data-aos="zoom-in" data-aos-delay="1000"
    >
      <div className="flex flex-col">
        <div className="text-4xl md:text-6xl mb-2">
          <p className="text-2xl md:text-3xl">
            Hi, I'm <b className="dark:t-g t-g2">PiSeth</b>
          </p>
            <LazyLoadImage
              className="max-sm:w-[300px] sm:w-[500px]"
              src={wingbank}
              alt="My Profile"
            />
        </div>
        <p className="md:pr-7 indent-7 text-lg">
          I have over 3 years of experience building and desgining core banking
          system using Java and Spring framework. Currently, I love to work on
          web and mobile application using technologies like ReactJs,
          TailwindCSS, NodeJs, Flutter. To know me more let's scroll down 😉
        </p>
        <div>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-full btn-primary cursor-pointer text-white"
          >
            <span className="pl-3 select-none">Portfolio</span>
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
      </div>
      <div>
      <LazyLoadImage
          className="md:w-[800px] w-screen mx-auto rounded-2xl dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC]"
          src={HeroImage}
          alt="My Profile"
        />
      </div>
    </div>
  );
};
export default Home;
