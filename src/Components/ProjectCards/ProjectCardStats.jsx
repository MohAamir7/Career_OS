import {
  FolderKanban,
  FolderOpenDot,
  CircleCheck,
  ClockArrowUp,
  NotebookText,
  CodeXml,
} from "lucide-react";

function ProjectCardStats({ ...props }) {
  const typeIcons = {
    Total:FolderOpenDot,
    Completed: CircleCheck,
    Progress:ClockArrowUp,
    Planned:NotebookText,
    Technologies:CodeXml,
  };

  const Icon = typeIcons[props.name] ||FolderKanban;
  // console.log(Icon)
  return (
    <div className="flex min-h-\[156px] w-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Icon + Card title */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {/* Icon will go here */}
          <span className="green"><Icon size={20} /></span>
        </div>
        <div className="mt-auto pt-6">
          <span className="text-sm font-medium text-slate-500">
            {props.name}
          </span>

          <p className="text-2xl font-semibold tracking-tight text-slate-900">
            {props.value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardStats;
