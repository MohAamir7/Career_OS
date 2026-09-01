import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Brain,
  Award,
} from "lucide-react";

function StatsCard({stats}) {
    console.log(stats);
    const typeIcons = {
    briefcase: BriefcaseBusiness,
    calendar: CalendarDays,
    code: Code2,
    zap: Brain,
    trophy: Award,
  };

    const Icon = typeIcons[stats.icon] || FolderKanban;
    console.log(Icon)


  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">

      {/* Icon + Card title */}
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          {/* Icon will go here */}
          <span><Icon size={20} /></span>
        </div>

        <span className="text-xs font-medium text-slate-400">
          {stats.trend}
        </span>
      </div>

      {/* Card title */}
      <p className="mt-4 text-sm font-medium text-slate-500">
        {stats.cardName}
      </p>

      {/* Main value */}
      <h3 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
        {stats.value}
      </h3>

      {/* Description */}
      <p className="mt-1 text-xs text-slate-400">
        {stats.description}
      </p>

    </div>
  );
}

export default StatsCard;