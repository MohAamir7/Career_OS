import DashBoardStat from "../../Components/DashBoardStats/DashBoardStat";
import DashBoardLayout from "../../Layouts/DashBoardLayout";

function DashBoard() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <h2>Welcome back 👋</h2>

      <p>Here's what's happening with your career today.</p>
      <div >
        <DashBoardStat></DashBoardStat>
      </div>
    </main>
  );
}

export default DashBoard;
