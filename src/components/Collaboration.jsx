import { useState } from "react";
import Section from "./Section";
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import { BottomLine } from "./design/Hero";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleSeeMoreClick = () => {
    setIsPopUpOpen(true);
  };

  const handleCloseClick = () => {
    setIsPopUpOpen(false);
  };

  return (
    <Section id="about-me">
      <BottomLine />
      <div className="container lg:flex">
        <div className="max-w-[25rem] ">
          <h2 className="h2 mb-8 md:mb-2">About Me</h2>
          <p className="text-n-3 mb-8">
            Hi My Name is Priyansh Jain, I am a frontend Developer. I can
            provide clean code and pixel perfect design. I also make website
            more & more interactive with web animations.
          </p>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 ">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button onClick={handleSeeMoreClick}>See More</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4 xl:ml-auto">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:max-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square items-center  border-n-6 border rounded-full -translate-x-1/2 scale-75 md:scale-100% ">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full animate-spin delay-1000 transition duration-1100 ease-in-out">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="Brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[3rem] flex w-[4.2rem] h-[4.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className="m-auto w-[5rem]  "
                      width={app.width}
                      height={app.height}
                      alt="app.title"
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
      {isPopUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 pt-14 pb-14">

          <div className="bg-white w-full h-full s max-w-screen-md rounded-lg shadow-lg">

            <h2 className="text-2xl font-bold mb-4">Pop-up Content</h2>
            <div className="mb-4 text-black">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-[100%] relative"
                onClick={handleCloseClick}
              >
                close
              </button>
              <div className=" flex gap-2 ">
                <div className="w-full ">
                  <h1 className="pb-[.7rem] text-[1.5rem]">Personal Info</h1>
                  <div className="bg-gray-400 gap-2 flex flex-col p-2">
                    <p className="bg-gray-800 text-white shadowm-lg p-1"> Name - Priyansh Jain </p>
                    <p className="bg-gray-800 text-white shadowm-lg p-1"> Freelance - Available</p>
                    <p className="bg-gray-800 text-white shadowm-lg p-1"> Mail-id - priyanshjain2303@gmail.com</p>
                    <p className="bg-gray-800 text-white shadowm-lg p-1"> Languages - English, Hindi</p>
                    <p className="bg-gray-800 text-white shadowm-lg p-1">Address - India</p>
                    <p className="bg-gray-800 text-white shadowm-lg p-1">Nationality - Indian</p>
                  </div>
                  <a href="https://drive.google.com/file/d/1U85JwFfwGuoODnBCZrp_wdqzNai7dBdv/view?usp=sharing" download="Priyansh Jain-Resume ">
                    <Button className=" text-black bg-black rounded-md mt-3" >Download CV</Button>
                  </a>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <h1 className="text-[1.5rem]">My Skills</h1>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-700">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "95%" }}
                    >
                      HTML
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "95%" }}
                    >
                      CSS
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "95%" }}
                    >
                      Tailwind CSS
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "85%" }}
                    >
                      JavaScript
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "90%" }}
                    >
                      React JS
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "90%" }}
                    >
                      Redux
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "60%" }}
                    >
                      Next.js
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "75%" }}
                    >
                      Node JS
                    </div>
                  </div>

                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "70%" }}
                    >
                      Linux
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "90%" }}
                    >
                      MySQL
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "90%" }}
                    >
                      Git
                    </div>
                  </div>
                  <div className="w-[100%] p-2 bg-neutral-200 dark:bg-neutral-600">
                    <div
                      className="bg-primary p-0.5 text-right text-xs font-medium leading-none text-white bg-gray-700"
                      style={{ width: "70%" }}
                    >
                      Java
                    </div>
                  </div>
                </div>
              </div>
              <div>

              </div>
            </div>

          </div>
        </div>
      )}
    </Section>
  );
};

export default Collaboration;
