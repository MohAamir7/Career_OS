import { projectData } from "../../Data/ProjectData";
import ProjectCard from '../../Components/ProjectCards/ProjectCard'
import ProjectCardStats from '../../Components/ProjectCards/ProjectCardStats'

function Project() {
  const ProjectData = projectData;
  // console.log(projectData.map((data)=>(console.log(data.technologies))));
  function getValue(status){
    let val = projectData.filter((data)=>
      data.status === status
    ).length;
    return val;
  };

  function getTech(){
    const techSet = new Set();
    // let val;
    projectData.map((data)=>(
      data.technologies.forEach((tech)=>(
        techSet.add(tech)
      ))
    ))
    // console.log(techSet)
    return techSet.size;
  }

  // console.log(getTech());
  const ProjectStats = [
    {
      name:"Total Project", value:projectData.length
        },
        {
          name:"Completed",value:getValue("Completed")
        },
        {
          name:"In Progress",value:getValue("In Progress")
        },
        {
          name:"Planned",value:getValue("Planned")
        },
        {
          name:"Technologies",value:getTech()
        }
      ]
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your Projects in one place. Stay organized and
            never miss an opportunity.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {ProjectStats.map((data)=> (
          <ProjectCardStats key={data.name} {...data}/>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:flex-row *:gap-4 mt-6">
        <input
          type="text"
          placeholder="Search Project..."
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
        //   onChange={searchValue}
        //   value={searchTerm}
        />
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //   onChange={selectStatus}
        //   value={StatusFilter}
        >
          <option value="All Applications">All Categorise</option>
          <option value="Completed">FrontEnd</option>
          <option value="In Progress">Backend</option>
          <option value="Planned">Full Stack</option>
          <option value="AI">AI/ML</option>
        </select>
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //   onChange={selectStatus}
        //   value={StatusFilter}
        >
          <option value="All Applications">All Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Planned">Planned</option>
        </select>
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //   onChange={selectRecentlyAdded}
        //   value={RecentlyAddedFilter}
        >
          <option value="Recently Added">Recently Added</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <div className="mt-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2>Projects</h2>
            {/* <button onClick={showApplicationData}>{visible?'Show Less':'View All'}</button> */}
          </div>
          <div className="mt-4 space-y-3 grid grid-cols-3 gap-4">
            {ProjectData.map((data) =>(
              <ProjectCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
