import { useState } from "react";
import { interviewData } from "../../Data/InterviewData";
import InterviewCard from "../InterviewsCards/InterviewCard";

function UpcomingInterview() {
  // const [interviewList, setInterviewList] = useState(interviewData.slice(0, 3));
  const [visible, setVisible] = useState(false);

  function showInterviewData() {
    const nextVisible = !visible;
    setVisible(nextVisible);
  }
  const interviewList = visible ? interviewData : interviewData.slice(0, 3);


  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Upcoming Interviews</h2>
        <button onClick={showInterviewData}>{visible ? "Show Less" : "View All"}</button>
      </div>
      <div className="mt-4 space-y-3">
        {interviewList.map((obj) => (
          <InterviewCard key={obj.id}>{obj}</InterviewCard>
        ))}
      </div>
    </div>
  );
}

export default UpcomingInterview;
