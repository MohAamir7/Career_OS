import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Brain,
  FolderKanban,
} from "lucide-react";

function ActivityCard({ activity }) {
  const activityIcons = {
    application: BriefcaseBusiness,
    interview: CalendarDays,
    dsa: Code2,
    skill: Brain,
    project: FolderKanban,
  };

  const Icon = activityIcons[activity.type] || FolderKanban;

  return (
    <div className="flex items-start gap-4 rounded-xl p-3 transition duration-200 hover:bg-slate-50">

      {/* Activity Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
        <Icon size={20} />
      </div>

      {/* Activity Information */}
      <div className="min-w-0 flex-1">

        {/* Title + Date */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm font-semibold text-slate-900">
            {activity.title}
          </h3>

          <span className="shrink-0 text-xs text-slate-400">
            {activity.date}
          </span>
        </div>

        {/* Description */}
        <p className="mt-1 text-sm text-slate-500">
          {activity.description}
        </p>

        {/* Time */}
        <p className="mt-1 text-xs text-slate-400">
          {activity.time}
        </p>

      </div>
    </div>
  );
}

export default ActivityCard;