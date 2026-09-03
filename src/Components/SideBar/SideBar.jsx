import{Link}from"react-router-dom";

function SideBar() {
  return (
    <aside className="w-64 min-h-screen border-r border-slate-200 bg-white px-4 py-6">
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        AI Career OS
      </h2>

      <nav className="mt-8 space-y-1">
        <p className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900">
          <Link to="/dashboard">Dashboard</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/profile">Profile</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/skills">Skills</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/projects">Projects</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/applications">Applications</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/interviews">Interviews</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/dsa">DSA</Link>
        </p>
        <p
          className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          <Link to="/learning">Learning</Link>
        </p>
      </nav>
    </aside>
  );
}

export default SideBar;
