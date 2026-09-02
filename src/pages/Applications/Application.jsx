import ApplicationOverview from "../../Components/ApplicationOverview/ApplicationOverview";
import ApplicationCard from "../../Components/ApplicationCards/ApplicationCards";
import { applicationData } from "../../Data/ApplicationData";
import { useState, useEffect } from "react";
import ApplicationModal from "../../Components/ApplicationModal/ApplicationModal";
import { useNavigate } from "react-router-dom";

function Application() {
  const [ApplicationDataList, setApplicationDataList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function selectStatus(e) {
    const selectedStatus = e.target.value;
    const filteredData = applicationData.filter((obj) =>
      obj.status === selectedStatus
    );
    if(selectedStatus === "All Applications") {
      setApplicationDataList(applicationData);
      return;
    }
    setApplicationDataList(filteredData);
  }

  function searchValue(e) {
    const searchTerm = e.target.value.toLowerCase();
    // console.log(searchTerm);
    const filteredData = applicationData.filter((obj) =>
      obj.company.toLowerCase().includes(searchTerm) ||
      obj.position.toLowerCase().includes(searchTerm)
    );
    setApplicationDataList(filteredData);
  }

  function fetchApplicationData() {
    setApplicationDataList(applicationData);
  }

  useEffect(() => {
    fetchApplicationData();
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Applications
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job applications in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>
          <button
          className="shrink-0 cursor-pointer rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        onClick={() => setShowModal(!showModal)}
        >
          + Add Application
        </button>
      </div>
      {showModal && <ApplicationModal />}

      <div className="flex flex-col gap-3 md:flex-row *:gap-4 mt-6">
        <input type="text" placeholder="Search applications..." className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1" onChange={searchValue} />
        <select className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={selectStatus}>
          <option value="All Applications">All Applications</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interviewing</option>
          <option value="Offer">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <select className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => {
          const sortBy = e.target.value;
          let sortedData = [...ApplicationDataList];
          if (sortBy === "Recently Added") {
            sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
          } else if (sortBy === "Oldest") {
            sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
          }
          setApplicationDataList(sortedData);
        }}>
          <option value="Recently Added">Recently Added</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      <div className="mt-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2>Applications</h2>
        {/* <button onClick={showApplicationData}>{visible?'Show Less':'View All'}</button> */}
      </div>
      <div className="mt-4 space-y-3">
        {ApplicationDataList.map((obj) => (
          <ApplicationCard
            key={obj.id}
            company={obj.company}
            position={obj.position}
            date={obj.appliedDate}
            status = {obj.status}
            location={obj.location}
          />
        ))}
      </div>
    </div>
      </div>

    </div>
  );
}

export default Application;