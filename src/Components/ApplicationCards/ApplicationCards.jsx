
import { BriefcaseBusiness,PinIcon } from "lucide-react";

function ApplicationCard(props) {
  const statusStyles = {
    Applied: "bg-blue-50 text-blue-700",
    Interview: "bg-indigo-50 text-indigo-700",
    Offer: "bg-emerald-50 text-emerald-700",
    Rejected: "bg-red-50 text-red-700",
  };
  const statusClass =
    statusStyles[props.status] || "bg-slate-100 text-slate-700";
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
      <h2 className="text-sm font-medium text-slate-500">{props.position}</h2>
      <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <PinIcon size={20} />
          </div>

          <h3 className="text-base font-semibold text-slate-500">
            {props.location}
          </h3>
        </div>

      <p className="mt-3 text-xs text-slate-400">Applied:{props.date}</p>
      {/* <p>{props.status}</p> */}
    </div>
  );
}

export default ApplicationCard;
