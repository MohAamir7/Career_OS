import{ useState } from "react";
import{interviewData}from"../../Data/InterviewData";
import InteviewCard from "../../Components/InterviewsCards/InterviewCard";

function Interview() {
    const [interviewDataList, setInterviewDataList] = useState(interviewData);
    const [searchTerm, setSearchTerm] = useState("");
    const [StatusFilter, setStatusFilter] = useState("All Applications");
    const [RecentlyAddedFilter, setRecentlyAddedFilter] = useState("Recently Added");
    
    const selectStatus = (e) => {
        setStatusFilter(e.target.value);
    };

    const selectRecentlyAdded = (e) => {
        setRecentlyAddedFilter(e.target.value);
    };

    const searchValue = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };
    let filteredData = interviewDataList.filter((interview) =>{
       const matchesSearch= interview.company.toLowerCase().includes(searchTerm)|| interview.position.toLowerCase().includes(searchTerm);

       const matchesStatus= StatusFilter === "All Applications" || interview.status === StatusFilter;
       return matchesSearch && matchesStatus;
    });

    if (RecentlyAddedFilter === "Recently Added") {
    filteredData = [...filteredData].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
  }

  if (RecentlyAddedFilter === "Oldest") {
    filteredData = [...filteredData].sort(
      (a, b) => new Date(a.date) - new Date(b.date),
    );
  }
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
          onChange={searchValue}
          value={searchTerm}
        />
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={selectStatus}
          value={StatusFilter}
        >
          <option value="All Applications">All Applications</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={selectRecentlyAdded}
          value={RecentlyAddedFilter}
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
            {filteredData.length > 0 ? (
              filteredData.map((obj) => (
                <InteviewCard key={obj.id} {...obj} />
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  No applications found
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Try changing your search or filter.
                </p>
              </div>
            )}
            </div>
          </div>

      </div>
    </div>
  );
}

export default Interview;
