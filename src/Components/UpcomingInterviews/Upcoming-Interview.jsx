import { interviewData } from "../../Data/InterviewData";
import InterviewCard from "../InterviewsCards/InterviewCard";



function UpcomingInterview(){
    return(
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Upcoming Interviews</h2>
        <button>View All</button>
      </div>
        <div className="mt-4 space-y-3">
            {interviewData.map(obj=>{
               return <InterviewCard >{obj}</InterviewCard>
            })}
        </div>
        </div>
    )
}

export default UpcomingInterview;