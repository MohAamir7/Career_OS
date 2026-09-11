import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";
import {
  User,
  Mail,
  MapPin,
//   Github,
//   Linkedin,
  Pencil,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  ExternalLink,
} from "lucide-react";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}

      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Profile
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your career profile and resume information.
        </p>
      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* =================================================
            LEFT / MAIN SECTION
        ================================================= */}

        <div className="space-y-6 xl:col-span-2">

          {/* ================= PROFILE CARD ================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              {/* Profile Image */}

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {/* <User size={42} /> */}
              </div>


              {/* Profile Information */}

              <div className="min-w-0 flex-1">

                <div className="flex flex-col justify-between gap-3 sm:flex-row">

                  <div>
                    <h2 className="text-2xl font-bold">
                      Your Name
                    </h2>

                    <p className="mt-1 text-sm font-medium text-indigo-600">
                      Frontend Developer
                    </p>
                  </div>


                  {/* Edit Button */}

                  <button
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {/* <Pencil size={16} /> */}
                    Edit Profile
                  </button>

                </div>


                {/* Contact Information */}

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">

                  <div className="flex items-center gap-2">
                    {/* <MapPin size={16} /> */}
                    <span>India</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* <Mail size={16} /> */}
                    <span>your@email.com</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* <Github size={16} /> */}
                    <span>GitHub</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* <Linkedin size={16} /> */}
                    <span>LinkedIn</span>
                  </div>

                </div>


                {/* Bio */}

                <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
                  Passionate developer focused on building responsive,
                  user-friendly web applications. Interested in solving
                  complex problems and continuously improving technical
                  and problem-solving skills.
                </p>

              </div>

            </div>

          </div>


          {/* ================= TECHNICAL SKILLS ================= */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-semibold">
                  Technical Skills
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your current technical proficiency.
                </p>
              </div>

              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                View All
              </button>
            </div>
            
        </div>
        <div>
        <ProjectOverview></ProjectOverview>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-lg font-semibold">
                  DSA Progress
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your problem-solving progress.
                </p>
              </div>

              <Code2 className="text-indigo-500" />

            </div>


            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">

              {/* Circular Progress */}

              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-8 border-indigo-100">

                <div className="text-center">
                  <p className="text-2xl font-bold">
                    65%
                  </p>

                  <p className="text-xs text-slate-500">
                    Progress
                  </p>
                </div>

              </div>


              {/* Stats */}

              <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">

                <div>
                  <p className="text-xs text-slate-500">
                    Total
                  </p>

                  <p className="mt-1 text-xl font-bold">
                    120
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Solved
                  </p>

                  <p className="mt-1 text-xl font-bold text-emerald-600">
                    78
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Medium
                  </p>

                  <p className="mt-1 text-xl font-bold text-amber-500">
                    42
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Hard
                  </p>

                  <p className="mt-1 text-xl font-bold text-red-500">
                    8
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
