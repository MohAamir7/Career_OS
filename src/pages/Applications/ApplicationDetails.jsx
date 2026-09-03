import { ArrowLeft, BriefcaseBusiness, CalendarDays, Laptop, MapPin, WalletCards } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { applicationData } from "../../Data/ApplicationData";

function ApplicationDetails() {
  const { applicationId } = useParams();
  const navigate = useNavigate();

  const application = applicationData.find(
    (app) => app.id === parseInt(applicationId, 10),
  );

  if (!application) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-semibold text-slate-900">
            Application not found
          </h1>
          <button
            className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            onClick={() => navigate("/applications")}
          >
            Back to applications
          </button>
        </div>
      </div>
    );
  }

  const statusStyles = {
    Applied: "bg-blue-50 text-blue-700 ring-blue-600/20",
    Interview: "bg-amber-50 text-amber-700 ring-amber-600/20",
    Offer: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Rejected: "bg-rose-50 text-rose-700 ring-rose-600/20",
  };

  const details = [
    { label: "Applied date", value: application.appliedDate, icon: CalendarDays },
    { label: "Location", value: application.location, icon: MapPin },
    { label: "Employment", value: application.employmentType, icon: BriefcaseBusiness },
    { label: "Work mode", value: application.workMode, icon: Laptop },
    { label: "Salary range", value: application.salary, icon: WalletCards },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <button
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={17} />
        Back to applications
      </button>

      <div className="mx-auto max-w-4xl">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium text-indigo-600">{application.company}</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  {application.position}
                </h1>
              </div>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[application.status] || "bg-slate-100 text-slate-700 ring-slate-600/20"}`}
              >
                {application.status}
              </span>
            </div>
          </div>

          <div className="grid gap-px bg-slate-100 sm:grid-cols-2 lg:grid-cols-3">
            {details.map(({ label, value, icon: Icon }) => (
              <div className="bg-white px-5 py-4 sm:px-8" key={label}>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                  <Icon size={15} />
                  {label}
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-800">{value}</p>
              </div>
            ))}
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <h2 className="text-base font-semibold text-slate-950">About the role</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              {application.description}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ApplicationDetails;