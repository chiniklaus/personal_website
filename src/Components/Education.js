import React, { useLayoutEffect, useState } from "react";
import neu from '../neu.png'

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

export default function Education({ dark, id }) {
  const [width, height] = useWindowSize();
  return (
    <div className={"section" + (dark ? " section-dark" : "")} style={{minHeight: height}}>
      <div className="section-content section-dark" id={id}>
        <div className="container-fluid p-4">
          <div className="row p-5 shadow-lg">
            <div className="col-6">
              <h1>Education</h1>
              <h3 className="pt-4">Northeastern University</h3>
              <h5 className="font-weight-normal">Khoury College of Computer Sciences</h5>
              <h5 className="font-italic font-weight-light">Bachelor of Art in Computer Science, May 2020</h5>
              <h4 className="mt-4">Related Courses</h4>
              <p>Software Development, Web Development, <br></br>Computer Systems, Algorithms and Data,
              Object-Oriented Design, <br></br>Large-Scale Parallel Data Processing, Networks & Distributed Systems
              </p>
            </div>
            <div className="col-5 pl-5">
              <img
                src={neu}
                className="neu"
                alt="neu"
                style={{
                  height: 400
                }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
