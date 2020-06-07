import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";

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

export default function Intro({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="intro-section" style={{
      minHeight: height}}  id={id}>
        <div className="container-fluid intro-content pb-5 mb-5">
            <h1 className="text-center">
              <strong>Full-stack Developer, Film Maker, Student For Life</strong>
            </h1>
            <h4 className="pt-4 font-weight-normal text-center">
              你好！I am Dayu Qian
            </h4>
            <h4 className="pt-4 font-weight-light text-center">
              Hi guys, my name is Dayu Qian. I graduated from Northeastern University in May 2020.
            </h4>
            <h4 className="pt-1 font-weight-light text-center">I am currently looking for a programming job located in the US! Checkout my computer</h4>
            <h4 className="pt-1 font-weight-light text-center">knowledge, experience and projects. If you like what you see, and have a position open,</h4>
            <h4 className="pt-1 font-weight-light text-center"></h4>
            <h2 className="pt-2 text-center font-weight-bolder hmu">
              <Link 
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Hit me up!
              </Link>
            </h2>
        </div>
    </div>
  );
}
