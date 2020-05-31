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

export default function Experience({ id }) {
  const [width, height] = useWindowSize();
  return (
    <div className="section border-top" style={{minHeight: height}}>
      <div className="section-content" id={id}>
        <div className="container shadow p-5" style={{background: 'white'}}>
            <h1>Work Experience</h1>
            <h5 className="pt-4 font-weight-normal">Vistaprint, Waltham, MA</h5>
            <h5 className="font-weight-normal font-italic">Software Engineer Co-op - July 2019 to December 2019</h5>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                During my 6-month co-op at Vistaprint, I worked on a automated Gitlab user management system.
            </p>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                - Working with <strong>Gitlab API</strong>, I designed, developed and deployed a <strong>flask-swagger web application</strong>. The application<br></br>
                provides additional APIs that enable users to retrieve and modify Gitlab data easily. The application was built<br></br>
                with <strong>Docker</strong>, and deployed on <strong>Google Kubernetes Engine</strong>. The application was used by other engineers to modify user<br></br>
                accessibility and retreive group user data. It was a key piece in the company's Gitlab licence chargeback project.<br></br>
            </p>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                - With the help of the web application I developed, I designed and developed a <strong>Python</strong> application that<br></br>
                <strong>manages over 400 company Gitlab users</strong>. The application is a completly <strong>automated tool</strong>. Everyday, it finds new users<br></br>
                who were added to any company Gitlab group, grants them read access to company projects. It also finds users who<br></br>
                left the comapny, removes their access to any company Gitlab group or project. After the updates, the application<br></br>
                generates a report, and sends the report to Gitlab management team slack channel using a <strong>slack bot</strong>.
            </p>
            <p className="pt-2 font-weight-normal">
                - Constructed <strong>data pipelines</strong> that send Gitlab audit events data and project CI/CD pipeline data into <strong>Snowflake</strong> data lake
            </p>

            <h5 className="pt-4 font-weight-normal">Bank of China, New York City, NY</h5>
            <h5 className="font-weight-normal font-italic">Testing intern - July 2018 to December 2018</h5>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                During my 6-month internship at Bank of China, I worked on the installation & testing of a sanction software FircoSoft
            </p>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                - Managed projects by coordinating with different team members to request status updates, keeping track of the upcoming<br></br>
                deadlines, getting necessary approvals from the management, and making sure the assigned tasks were completed by the team members
            </p>
            <p className="pt-2 pb-0 mb-0 font-weight-normal">
                - Supported the team with system integration testing and user acceptance testing of the watchlist filtering software FircoSoft
            </p>
            <p className="pt-2 font-weight-normal">
                - Organized meetings and drafted weekly/monthly project reports to communicate the project completion status to the management
            </p>
        </div>
      </div>
    </div>
  );
}
