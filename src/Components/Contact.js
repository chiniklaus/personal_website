import React from "react";
import { MDBIcon } from "mdbreact";

export default function Contact({ id }) {
  return (
    <div className="section border-top contact">
      <div className="container">
        <div className="row d-flex justify-content-center mt-4">
          <h2 id={id} className="text-center"><strong>Dayu Qian</strong></h2>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <h4 className="text-center">chiniklaus09@gmail.com</h4>
        </div>
        <div className="row d-flex justify-content-center mt-4 mb-4">
          <a href="https://www.linkedin.com/in/dayu-qian-78a177133/" className="iconLink pr-4"><MDBIcon fab icon="linkedin-in" size="2x"/></a>
          <a href="https://github.com/chiniklaus" className="iconLink pr-4"><MDBIcon fab icon="github" size="2x" /></a>
          <a href="https://www.facebook.com/dayu.qian" className="iconLink pr-4"><MDBIcon fab icon="facebook" size="2x"/></a>
          <a href="mailto:chiniklaus09@gmail.com" className="iconLink"><MDBIcon icon="envelope" size="2x"/></a>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  );
}
