import { useState } from "react";
import { applicationData } from "../../Data/ApplicationData";
import ApplicationCard from "../ApplicationCards/ApplicationCards";
import SectionHeader from "../SectionHeader/SectionHeader";

function ApplicationOverview() {
  const[visible,setVisible] = useState(false);
  function showApplicationData(){
   let nextvisible = !visible
    setVisible(nextvisible);
    
  }
  
  const ApplicationDataList = visible ? applicationData:applicationData.slice(0,3);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <SectionHeader
        title="Applications"
        onClick={showApplicationData}
        linkText={visible ? "Show Less" : "View All"}
      />
      <div className="mt-4 space-y-3">
        {ApplicationDataList.map((obj) => (
          <ApplicationCard
            key={obj.id}
            company={obj.company}
            position={obj.position}
            date={obj.appliedDate}
            status = {obj.status}
            location={obj.location}
          />
        ))}
      </div>
    </div>
  );
}

export default ApplicationOverview;
