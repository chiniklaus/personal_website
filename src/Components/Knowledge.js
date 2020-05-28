import React from "react";

export default function Knowledge({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="container p-4">
            <h1>Computer Knowledge</h1>
            <div className="row pt-4">
                <div className="col-4">
                    <h5>Languages:</h5>
                </div>
                <div className="col-8">
                    <h5 class="font-weight-light">Java, Python, Golang, C, Scala, HTML, CSS, JavaScript, SQL</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Libraries/Frameworks:</h5>
                </div>
                <div className="col-8">
                    <h5 class="font-weight-light">Node.js, Hadoop, Spark, React.js, Bootstrap, Angular, Spring Boot, Flask</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Operating Systems:</h5>
                </div>
                <div className="col-8">
                    <h5 class="font-weight-light">macOS, Windows, Linux</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Software Tools/method:</h5>
                </div>
                <div className="col-8">
                    <h5 class="font-weight-light">Git, Gitlab, AWS, GCP, Docker, IntelliJ, Eclipse, PyCharm, Visual Studio Code,<br></br> 
                        VirtualBox, Jira, Vagrant, Swagger, Kubernetes, Snowflake, MongoDB</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
