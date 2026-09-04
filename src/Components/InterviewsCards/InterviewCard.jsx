import { CalendarDays, Clock3, Laptop, BriefcaseBusiness } from "lucide-react";

function InteviewCard(props) {
  const statusStyles = {
    Upcoming: "bg-indigo-50 text-indigo-700",
    Completed: "bg-emerald-50 text-emerald-700",
    Cancelled: "bg-red-50 text-red-700",
  };

  const statusClass =
    statusStyles[props.status] || "bg-slate-100 text-slate-700";
  // console.log(props);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <BriefcaseBusiness size={20} />
          </div>

          <h3 className="text-base font-semibold text-slate-900">
            {props.company}
          </h3>
        </div>
        <span
          className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusClass}`}
        >
          {props.status}
        </span>
      </div>
      <h3 className="text-base font-semibold text-slate-500">
        {props.position}
      </h3>
      <p className="flex items-center gap-2 text-sm text-slate-500">
        {props.interviewType}
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <CalendarDays size={20} />
          </div>

          <h3 className="flex items-center gap-2 text-sm text-slate-500">
            {props.date}
          </h3>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Clock3 size={20} />
          </div>

          <h3 className="flex items-center gap-2 text-sm text-slate-500">
            {props.time}
          </h3>
        </div>{" "}
        <div className="flex items-center gap-3 mt-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Laptop size={20} />
          </div>

          <h3 className="flex items-center gap-2 text-sm text-slate-500">
            {props.mode}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default InteviewCard;
