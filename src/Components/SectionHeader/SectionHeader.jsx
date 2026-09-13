import { Link } from "react-router-dom";

function SectionHeader({ title, link, linkText, onClick }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          {linkText}
        </button>
      ) : (
        <Link
          to={link}
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;