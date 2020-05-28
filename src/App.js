import React, { Component } from "react";
import i1 from './1.jpg'
import "./App.css";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Knowledge from "./Components/Knowledge";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        y1: 0,
        y3: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let y1 = window.pageYOffset
    let realy1 = Math.min(y1, 600);

    this.setState({
      y1: realy1
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Education
          dark={true}
          id="section1"
        />
        <Knowledge
          dark={false}
          id="section2"
        />
        {/* <div style={{backgroundImage: `url(${i1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}>
        </div> */}
        <Experience
          dark={true}
          id="section3"
        />
        <Projects
          dark={false}
          id="section4"
        />
      </div>
    );
  }
}

export default App;
