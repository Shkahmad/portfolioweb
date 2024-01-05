import React, { useState } from "react";
import "./Services.css";
import "./Servicesmedia.css";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { RiGalleryLine } from "react-icons/ri";
import { LuUsers } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Services = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <div className="container Services">
        <div className="text">
          <h1>SERVICES</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card-1">
            <div className="card-into">
              <BiMessageSquareDots className="icons" />
              <h1>WEB DESIGN</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
            <div className="card-into">
              <MdOutlineMessage className="icons" />
              <h1>WEB DEVELOPMENT</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
            <div className="card-into">
              <MdOutlineAlignHorizontalLeft className="icons" />
              <h1>PHOTOGRAPHY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
          </div>
          <div className="card-1">
            <div className="card-into">
              <GoDeviceCameraVideo className="icons" />
              <h1>RESPONSIVE DESIGN</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
            <div className="card-into">
              <IoIosSunny className="icons" />
              <h1>GRAPHIC DESIGN</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
            <div className="card-into">
              <CiCalendarDate className="icons" />
              <h1>MARKETING SERVICES</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                adipisci eaque autem fugiat! Quia, provident vitae! Magni
                tempora perferendis eum non provident.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="comparison"></div>
      <div className="color">
        <div className=" container card-2">
          <div className="card-into-1">
            <FaCheck className="icon" />

            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1
                style={{
                  color: "#fff",
                }}
              >
                {counterOn && (
                  <CountUp start={0} end={450} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
            <p>WORKS COMPLETED</p>
          </div>
          <div className="card-into-1">
            <RiGalleryLine className="icon" />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1
                style={{
                  color: "#fff",
                }}
              >
                {counterOn && (
                  <CountUp start={0} end={25} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="card-into-1">
            <LuUsers className="icon" />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1
                style={{
                  color: "#fff",
                }}
              >
                {counterOn && (
                  <CountUp start={0} end={500} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
            <p>TOTAL CLIENTS</p>
          </div>
          <div className="card-into-1">
            <FaUserGraduate className="icon" />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1
                style={{
                  color: "#fff",
                }}
              >
                {counterOn && (
                  <CountUp start={0} end={48} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger>
            <p>AWARD WON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
