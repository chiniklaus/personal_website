import React, { useEffect, useState } from "react";

export default function Education({ dark, id }) {
  const [width, setWidth] = useState(window.innerWidth)
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="container p-4">
            <h1>Education</h1>
            <h3 className="pt-4">Northeastern University</h3>
            <h5 className="font-weight-normal">Khoury College of Computer Sciences</h5>
            <div className="row">
                <div className="col-6"><h5 className="font-italic font-weight-lighter">Bachelor of Art in Computer Science, May 2020</h5></div>
            </div>
            <h4 className="mt-3">Related Courses</h4>
            <p>Software Development, Web Development, <br></br>Computer Systems, Algorithms and Data,
            Object-Oriented Design, <br></br>Large-Scale Parallel Data Processing, Networks & Distributed Systems
            </p>
        </div>
      </div>
    // </div>
  );
}