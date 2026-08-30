import { applicationData } from "../../Data/ApplicationData";
import ApplicationCard from "../ApplicationCards/ApplicationCards";

function ApplicationOverview() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Application Overview</h2>
        <button>View All</button>
      </div>
      <div className="mt-4 space-y-3">
        {applicationData.map((obj) => (
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
