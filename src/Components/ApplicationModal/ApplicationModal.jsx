import { useState } from "react";

function ApplicationModal({ onClose }) {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    location: "",
    appliedDate: "",
    status: "Applied",
    jobType: "Full Time",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">

      {/* Modal */}
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">

        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Add Application
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add a new job application to your tracker.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-lg px-2 py-1 text-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Company + Position */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <label htmlFor="company" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Company
              </span>

              <input
                id="company"
                type="text"
                placeholder="e.g. Google"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </label>

            <label htmlFor="position" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Position
              </span>

              <input
                id="position"
                type="text"
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </label>

          </div>

          {/* Location + Applied Date */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <label htmlFor="location" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Location
              </span>

              <input
                id="location"
                type="text"
                placeholder="e.g. Bangalore"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </label>

            <label htmlFor="appliedDate" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Applied Date
              </span>

              <input
                id="appliedDate"
                type="date"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </label>

          </div>

          {/* Status + Job Type */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <label htmlFor="status" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Status
              </span>

              <select
                id="status"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>

            <label htmlFor="jobType" className="space-y-2">
              <span className="block text-sm font-medium text-slate-700">
                Job Type
              </span>

              <select
                id="jobType"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </select>
            </label>

          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">

            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Add Application
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;