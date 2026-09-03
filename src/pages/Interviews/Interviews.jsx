import{ useState } from "react";
import{interviewData}from"../../Data/InterviewData";
import InteviewCard from "../../Components/InterviewsCards/InterviewCard";

function Interview() {
    const [interviewDataList] = useState(interviewData);
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Interviews</h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job applications in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row *:gap-4 mt-6">
        <input
          type="text"
          placeholder="Search applications..."
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
        //   onChange={searchValue}
        //   value={searchTerm}
        />
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //   onChange={selectStatus}
        //   value={StatusFilter}
        >
          <option value="All Applications">All Applications</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interviewing</option>
          <option value="Offer">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //   onChange={selectRecentlyAdded}
        //   value={RecentlyAddedFilter}
        >
          <option value="Recently Added">Recently Added</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <div className= "mt-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2>Interviews</h2>
            {/* <button onClick={showApplicationData}>{visible?'Show Less':'View All'}</button> */}
          </div>
          <div className="mt-4 space-y-3">
            {interviewDataList.map((interview, index) => (
                <InteviewCard key={index} children={interview} />
            ))}
            </div>
        </div>

      </div>
    </div>
  );
}

export default Interview;
