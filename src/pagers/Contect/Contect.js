import React from "react";
import "./Contect.css";
import "./Contectmedia.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { LiaSmsSolid } from "react-icons/lia";
import { CiMobile2 } from "react-icons/ci";

const Contect = () => {
  return (
    <div>
      <div className="Contect-bg"></div>
      <div className="color-2">
        <div className="container from-bg">
          <div className="Message-Us col-lg-6 col-md-6 col-sm-12">
            <h1>Send Message Us</h1>
            <form action="#">
              <input type="text" placeholder="Name" />
              <br></br>
              <input type="text" placeholder="Email" />
              <br></br>
              <input type="text" placeholder="Subject" />
              <br></br>
              <textarea name="" id="" placeholder="Message" rows="5"></textarea>
              <br></br>
              <button className="btn-1">Send Message</button>
            </form>
          </div>
          <div className="Get-in col-lg-6 col-md-6 col-sm-12">
            <h1>Get in Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
              magni ipsum suscipit amet? Autem nemo esse laboriosam ratione
              nobis mollitia inventore?
            </p>
            <div className="location">
              <p>
                {" "}
                <CiLocationOn className="l-p-m" /> 329 WASHINGTON ST BOSTON, MA
                02108
              </p>
              <p>
                {" "}
                <CiMobile2 className="l-p-m" /> (617) 557-0089
              </p>
              <p>
                {" "}
                <LiaSmsSolid className="l-p-m" /> contact@example.com
              </p>
            </div>
            <div className="f-i-t-i">
              <FaFacebook className="fiti" />
              <FaInstagram className="fiti" />
              <FaTwitter className="fiti" />
              <CiLinkedin className="fiti" />
            </div>
          </div>
        </div>
      </div>
      <div className="color-3">
        <h1>
          Designed by <span>AHMAD</span>
        </h1>
      </div>
    </div>
  );
};

export default Contect;
