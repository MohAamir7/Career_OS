import {
  BarChart3,
  CalendarDays,
  Code2,
  ExternalLink,
  FolderKanban,
  MoreVertical,
  Smartphone,
  Sparkles,
} from "lucide-react";

const statusStyles = {
  Completed: "bg-emerald-50 text-emerald-700",
  "In Progress": "bg-green-50 text-green-700",
  Planned: "bg-blue-50 text-blue-700",
};

const categoryIcons = {
  "AI / ML": Sparkles,
  "Mobile Development": Smartphone,
  "Web Development": Code2,
  "Full Stack": FolderKanban,
};

const categoryStyles = {
  "AI / ML": "bg-violet-500",
  "Mobile Development": "bg-rose-500",
  "Web Development": "bg-cyan-500",
  "Full Stack": "bg-indigo-600",
};

function formatDate(date) {
  if (!date) return "Not set";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function ProjectCard({
  name,
  description,
  category,
  status,
  technologies = [],
  progress = 0,
  startDate,
  endDate,
  liveUrl,
}) {
  const Icon = categoryIcons[category] || BarChart3;
  const iconBackground = categoryStyles[category] || "bg-indigo-600";
  const visibleTechnologies = technologies.slice(0, 4);
  const remainingTechnologies = technologies.length - visibleTechnologies.length;

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white ${iconBackground}`}
          >
            <Icon size={20} />
          </div>
          <h3 className="truncate text-sm font-semibold text-slate-900">{name}</h3>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-medium ${
              statusStyles[status] || "bg-slate-100 text-slate-600"
            }`}
          >
            {status}
          </span>
          <button
            type="button"
            aria-label={`More options for ${name}`}
            className="text-slate-400 transition hover:text-slate-700"
          >
            <MoreVertical size={16}  className="cursor-pointer"/>
          </button>
        </div>
      </div>

      <p className="mt-3 min-h-10 text-xs leading-5 text-slate-500">{description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {visibleTechnologies.map((technology) => (
          <span
            key={technology}
            className="rounded bg-slate-100 px-2 py-1 text-[10px] text-slate-600"
          >
            {technology}
          </span>
        ))}
        {remainingTechnologies > 0 && (
          <span className="rounded bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
            +{remainingTechnologies}
          </span>
        )}
      </div>

      <div className="mt-4">
        <div className="mb-1 flex justify-between text-[10px] text-slate-500">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[10px] text-slate-400">
        <span className="flex items-center gap-1">
          <CalendarDays size={12} />
          Started: {formatDate(startDate)}
        </span>
        <span className="hidden items-center gap-1 sm:flex">
          <CalendarDays size={12} />
          Updated: {formatDate(endDate)}
        </span>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1 rounded border border-indigo-200 px-2 py-1 font-medium text-indigo-600 hover:bg-indigo-50"
          >
            View Details <ExternalLink size={11} />
          </a>
        ) : (
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1 rounded border border-indigo-200 px-2 py-1 font-medium text-indigo-600 hover:bg-indigo-50"
          >
            View Details
          </button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
