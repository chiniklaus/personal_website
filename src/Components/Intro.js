import React, { useLayoutEffect, useState } from "react";
import bg from '../bg.JPG'

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
    <div className="section" style={{minHeight: height}}>
        <div className="intro-content pt-5">
            <h1 className="text-center font-weight-bolder">你好！I am Dayu Qian</h1>
            <h4 className="pt-2 font-weight-light text-center">full-stack web developer, software engineer, film maker, student for life</h4>
            <h4 className="pt-4 font-weight-light text-center">Hi guys, my name is Dayu Qian. I graduated from Northeastern University in May 2020. I majored in</h4>
            <h4 className="pt-1 font-weight-light text-center">Computer Science. I am currently looking for a programming job! I don't have too much experience, but</h4>
            <h4 className="pt-1 font-weight-light text-center">I am passionate in programming, and I am eager to make something awesome! Checkout my computer</h4>
            <h4 className="pt-1 font-weight-light text-center">science knowledge, working experience and projects. If you like what you see, and have a job position open,</h4>
            <h2 className="pt-1 text-center">Hit me up!</h2>
        </div>
    </div>
  );
}
