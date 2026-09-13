import { Link } from "react-router-dom";

function SectionHeader({title,link,linkText}) {
  return (
    <div className="flex justify-between">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 cursor-pointer transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900">
        <Link to={link}>{linkText}</Link>
      </p>
    </div>
  );
}

export default SectionHeader;