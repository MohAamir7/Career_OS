import { create } from "zustand";
import { applicationData } from "../Data/ApplicationData";

export const useApplicationStore = create((set) => ({
  applications: applicationData,

  setApplications: (applications) =>
    set({ applications }),
}));