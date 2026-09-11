import { Link } from "react-router-dom";
import { projectData } from "../../Data/ProjectData";
import ProjectCard from "../ProjectCards/ProjectCard";

function ProjectOverview() {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2>Project Overview</h2>
          <p className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900">
            <Link to="/projects">View All</Link>
          </p>
        </div>
        <div className="mt-4 space-y-3">
          {projectData.slice(0, 3).map((data) => (
            <ProjectCard key={data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectOverview;
