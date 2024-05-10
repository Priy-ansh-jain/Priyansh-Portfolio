
import Section from "./Section";
import Heading from "./Heading";
import { FaAngleRight } from "react-icons/fa"; // Importing left arrow icon
import { service1, service2, service3, service4 } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BottomLine } from "./design/Hero";

// Custom Next Arrow Component
// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow `}
      style={{ ...style, right: "-30px" }}
      onClick={onClick}
    >
      <button className="rounded-full border-stone-400 hover:border-color-1 rotate-45 border-2 p-5 -translate-x-3 -translate-y-[2rem]">

      </button>

    </div>
  );
};

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow `}
      style={{ ...style, left: "-30px", padding: "2" }}
      onClick={onClick}
    >
      <button className="rounded-full border-stone-400 hover:border-color-1 rotate-45 border-2 p-5 -translate-x-3 -translate-y-[2rem]">

      </button>

    </div>
  );
};


const Project = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Section id="projects">
      <BottomLine />
      <div className="container">
        <Heading className="flex justify-center"
          title="Projects"
          text=""
        />
        <Slider {...settings} >
          <div className="flex w-full p-2">
            <div className="relative z-1 flex items-center w-full mb-5 p-28 border border-n-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <img
                  className="w-full h-full md:object-right"
                  alt="project"
                  src={service2}
                />
              </div>
              <div className="relative z-1 max-w-[17rem] top-[280px] ml-[100%] h-[15rem] cursor-pointer">
                <a
                  href="https://responsive-bank-frontend-design.netlify.app/"
                  className="flex border border-n-6 p-2 rounded-[0.5rem] hover:text-red-600"
                >
                  Visit
                  <div className="flex ml-1">
                    <FaAngleRight className="mt-[0.2rem] hover:translate-x-2 transition duration-150 ease-out hover:ease-in hover:text-red-600" />
                    <FaAngleRight className="mt-[0.2rem] ml-0" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full  p-2">
            <div className="relative z-1 flex items-center w-full mb-5 p-28 border border-n-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <img
                  className="w-full h-full md:object-right"
                  alt="project"
                  src={service1}
                />
              </div>
              <div className="relative z-1 max-w-[17rem] top-[280px] ml-[100%] h-[15rem] cursor-pointer">
                <a
                  href=" https://larq-ecommerce-clone.netlify.app/"
                  className="flex border border-n-6 p-2 rounded-[0.5rem] hover:text-red-600 bg-slate-900"
                >
                  Visit{" "}
                  <div className="flex ml-1 ">
                    <FaAngleRight className="mt-[0.2rem] hover:translate-x-2 transition duration-150 ease-out hover:ease-in hover:text-red-600" />
                    <FaAngleRight className="mt-[0.2rem] ml-0" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full  p-2">
            <div className="relative z-1 flex items-center w-full mb-5 p-28 border border-n-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <img
                  className="w-full h-full md:object-right"
                  alt="project"
                  src={service3}
                />
              </div>
              <div className="relative z-1 max-w-[17rem] top-[280px] ml-[100%] h-[15rem] cursor-pointer">
                <a
                  href="https://gymbox-web.netlify.app/"
                  className="flex border border-n-6 p-2 rounded-[0.5rem] hover:text-red-600"
                >
                  Visit{" "}
                  <div className="flex ml-1">
                    <FaAngleRight className="mt-[0.2rem] hover:translate-x-2 transition duration-150 ease-out hover:ease-in hover:text-red-600" />
                    <FaAngleRight className="mt-[0.2rem] ml-0" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full  p-2">
            <div className="relative z-1 flex items-center w-full mb-5 p-28 border border-n-10 rounded-3xl overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <img
                  className="w-full h-full md:object-right"
                  alt="project"
                  src={service4}
                />
              </div>
              <div className="relative z-1 max-w-[17rem] top-[280px] ml-[100%] h-[15rem] cursor-pointer">

                <div
                  href=""
                  className="flex border border-n-6 p-2 rounded-[0.5rem] hover:text-color-3 bg-stone-800"
                >
                  Visit
                  <div className="flex ml-1">
                    <FaAngleRight className="mt-[0.2rem] hover:translate-x-2 transition duration-150 ease-out hover:ease-in hover:text-red-600 " />
                    <FaAngleRight className="mt-[0.2rem] ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

    </Section>
  );
};

export default Project;







