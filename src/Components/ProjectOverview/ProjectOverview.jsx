import { Link } from "react-router-dom";
import { projectData } from "../../Data/ProjectData";
import ProjectCard from "../ProjectCards/ProjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";

function ProjectOverview() {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <SectionHeader title='Project OverView' link='/projects' linkText='View All'/>
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
