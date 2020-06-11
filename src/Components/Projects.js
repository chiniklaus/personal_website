import React, { useLayoutEffect, useState } from "react";
import { MDBMask, MDBView, MDBIcon } from "mdbreact";
import nm from '../gwi.png';
import sh from '../sh.png';
import st from '../st.jpg';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Projects({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="section border-top" style={{minHeight: height}}>
      <div className="section-content" id={id}>
        <div className="container shadow p-5 card">
          <h1>Projects</h1>
          <div className="row border-bottom pb-5">
            <div className="col-6">
              <h5 className="pt-4 font-weight-normal">GottaWatchIt! - April 2020</h5>
              <p className="font-weight-normal font-italic font-weight-bold mb-3">
              backend: Java Spring Boot, MySQL database<br></br>
              frontend: Reactjs, Bootstrap, MDBReact
              </p>
              <p className="font-weight-normal">
              After I graduated from college, I decided to make a movie recommendation website for fun! In the past, I always work
              in teams. This time, I want to do it all, from front end to back end.
              </p>
              <p>
              GottaWatchIt! is a movie recommendation website that enables user to document his/her own movie viewing journey. User
              can personalize their profile picture, select the movies he/she likes, and select favorite movie! The site also has
              social network features.
              </p>
              <p>
                <strong>Hover over the picture on the right to find out more about the project!</strong>
              </p>
            </div>
            <div className="col-6 mt-4">
            <MDBView hover>
              <img src={nm} className="rounded img-fluid z-depth-1" alt="..."/>
              <MDBMask className="flex-center" overlay="black-strong">
                <div className="container-fluid text-center">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-10" style={{display: 'flex', alignItems: 'center'}}>
                      <a href='https://github.com/chiniklaus/GottaWatchIt-Client'>
                        <MDBIcon far icon="arrow-alt-circle-right" className="githubArrow" size="3x"/>
                      </a>
                      <h5 className="pl-2" style={{color:'white', marginLeft: 5}}>github repo</h5>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-2"></div>
                    <div className="col-10" style={{display: 'flex', alignItems: 'center'}}>
                      <a href='https://www.youtube.com/watch?v=G7cCgAqFYZU&t=7s'>
                        <MDBIcon fab icon="youtube" className="githubArrow" size="3x"/>
                      </a>
                      <h5 className="pl-2" style={{color:'white'}}>youtube system demo</h5>
                    </div>
                  </div>
                </div>
              </MDBMask>        
            </MDBView>
            </div>
          </div>

          <div className="row border-bottom pt-3 pb-5">
            <div className="col-6">
              <h5 className="pt-4 font-weight-normal">NUSH shell - February 2019</h5>
              <p className="font-weight-normal font-italic font-weight-bold mb-3">
              programming language: c<br></br>
              operating system: Linux
              </p>
              <p className="font-weight-normal">
              For my computer system class at Northeastern University, I developed a personalized Unix shell that support operators like redirect I/O,
              pipe, and, or, background.
              </p>
            </div>
            <div className="col-6 mt-4">
              <MDBView hover>
                <img src={sh} className="rounded img-fluid z-depth-1" alt="..."/>
                <MDBMask className="flex-center" overlay="black-strong">
                  <div className="container-fluid text-center">
                      <a href='https://github.com/chiniklaus/nush'>
                        <MDBIcon far icon="arrow-alt-circle-right" className="githubArrow" size="3x"/>
                      </a>
                  </div>
                </MDBMask>        
              </MDBView>
            </div>
          </div>

          <div className="row pt-3 pb-5">
            <div className="col-6">
              <h5 className="pt-4 font-weight-normal">Spoiled Tomatillos - Spring 2018</h5>
              <p className="font-weight-normal font-italic font-weight-bold mb-3">
              backend: Java Spring Boot, MySQL database<br></br>
              frontend: TypeScript, Reactjs, Redux<br></br>
              devops: Github, Jenkins, SonarQube
              </p>
              <p className="font-weight-normal">
              For my software development class, I worked with 4 other fellow classmates and developed a web application that<br></br>
              let user rate and review movies. I was in charge of the backend API development.
              </p>
            </div>
            <div className="col-6 mt-4">
              <img src={st} className="rounded img-fluid z-depth-1" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
