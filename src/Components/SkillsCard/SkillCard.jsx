

import { Code2 } from "lucide-react";

function SkillCard({
  name,
  category,
  level,
  progress,
  icon: Icon = Code2,
}) {
  return (
    <article className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Icon size={20} aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-bold text-slate-900">
              {name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-slate-500">
              {category}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-sm font-semibold text-slate-500">
          {level}
        </span>
      </div>

      <div className="mt-6">
        <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-500 transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm font-semibold text-slate-700">
          {progress}% Proficiency
        </p>
      </div>
    </article>
  );
}

export default SkillCard;