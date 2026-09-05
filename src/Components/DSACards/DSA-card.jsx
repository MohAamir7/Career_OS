
import { Check, Clock3, ExternalLink } from "lucide-react";

function DSAcard(props){
    return(
        <div className="grid grid-cols-[32px_minmax(240px,2fr)_minmax(130px,1fr)_110px_130px_130px_72px] items-center gap-4 border-b border-slate-100 px-4 py-2.5 text-xs text-slate-600 last:border-b-0">
          <p className="text-slate-500">{props.id}</p>
          <p className="font-medium text-slate-800">{props.title}</p>
          <p>{props.topic}</p>
          <p>
            <span className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ${
              props.difficulty === "Easy"
                ? "bg-emerald-50 text-emerald-600"
                : props.difficulty === "Medium"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-rose-50 text-rose-600"
            }`}>
              {props.difficulty}
            </span>
          </p>
          <p>
            <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-medium ${
              props.status === "Solved"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-slate-100 text-slate-600"
            }`}>
              {props.status === "Solved" ? <Check className="size-3" /> : <Clock3 className="size-3" />}
              {props.status}
            </span>
          </p>
          <p className="text-slate-500">{props.solvedDate ? new Date(props.solvedDate).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : "-"}</p>
          <button type="button" aria-label={`Open ${props.title}`} className="inline-flex size-7 items-center justify-center rounded-md border cursor-pointer border-slate-200 text-indigo-500 transition hover:bg-indigo-50">
            <ExternalLink className="size-3.5" />
          </button>
        </div>
    );
}

export default DSAcard;