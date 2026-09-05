import DSAcard from "../../Components/DSACards/DSA-card";
import {dsaData} from "../../Data/DSAData";
import { useState } from "react";
import { Search } from "lucide-react";
function DSA_Tracker() {
  const [dsaDataList, setDsaDataList] = useState(dsaData);
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
            {dsaDataList.map((problem) => (
              <DSAcard key={problem.id} {...problem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DSA_Tracker;
