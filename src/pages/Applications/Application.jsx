import ApplicationOverview from "../../Components/ApplicationOverview/ApplicationOverview";

function Application() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Applications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track and manage your job applications in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>
        <button className="cursor-pointer">Add Application</button>
      </div>
      <ApplicationOverview />
    </div>
  );
}

export default Application;
