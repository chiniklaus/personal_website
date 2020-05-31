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

export default function Education({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="section border-top" style={{minHeight: height}}>
      <div className="section-content" id={id}>
      <div>
        <div className="container rounded shadow p-5">
          <div className="row pl-4 pr-5">
            <div className="col-8">
              <h2>Education</h2>
              <h4 className="pt-4">Northeastern University</h4>
              <h5 className="font-weight-normal">Khoury College of Computer Sciences</h5>
              <h5 className="font-italic font-weight-light">Bachelor of Art in Computer Science, May 2020</h5>
              <h5 className="mt-4">Related Courses</h5>
              <p>
              Web Development<br></br>
              Computer Systems<br></br>
              Software Development<br></br>
              Object-Oriented Design<br></br>
              Algorithms and Data Structures<br></br>
              Networks & Distributed Systems<br></br>
              Large-Scale Parallel Data Processing<br></br>
              </p>
            </div>
            <div className="col-4">
              <div className="row" style={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                <img
                  src={neu}
                  className="neu"
                  alt="neu"
                  style={{
                    height: 250
                  }}
                />
              </div>
              <div  className="row" style={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                <h4 className="text-center font-italic font-weight-normal pt-4">Lux, Veritas, Virtus</h4>
              </div>
              <div  className="row" style={{
                display: 'flex',
                justifyContent: 'center'
                }}>
                <h4 className="text-center font-italic font-weight-light pt-1">Light, Truth, Courage</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
