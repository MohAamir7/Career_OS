import ApplicationOverview from "../../Components/ApplicationOverview/ApplicationOverview";

function Application() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Applications
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job applications in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>

        <button
          className="shrink-0 cursor-pointer rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          + Add Application
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row *:gap-4 mt-6">
        <input type="text" placeholder="Search applications..." className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1" />
        <select className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="All Applications">All Applications</option>
        </select>
        <select className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="Recently Added">Recently Added</option>
        </select>
      </div>

      <div className="mt-6">
        <ApplicationOverview />
      </div>

    </div>
  );
}

export default Application;