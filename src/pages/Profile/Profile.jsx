import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
import { skillData } from "../../Data/SkillData";
import SkillCard from "../../Components/SkillsCard/SkillCard";
import { dsaData } from "../../Data/DSAData";
import { Link } from "react-router-dom";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import {
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  ExternalLink,
} from "lucide-react";

function Profile() {
  const skillIDs = [3, 4, 6, 11];

  const filterData = skillData.filter((data) => skillIDs.includes(data.id));
  const TotalSolved = dsaData.filter((data) => data.status === "Solved");
  const DsaContent = [
    {
      name: "Total Solved",
      value: TotalSolved.length,
    },
    {
      name: "Easy",
      value: TotalSolved.filter((data) => data.difficulty === "Easy").length,
    },
    {
      name: "Medium",
      value: TotalSolved.filter((data) => data.difficulty === "Medium").length,
    },
    {
      name: "Hard",
      value: TotalSolved.filter((data) => data.difficulty === "Hard").length,
    },
  ];
  console.log(TotalSolved);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      {/* ================= MAIN GRID ================= */}

      <div className="mt-6 grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
        {/* ================= LEFT / MAIN SECTION ================= */}

        <div className="min-w-0 space-y-6 xl:col-span-2">
          {/* Profile Card */}
          <div className="mt-6">
            <ProfileCard />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Skills content */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-slate-900">Skills</h2>
              <p className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900">
                <Link to="/skills">View All</Link>
              </p>
            </div>
            {/* Profile content */}
            {filterData.map((skill) => (
              <SkillCard key={skill.id} {...skill} />
            ))}
          </div>

          {/* DSA Progress */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* DSA content */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                DSA Progress
              </h2>
              <p className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900">
                <Link to="/dsa">View All</Link>
              </p>
            </div>

            <div className="flex flex-row justify-between">
              <div className="mt-3 flex h-24 w-24 items-center justify-center rounded-full border-8 border-indigo-100 bg-white text-xl font-bold text-indigo-600 shadow-sm">
                {TotalSolved.length}/{dsaData.length}
              </div>
              <div>
                {DsaContent.map((data) => (
                  <p key={data.name} className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        data.name === "Easy"
                          ? "bg-emerald-500"
                          : data.name === "Medium"
                            ? "bg-amber-500"
                            : data.name === "Hard"
                              ? "bg-red-500"
                              : "bg-indigo-500"
                      }`}
                      aria-hidden="true"
                    />
                    <span>
                      {data.name}: {data.value}
                    </span>
                  </p>
                ))}
              </div>
            </div>
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
