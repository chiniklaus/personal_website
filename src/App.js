import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Knowledge from "./Components/Knowledge";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Intro from "./Components/Intro";
import Contact from "./Components/Contact";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro
          id="section0"
        />
        <Education
          id="section1"
        />
        <Knowledge
          id="section2"
        />
        {/* <div style={{backgroundImage: `url(${i1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
        </div> */}
        <Experience
          id="section3"
        />
        <Projects
          id="section4"
        />
        <Contact
          id="section5"
        />
      </div>
    );
  }
}

export default App;
