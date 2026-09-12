import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
import {
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  ExternalLink,
} from "lucide-react";

function Profile() {

  const skillIDs = [3,4,6,7,8,9,10,11];
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      {/* ================= MAIN GRID ================= */}

      <div className="mt-6 grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        {/* ================= LEFT / MAIN SECTION ================= */}

        <div className="min-w-0 space-y-6 xl:col-span-2">
          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Profile content */}
          </div>

          {/* Technical Skills */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Skills content */}
          </div>

          {/* DSA Progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* DSA content */}
          </div>

          {/* Projects */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ProjectOverview />
          </div>

          {/* Education */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Education content */}
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}

        <div className="min-w-0 space-y-6">
          {/* Career Summary */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Career Summary
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-50 p-4">
                <BriefcaseBusiness size={20} className="text-indigo-500" />

                <p className="mt-3 text-xs text-slate-500">Applications</p>

                <p className="mt-1 text-2xl font-bold text-slate-900">24</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <CalendarDays size={20} className="text-indigo-500" />

                <p className="mt-3 text-xs text-slate-500">Interviews</p>

                <p className="mt-1 text-2xl font-bold text-slate-900">8</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <Code2 size={20} className="text-indigo-500" />

                <p className="mt-3 text-xs text-slate-500">DSA Problems</p>

                <p className="mt-1 text-2xl font-bold text-slate-900">120</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <FolderKanban size={20} className="text-indigo-500" />

                <p className="mt-3 text-xs text-slate-500">Projects</p>

                <p className="mt-1 text-2xl font-bold text-slate-900">6</p>
              </div>
            </div>
          </div>

          {/* Resume Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Resume</h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your current resume.
                </p>
              </div>

              <Download size={20} className="text-indigo-500" />
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BriefcaseBusiness size={22} />
              </div>

              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                Resume.pdf
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Last updated recently
              </p>

              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 hover:shadow-md">
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Links Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Links</h2>

            <div className="mt-4 space-y-3">
              <a
                href="#"
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <span>GitHub</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="#"
                className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              >
                <span>LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
