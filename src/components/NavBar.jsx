import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Hamburger from "./Hamberger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import profile from "./../assets/profile.png";
import cv from "./../assets/cv.png";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about me",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "skill",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [currentImg, setCurrentImg] = useState(profile);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentImg === '/maportfolio/static/media/profile.71ab2f04c9052da6949d.png')
        setCurrentImg(cv)
      else setCurrentImg(profile)
    }, 2000)

    return () => clearInterval(intervalId);
  }, [currentImg])

  function openNave() {
    setNav(!nav);
    nav
      ? document.body.classList.remove("overflow-hidden", "touch-none")
      : document.body.classList.add("overflow-hidden", "touch-none");
  }

  return (
    <div
      className={`w-screen bg-slate-200 dark:bg-[rgb(22,27,34)] dark:text-white h-[60px] px-5 lg:px-12 md:px-7 flex justify-between items-center fixed z-10`}
    >
      <Link to="home" smooth duration={500}>
        <h1 className="font-signature font-extrabold text-2xl mt-[10px] select-none cursor-pointer transform duration-100 active:tracking-widest">
          PiSeth
        </h1>
      </Link>
      <a href="https://www.figma.com/file/z1s6F1bjErTmMv7s9jzT1S/PiSeth-Seam?type=design&node-id=0-1&t=08YHlUC7NI5ILpjq-0"
        target="_blank" rel="noopener noreferrer"
        className={`max-md:hidden absolute left-24 lg:left-28 active:scale-150 transform duration-300
        h-[35px] w-[35px] rounded-[100%] mx-5 p-[2px] bg-slate-300  dark:bg-slate-800 
          border-[2px] dark:border-slate-500 border-slate-400
          ${currentImg === '/maportfolio/static/media/cv.7cfd3e3848953db89f1a.png' ? 'animate-pulse' : ''}`}
      >
        <LazyLoadImage
          className={`rounded-[100%]`}
          src={currentImg}
          alt="My Profile"
        />
      </a>
      <div className="max-md:absolute lg:absolute select-none left-[calc(50%-41px)]">
        <div className="relative w-20 bg-slate-300 dark:bg-slate-800 group rounded-full flex items-center cursor-pointer">
          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#E2E8F0";
              setDarkMode(false);
            }}
          >
            <FaSun size={20} />
          </div>

          <div
            className="w-1/2 h-full p-2 z-10"
            onClick={() => {
              document.querySelector("meta[name='theme-color']").content =
                "#161B22";
              setDarkMode(true);
            }}
          >
            <BsFillMoonStarsFill size={20} className="float-right" />
          </div>
          <div
            className={`bg-slate-200 dark:bg-[#171d25] p-4 rounded-full shadow-inner
           transform-gpu transition-transform duration-300 ease-in-out absolute left-[2px] ${darkMode ? "translate-x-[44px] shadow-[#fcfcfc33]" : ""
              }`}
          ></div>
        </div>
      </div>

      <ul className={`hidden md:flex space-x-4 xl:space-x-10 md:mr-10`}>
        {links.map(({ id, link }) => (
          <Link to={link} smooth duration={500}>
            <li
              key={id}
              className={`cursor-pointer capitalize duration-300 active:scale-110 md:hover:opacity-70`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>

      <div className="hidden max-md:flex items-center">
        <a href="https://www.figma.com/file/z1s6F1bjErTmMv7s9jzT1S/PiSeth-Seam?type=design&node-id=0-1&t=08YHlUC7NI5ILpjq-0"
          target="_blank" rel="noopener noreferrer"
          className={`active:scale-150 transform duration-300
          h-[35px] w-[35px] rounded-[100%] mx-5 p-[2px] bg-slate-300  dark:bg-slate-800 
          border-[2px] dark:border-slate-500 border-slate-400
          ${currentImg === '/maportfolio/static/media/cv.7cfd3e3848953db89f1a.png' ? 'animate-pulse' : ''}`}>
          <LazyLoadImage
            className={`rounded-[100%]`}
            src={currentImg}
            alt="My Profile"
          />
        </a>
        <div onClick={openNave}>
          <Hamburger bgColor="bg-black dark:bg-white z-30" isOpen={nav} />
        </div>
      </div>

      <ul
        className={`bg-inherit flex flex-col space-y-10 fixed right-0 top-0 w-screen h-screen justify-center items-center
               transform ease-in-out duration-500 z-20 ${nav ? "translate-y-[0vh]" : "-translate-y-[100vh]"
          }`}
      >
        {links.map(({ id, link }) => (
          <Link to={link} onClick={openNave} smooth duration={500}>
            <li
              key={id}
              className={`cursor-pointer capitalize text-2xl duration-100 active:scale-110`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default NavBar;
