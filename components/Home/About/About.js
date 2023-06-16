/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../../styles/About.module.css";
import { FaDownload } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const About = () => {
  return (
    <div id={styles.about}>
      <section
        id="about"
        // className="about-section section"
        // className={styles.about_section}
        className={`${styles["about-section "]} ${styles["section"]}`}
      >
        <div className="container pt-5">
          <div className="row">
            <div
            
              className={`${styles["about-img"]} col-12 col-md-6 d-flex align-items-center justify-content-center flex-column`}
            >
              <img
                id={`${styles["about-img"]}`}
                className="img-fluid inner-shadow"
                src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/347556059_3455409094726501_6977909173920653186_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=C1iKVWrie-EAX-U4Oyv&_nc_ht=scontent.fdac137-1.fna&oh=00_AfB9xJHIUxqzoc74ZndjrBbcAansyW0mOklvVRWK0PDtQA&oe=648FCBB8"
                alt=""
              />
              <div className={`${styles["social-links"]}`}>
                {/* <a
                  className="outer-shadow hover-in-shadow"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebook />
                </a> */}
                <a
                  className="outer-shadow hover-in-shadow"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/skkhandokar/"
                >
                  <BsLinkedin />
                </a>
                {/* <a
                  className="outer-shadow hover-in-shadow"
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </a> */}
                <a
                  className="outer-shadow hover-in-shadow"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/skkhandokar"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="about-info col-12 col-md-6 d-flex align-items-center">
              <div style={{ fontFamily: `'Arima', cursive` }}>
                <p>
                  <span className="fw-bold">
                    Hi! I am Khandokar Samadul Kabir. I am a Web Developer.{" "}
                  </span>{" "}
                  I have worked both in web and software development. But
                  currently doing web development seriously. I can develop
                  website by using HTML, CSS, JavaScript, React.js, Bootstrap,
                  Tailwind CSS and so on. I have did more than 10 web projects. I can
                  adjust with innovative tach or new feature of programming
                  easily.
                </p>
                <div className={`${styles.about_blur} blur`}></div>
                <p>
                  I also know  C programing, C++, Python, Django. I have 
                  knowledge of Object Oriented Programming and Data
                  Structures and Algorithm. Also idea of database management
                  system. Made project by using PostgreSQL and MySQL.
                </p>
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

                <a
                  href="#contact"
                  className="btn-1 outer-shadow hover-in-shadow"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
