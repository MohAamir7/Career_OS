import { useState } from "react";
import { applicationData } from "../../Data/ApplicationData";
import ApplicationCard from "../ApplicationCards/ApplicationCards";

function ApplicationOverview() {
  const[visible,setVisible] = useState(false);
  function showApplicationData(){
   let nextvisible = !visible
    setVisible(nextvisible);
    
  }
  const ApplicationDataList = visible ? applicationData:applicationData.slice(0,3);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Application Overview</h2>
        <button onClick={showApplicationData}>{visible?'Show Less':'View All'}</button>
      </div>
      <div className="mt-4 space-y-3">
        {ApplicationDataList.map((obj) => (
          <ApplicationCard
            key={obj.id}
            company={obj.company}
            position={obj.position}
            date={obj.appliedDate}
            status = {obj.status}
          />
        ))}
      </div>
    </div>
  );
}

export default ApplicationOverview;
