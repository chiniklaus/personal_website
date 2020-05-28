import React from "react";

export default function Projects({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="container">
            <h1>Projects</h1>
            <h5 className="pt-4 font-weight-normal">NU-Movies - April 2020</h5>
            <p className="font-weight-normal font-italic font-weight-bold pb-0 mb-0">
            backend: Java Spring Boot, MySQL database<br></br>
            frontend: Reactjs, Bootstrap, MDBReact
            </p>
            <p className="font-weight-normal">
            After graduation, I decided to utilize my knowledge on web development and develop a website that reflects my <br></br>
            passion: movies.<br></br>
            NU-Movies is a comprehensive movie recommendation website. User can register an account, login, select favorite movie, <br></br>
            like a movie, recommend a movie to a friend, add friend, set prifile picture, search for movies, search for user, <br></br>
            browse information of hundreds of thousands of movies and TV shows.
            </p>

            <h5 className="pt-4 font-weight-normal">NUSH shell - February 2019</h5>
            <p className="font-weight-normal font-italic font-weight-bold pb-0 mb-0">
            programming language: c
            </p>
            <p className="font-weight-normal">
            For my computer system class, I developed a personalized Unix shell that support operators like redirect I/O, <br></br>
            pipe, and, or, background.
            </p>

            <h5 className="pt-4 font-weight-normal">Spoiled Tomatillos - Spring 2018</h5>
            <p className="font-weight-normal font-italic font-weight-bold pb-0 mb-0">
            backend: Java Spring Boot, MySQL database<br></br>
            frontend: TypeScript, Reactjs, Redux<br></br>
            devops: Github, enkins, SonarQube
            </p>
            <p className="font-weight-normal">
            For my software development class, I worked with 4 other fellow classmates and developed a web application that<br></br>
            let user rate and review movies. I was in charge of the backend API development.
            </p>
        </div>
      </div>
    </div>
  );
}
