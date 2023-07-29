/* eslint-disable @next/next/no-img-element */
import { FaDownload } from "react-icons/fa";
import React from "react";
import Typewriter from "typewriter-effect";
// import styles from "../../../styles/HeroSection.module.css";
import styles from "../../../styles/particles.module.css";
import "animate.css";

const HeroSection = () => {
  return (
    <div>
      <div className="main-container">
        <div className="main">
          <div className="header">
            {/* <div className="blur hero-blur"></div> */}
            <div className="hero-container">
              <div className="row-1 full-screen">
                <div className="home-text">
                  <h1 className="banner-logo">Khandokar Samadul Kabir</h1>
                  <div className="banner-skills">
                    <h1>Have skills of </h1>
                    <h1 className="skills">
                      <Typewriter
                        options={{
                          autoStart: true,
                          loop: true,
                          delay: 90,
                          strings: [
                            "Python With OOP",
                            "Django",
                            "JavaScript",
                            "React.js",
                            "HTML",
                            "CSS",
                            "Tailwind CSS",
                            "Bootstrap",
                            "C (BASIC)",
                            "C++ With OOP",
                            "Node.js",
                            "PHP",
                            "PostgreSQL",
                            "MySQL",
                          ],
                        }}
                      ></Typewriter>
                    </h1>
                  </div>
                  <br />
                  <br />
                  <a
                  style={{ textDecoration: "none" }}
                  className="btn-1 outer-shadow hover-in-shadow me-3 mb-3"
                  href={
                    "https://drive.google.com/uc?id=1PKsxoU9jmBGVD0pj1jb2TbxUCpY-gZI5&export=download"
                  }
                  download="S.pdf"
                >
                  Download Resume <FaDownload />
                  
                </a>
                </div>
                <div className="home-img mx-auto">
                  <div className="img-box inner-shadow">
                    <img
                      className="outer-shadow"
                      src="https://media.licdn.com/dms/image/D5603AQHZCCeo53XECA/profile-displayphoto-shrink_200_200/0/1673499601506?e=1692230400&v=beta&t=yQT9nJuTqz2m_8w7M8s4ljz2qxo2M6tMCYhMTCNxFLs"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow one"></div>
        <div className="shadow two"></div>
      </div>
    </div>
  );
};

export default HeroSection;
