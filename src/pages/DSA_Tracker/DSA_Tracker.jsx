import DSAcard from "../../Components/DSACards/DSA-card";
import {dsaData} from "../../Data/DSAData";
import { useState } from "react";
import { Search,ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../../Components/Buttons/Button";
import DSACardStats from "../../Components/DSACards/DSACardStats";
function DSA_Tracker() {
  const [dsaDataList, setDsaDataList] = useState(dsaData);
  const [page, setPage] = useState(1);
  const pageSize = 5;

   

  const solvedProblems = dsaData.filter((problem) => problem.status === "Solved");
  const getDifficultyStats = (difficulty) => {
    const total = dsaData.filter((problem) => problem.difficulty === difficulty).length;
    const solved = solvedProblems.filter((problem) => problem.difficulty === difficulty).length;

    return `${solved}/${total}`;
  };

  const DsaStats = [
    { name: "Total Solved", value: `${solvedProblems.length}/${dsaData.length}`,difficulty:"Total" },
    { name: "Easy Solved", value: getDifficultyStats("Easy"),difficulty:"Easy" },
    { name: "Medium Solved", value: getDifficultyStats("Medium"),difficulty:"Medium" },
    { name: "Hard Solved", value: getDifficultyStats("Hard"),difficulty:"Hard" },
    {
      name: "DSA Score",
      value: `${Math.round((solvedProblems.length / dsaData.length) * 100)}%`,
      difficulty:"Score"
    },
  ];
  // console.log(DsaStats.find((stats)=> stats.name === "Easy Solved").value);
  const totalPage = Math.ceil(dsaDataList.length / pageSize);
  const showData = dsaDataList.slice((page - 1) * pageSize, page * pageSize);
  // console.log(showData);

  // console.log(ChevronLeft);
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">DSA Tracker</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job Data Structures & Algorithm in one place.
            Stay organized and never miss an opportunity.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {DsaStats.map((data) => (
          <DSACardStats key={data.name} {...data} />
        ))}
      </div>
      <section className="mt-6 overflow-hidden border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center">
          <h2 className="shrink-0 text-sm font-semibold text-slate-900">Problem List</h2>
          <div className="relative min-w-0 flex-1 lg:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search problems..."
              className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-xs text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap lg:ml-auto">
            <select className="h-9 min-w-0 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
              <option>All Topics</option>
            </select>
            <select className="h-9 min-w-0 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
              <option>All Difficulties</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
            <select className="h-9 min-w-0 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
              <option>All Status</option>
              <option>Solved</option>
              <option>Pending</option>
            </select>
            <select className="h-9 min-w-0 rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-600 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
              <option>Recently Solved</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div id="problem-list" className="min-w-[850px]">
            <div className="grid grid-cols-[32px_minmax(240px,2fr)_minmax(130px,1fr)_110px_130px_130px_72px] gap-4 border-b border-slate-100 bg-slate-50/70 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              <p>#</p>
              <p>Problem</p>
              <p>Topic</p>
              <p>Difficulty</p>
              <p>Status</p>
              <p>Solved Date</p>
              <p>Actions</p>
            </div>
            {showData.map((problem) => (
              <DSAcard key={problem.id} {...problem} />
            ))}
          </div>
        </div>
        <div className="m-2 flex items-center justify-center gap-2">
          <Button
            aria-label="Previous page"
            disabled={page === 1}
            className="p-2 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
          >
            <ChevronLeft size={18} />
          </Button>
          <span className="min-w-8 text-center text-sm text-slate-600">{page}</span>
          <Button>/</Button>
          <span className="min-w-8 text-center text-sm text-slate-600">{totalPage}</span>
          <Button
            aria-label="Next page"
            disabled={page === totalPage}
            className="p-2 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => setPage((currentPage) => Math.min(totalPage, currentPage + 1))}
          >
            <ChevronRight size={18} />
          </Button>
        </div>
         
      </section>
    </div>
  );
}

export default DSA_Tracker;
