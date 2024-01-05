import React from "react";
import "./Portfolio.css";
import "./Protfoliomedia.css";
import { CiCirclePlus } from "react-icons/ci";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";
import work4 from "../../assets/img/work4.jpg";
import work5 from "../../assets/img/work5.jpg";
import work6 from "../../assets/img/work6.jpg";

const Portfolio = () => {
  return (
    <div>
    <div className="container Portfolio">
      <div className="text-Portfolio">
        <h1>PORTFOLIO</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="card-3">
        <div className="card-into-2">
          <img src={work1} />
          <h1>Lorem impsum dolor</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
        <div className="card-into-2">
          <img src={work2} />
          <h1>Loreda Cuno Nere</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
        <div className="card-into-2">
          <img src={work3} />
          <h1>Mavrito Lana Dere</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
      </div>
      <div className="card-3">
        <div className="card-into-2">
          <img src={work4} />
          <h1>Bindo Laro Cado</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
        <div className="card-into-2">
          <img src={work5} />
          <h1>Studio Lena Mado</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
        <div className="card-into-2">
          <img src={work6} />
          <h1>Studio Big Bang</h1>
          <div className="text-ic">
            <h2>
              <span>Web Design</span> / 18 Sep. 2018
            </h2>
            <CiCirclePlus className="plusic" />
          </div>
        </div>
      </div>
    </div>

    <div className="owl"></div>
      <div className="color-1">
        
      </div>
    

    </div>
    
  );
};

export default Portfolio;
