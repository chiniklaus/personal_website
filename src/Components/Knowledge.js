import React, { useLayoutEffect, useState } from "react";

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

export default function Knowledge({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="section border-top" style={{minHeight: height}}>
      <div className="section-content" id={id}>
        <div className="container shadow p-5 card">
            <h1>Computer Knowledge</h1>
            <div className="row pt-4">
                <div className="col-4">
                    <h5>Languages:</h5>
                </div>
                <div className="col-8">
                    <h5 className="font-weight-light">Java, Python, JavaScript, HTML, CSS, Scala, C, SQL, Golang</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Libraries/Frameworks:</h5>
                </div>
                <div className="col-8">
                    <h5 className="font-weight-light">Node.js, Hadoop, Spark, React.js, Bootstrap, Angular, Spring Boot, Flask</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Operating Systems:</h5>
                </div>
                <div className="col-8">
                    <h5 className="font-weight-light">macOS, Windows, Linux</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h5>Software Tools/method:</h5>
                </div>
                <div className="col-8">
                    <h5 className="font-weight-light">Git, Gitlab, AWS, GCP, Docker, IntelliJ, Eclipse, PyCharm, VS Code,<br></br> 
                        VirtualBox, Jira, Vagrant, Swagger, Kubernetes, Snowflake, MongoDB</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
