

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react"; 
import styles from "../../../styles/Projects.module.css";
import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <div id="projects">
      <div className="container">
        <h1 className="stroke-text text-center">
          {"<"} Projects {"/>"}
        </h1>
        <div>
          <div>
            <section className="hero-section">

              <div className="cards-grid">
                
              

                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://skkhandokar8.pythonanywhere.com/static/images/bloods.png)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Blood Management System</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://skkhandokar8.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/blood"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://pbs.twimg.com/media/Fyr7c6RaEAANL1e?format=jpg&name=small)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Disease Prediction</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://skkhandokar9.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/disease_predict"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/353660385_2490537384447458_5765105241276395876_n.jpg?stp=dst-jpg_p173x172&_nc_cat=105&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=L65cfou-Zf0AX-YE0Zl&_nc_ht=scontent.fdac137-1.fna&oh=00_AfADw566dx6_iGhoiwFXW7M888vcjMZ39yHC01VfNSk9lA&oe=649064A7)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">E-Commerce Site</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://rony7090.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/WARRIORS-MART"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://arhammultiservice.pythonanywhere.com/media/slides/cons1_LDRudmz.jpg)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Consultancy Site</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://arhammultiservice.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/consultancy_site"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/355450839_2495648973936299_7161835070967368986_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=qmVIaKCBIWEAX-ezTLZ&_nc_ht=scontent.fdac137-1.fna&oh=00_AfB_JUlXMow3mdMu-x_ar7rv7srSGLTTY3bR0fy79egWQA&oe=649A410B)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">React Todo App</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://reacttodoproject.netlify.app/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/reactTodoProject"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>


              <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/355843757_2495643383936858_6671678189501918001_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=HVp-GC8tkigAX-2f4I1&_nc_ht=scontent.fdac137-1.fna&oh=00_AfAfGcSG8gNx3b24tCGUyPzIDxtlaFOgn9fiGzAPKbkC3w&oe=649959A2)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Banking Project</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://skkhandokar10.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/banking-with-django"
                    >
                      <FaGithub />
                    </a>
                  </div>
                        
          //cards 
             <div className="cards">
                  <div
                    className="cards__background"
                    style={{
                      backgroundImage: `url(https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/363805413_2524376021063594_8538465808942696791_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dbeb18&_nc_ohc=W-nfTLoE6CgAX8DWv86&_nc_ht=scontent.fdac137-1.fna&oh=00_AfDTAapPA0kJ6Z_iNsbSZYZ-cUT6zilbLXk4seZCZzM10Q&oe=64C9119A)`,
                    }}
                  ></div>
                  <div className="cards__content">
                    <p className="cards__category">Category</p>
                    <h3 className="cards__heading">Short URL Project</h3>
                  </div>
                  <div className="social-links card-footer text-center pb-2">
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://skkhandokar11.pythonanywhere.com/"
                    >
                      <BiLinkExternal />
                    </a>
                    <a className="outer-shadow hover-in-shadow" href="/">
                      <MdDescription />
                    </a>
                    <a
                      className="outer-shadow hover-in-shadow"
                      // target="_blank"
                      href="https://github.com/skkhandokar/urlshortner-project"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
          
          {/* project cards ends */}


              </div>
            </section>
            <div className={`${styles.projects_blur} blur`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
