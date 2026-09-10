import ProjectOverview from "../../Components/ProjectOverview/ProjectOverview";


function Profile() {
    return(
        <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Profile</h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job applications in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>
      </div>
      <div>
        <ProjectOverview></ProjectOverview>
      </div>
      </div>
    )
    
}

export default Profile;