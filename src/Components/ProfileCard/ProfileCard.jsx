import {
  User,
  Mail,
  MapPin,
//   Github,
//   Linkedin,
  Pencil,
} from "lucide-react";
import { FaGithub,FaLinkedin  } from "react-icons/fa";

function ProfileCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Profile Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 ring-8 ring-indigo-50">
            <User size={42} />
          </div>

          {/* User Information */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Moh Aamir
            </h2>

            <p className="mt-1 text-sm font-medium text-indigo-600">
              Frontend Developer
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Passionate about building modern and user-friendly web
              applications.
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-slate-100" />

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <Mail size={18} />
          </div>

          <div>
            <p className="text-xs text-slate-400">Email</p>
            <p className="text-sm font-medium text-slate-700">
              aamir@example.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
            <MapPin size={18} />
          </div>

          <div>
            <p className="text-xs text-slate-400">Location</p>
            <p className="text-sm font-medium text-slate-700">
              New Delhi, India
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          <FaGithub size={16} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <FaLinkedin size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;