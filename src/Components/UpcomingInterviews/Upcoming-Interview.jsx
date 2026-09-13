import { useState } from "react";
import { interviewData } from "../../Data/InterviewData";
import InterviewCard from "../InterviewsCards/InterviewCard";
import SectionHeader from "../SectionHeader/SectionHeader";

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
      <SectionHeader
        title="Applications"
        onClick={showInterviewData}
        linkText={visible ? "Show Less" : "View All"}
      />
      <div className="mt-4 space-y-3">
        {interviewList.map((obj) => (
          <InterviewCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingInterview;
