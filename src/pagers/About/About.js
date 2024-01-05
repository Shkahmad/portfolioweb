import React, { useState } from "react";
import "./About.css";
import "./Aboutmedia.css";
import testimonial from "../../assets/img/testimonial.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container about">
      <div className="About-into col-lg-6 col-md-6">
        <div className="flex-1">
          <div className="imgg">
            <img src={testimonial} />
          </div>
          <div className="About-menu">
            <h1>
              Name: <span>Ahmad Shahzad</span>
            </h1>
            <h1>
              Profile: <span>full stack developer</span>
            </h1>
            <h1>
              Email: <span>contact@example.com</span>
            </h1>
            <h1>
              Phone: <span>(617) 557-0089</span>
            </h1>
          </div>
        </div>

        {/* <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1>
                {counterOn && (
                  <CountUp start={0} end={450} duration={2} delay={0} />
                )}
                +
              </h1>
            </ScrollTrigger> */}

        <div className="skill-bar">
          <h2>Skill</h2>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="skill-line-1">
              HTML
              {counterOn && (
                <CountUp start={0} end={85} duration={2} delay={0} />
              )}
              %<br></br>
              <p>
                <span class="skill-perhtml"></span>
              </p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="skill-line-2">
              CSS
              {counterOn && (
                <CountUp start={0} end={80} duration={2} delay={0} />
              )}
              %<br></br>
              <p>
                <span class="skill-percss"></span>
              </p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="skill-line-3">
              JAVASCRIPT
              {counterOn && (
                <CountUp start={0} end={60} duration={2} delay={0} />
              )}
              %<br></br>
              <p>
                <span class="skill-perJAVASCRIPT"></span>
              </p>
            </h1>
          </ScrollTrigger>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <h1 className="skill-line-4">
              REACT
              {counterOn && (
                <CountUp start={0} end={30} duration={2} delay={0} />
              )}
              %<br></br>
              <p>
                <span class="skill-perREACT"></span>
              </p>
            </h1>
          </ScrollTrigger>
        </div>
      </div>
      <div className="about-me col-lg-6 col-md-6">
        <h1>About me</h1>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Nulla porttitor accumsan tincidunt.<br></br>
          <br></br>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
          suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. porttitor at sem.
          <br></br>
          <br></br>
          Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
          lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
      </div>
    </div>
  );
};

export default About;
