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
        <div class="row d-flex justify-content-center mt-4 mb-4">
          <MDBIcon className="pr-4" fab icon="linkedin-in" size="2x"/>
          <MDBIcon className="pr-4" fab icon="github" size="2x"/>
          <MDBIcon fab icon="facebook" size="2x"/>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  );
}
