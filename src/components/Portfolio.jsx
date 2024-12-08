import React from "react";
import calculator from "../assets/portfolio/calculator.png";
import itphnomden from "../assets/portfolio/it-phnomden.jpg";
import portfolio from "../assets/portfolio/portfolio.png";
import khlakhlouk from "../assets/portfolio/khlakhlouk.png";
import dictionary from "../assets/portfolio/dictionary.png";
import music from "../assets/portfolio/music.png";
import prediction from "../assets/portfolio/prediction.png";
import { MdPermContactCalendar } from "react-icons/md"

const projects = [
  {
    id: 0,
    imgSrc: itphnomden,
    demoLink: 'https://it-phnomden.github.io/it-phnomden/',
    sourceLink: 'https://github.com/it-phnomden/it-phnomden'
  }, {
    id: 1,
    imgSrc: calculator,
    demoLink: 'https://it-phnomden.github.io/easy-calculate/',
    sourceLink: 'https://github.com/it-phnomden/easy-calculate'
  }, {
    id: 2,
    imgSrc: portfolio,
    demoLink: 'https://it-phnomden.github.io/maportfolio/',
    sourceLink: 'https://github.com/it-phnomden/maportfolio'
  }, {
    id: 3,
    imgSrc: khlakhlouk,
    demoLink: 'https://it-phnomden.github.io/khla-khlouk/',
    sourceLink: 'https://github.com/it-phnomden/khla-khlouk'
  }
  , {
    id: 4,
    imgSrc: prediction,
    demoLink: 'https://it-phnomden.github.io/khmer-horoscope/',
    sourceLink: 'https://github.com/it-phnomden/khmer-horoscope'
  }, {
    id: 5,
    imgSrc: dictionary,
    demoLink: 'https://it-phnomden.github.io/dictionary/',
    sourceLink: 'https://github.com/it-phnomden/dictionary'
  }, {
    id: 6,
    imgSrc: music,
    demoLink: 'https://it-phnomden.github.io/jomreang/',
    sourceLink: 'https://github.com/it-phnomden/jomreang'
  }
]

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="md:h-screen flex flex-col justify-center max-md:pt-[70px]"
    >
      <div>
        <div data-aos="fade-up"
          className="bg-[#F4F6F8] dark:bg-[#161B22] p-4 rounded-t-2xl mb-3">
          <div className="flex items-center rounded-2xl py-3 bg-[#e9ecf3] dark:bg-[#1f252c] ">
            <MdPermContactCalendar size={30} className="mx-3" />
            <p className="text-xl font-extrabold w-fit ">Portfolio</p>
          </div>
          <p className="text-lg indent-7 p-3 pb-0">
            Here are some projects that have done before. If you want to see
            the source code and how it works you can check them out below.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-offset="100"
          className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {
            projects.map(({ id, imgSrc, demoLink, sourceLink }) => (
              <div key={id}
                className="rounded-2xl p-4 text-center bg-[#F4F6F8] dark:bg-[#161B22] flex flex-col items-center"
              >
                <img src={imgSrc} alt="Calculator.png"
                className="h-40 object-contain"
                />
                <div className="flex space-x-6" id="check-out">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">Live</a>
                  <a href={sourceLink} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
