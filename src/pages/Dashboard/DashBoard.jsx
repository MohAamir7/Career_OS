import ApplicationOverview from "../../Components/ApplicationOverview/ApplicationOverview";
import DashBoardStat from "../../Components/DashBoardStats/DashBoardStat";
import UpcomingInterview from "../../Components/UpcomingInterviews/Upcoming-Interview";

function DashBoard() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Welcome back 👋
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Here's what's happening with your career today.
          </p>
        </div>

        <DashBoardStat />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ApplicationOverview />
          <UpcomingInterview />
        </div>
      </div>
    </main>
  );
}

export default DashBoard;
