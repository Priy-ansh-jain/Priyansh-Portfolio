import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
// import { gradient } from "../assets";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath"
// import { BottomLine } from "./design/Hero";

const Benefits = () => {
  //   const [first , setFirst] = useState("")

  //   const handleClick= () =>{
  // setFirst(!first)
  //   }
  return (

    <Section id="service">

      <div className="container relative z-2 mt-28">
        <Heading className="ml-0" title="Services" />
        <div className="flex flex-wrap gap-10 mb-10">

          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat hover: bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                backgroundColor: "",
                borderColor: "Grey",
                borderWidth: "1px",
                borderRadius: " 2px 20px 2px 2px",
              }}
            >

              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h4 mb-5">{item.title}</h5>
                <p className="">{item.text}</p>
                <div className="flex items-center mt-auto ">
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    height={48}
                    width={48}
                  />
                  <a className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider z-20  " >
                    Explore More
                  </a>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8 "
                style={{ clipPath: "url(#benifits" }}
              >
                <div className="absoluter inset-0 opacity-0 transition-opacity hover:opacity-10 cursor-pointer">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt="item.item"
                      className="w-full h-full object-cover "
                    ></img>
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>

    </Section>

  );
};

export default Benefits;
