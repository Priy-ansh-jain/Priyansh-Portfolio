import { curve, heroBackground } from "../assets";
import mens from "../assets/hero/mens.jpg";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react";

// import Generating from "./Generating";
// import Notification from "./Notification";

const Hero = () => {
  const [designation, setDesignation] = useState("Frontend Developer");

  useEffect(() => {
    // Array of designations to loop through.
    //  it will show one by one like one after another.
    const designationsArray = ["React Js Developer", "Frontend Developer", "Mern Developer", "Node.js Developer"];

    // Counter to keep track of the current designation
    let counter = 0;

    // Interval function to change designation every 3 seconds
    const interval = setInterval(() => {
      counter = (counter + 1) % designationsArray.length;
      setDesignation(designationsArray[counter]);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const parallaxRef = useRef(null);
  return (
    <Section
      className=" "
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >

      <div className=" container relative items-center" ref={parallaxRef}>

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem] pt-[12rem] -mt-[5.25rem] w-[100%]">
          <h1 className="h1 mb-6 mt-12 ">
            <p className="max-w-full">
              Explore The possibilities With Me as a Software Developer
            </p>
            <span className="inline-block relative h3 text-color-2">
              {designation}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:mt-2 "
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto m-6 text-n-2 lg:mb-8">
            Freelancer available for remote, hybrid, or on-site work. Flexible
            hours, including part-time and short-term projects (min. 2 hours).
          </p>
          <a href="https://drive.google.com/file/d/1U85JwFfwGuoODnBCZrp_wdqzNai7dBdv/view?usp=sharing" download="Priyansh Jain-Resume">
            <Button white className="text-black">Download CV</Button>
          </a>
        </div>

        <div className="relative w-[100%] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-1rem">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem] " />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] object-cover">
                <img
                  className="w-full scale-[1.1] translate-y-0-[8%] md:scale-1 md:-translate-y-[10%] lg:-translate-y-[5%]"
                  src={mens}
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <div>
                  {/* <Generating className="absolute right-5 bottom-5 md:left-1/2 md:right-auto md:bottom-8 mdz:w-[31rem] md:translte-x-1/2" /> */}

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img src={icon} height={25} width={24} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                  {/* <ScrollParallax isAbsolutelyPositioned>
                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl-flex " title="code Gneration"> 

                    </Notification>

                  </ScrollParallax> */}
                </div>
                {/* className="w-full scale-[1.7] translate-y-0-[8%] md:scale-1 md:-translate-y-[10%] lg:-translate-y-[33%]"  */}
              </div>
            </div>

            <Gradient />
          </div>
          <div
            className="absolute
          -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"
          >
            <img
              src={heroBackground}
              className=" w-full"
              alt="hero"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />

    </Section>
  );
};

export default Hero;
