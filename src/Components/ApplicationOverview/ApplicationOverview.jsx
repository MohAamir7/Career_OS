import { useState } from "react";
import { applicationData } from "../../Data/ApplicationData";
import ApplicationCard from "../ApplicationCards/ApplicationCards";

function ApplicationOverview() {
  const [ApplicationData,setApplicationData] = useState(applicationData.slice(0,3));
  function showApplicationData(){
    setApplicationData([...applicationData]);
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Application Overview</h2>
        <button onClick={showApplicationData}>View All</button>
      </div>
      <div className="mt-4 space-y-3">
        {ApplicationData.map((obj) => (
          <ApplicationCard
            key={obj.id}
            company={obj.company}
            position={obj.position}
            date={obj.appliedDate}
          />
        ))}
      </div>
    </div>
  );
}

export default ApplicationOverview;
