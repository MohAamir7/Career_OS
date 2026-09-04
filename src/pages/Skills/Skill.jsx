import SkillCard from "../../Components/SkillsCard/SkillCard";
import { useState } from "react";
import { skillData } from "../../Data/SkillData";

function Skill() {
  const [skillsData, setSkillsData] = useState(skillData);
  const [searchTerm, setSearchTerm] = useState("");
  const [StatusFilter, setStatusFilter] = useState("All Categories");
  const [LevelFilter, setLevelFilter] = useState("All Levels");
  
  const selectLevel = (e) => {
    const value = e.target.value;
    setLevelFilter(value);
  }
  const selectStatus = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
  }

  const searchValue = (e) => {
    const value = e.target.value;
    setSearchTerm(value); 
  }

  const filteredSkills = skillsData.filter((skill) =>{
    const matchSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        skill.level.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = StatusFilter === "All Categories" || skill.category === StatusFilter;
    const matchLevel = LevelFilter === "All Levels" || skill.level === LevelFilter;

   return matchSearch && matchStatus && matchLevel;
});

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Track and manage your job Skills in one place. Stay organized
            and never miss an opportunity.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row *:gap-4 mt-6">
        <input
          type="text"
          placeholder="Search skills..."
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
            onChange={searchValue}
            value={searchTerm}
        />
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={selectStatus}
            value={StatusFilter}
        >
          <option value="All Categories">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="Programming">Programming</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Tools">Tools</option>
        </select>
        <select
          className="border border-slate-300 bg-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={selectLevel}
            value={LevelFilter}
        >
          <option value="All Levels">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="mt-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2>Skills</h2>
            {/* <button onClick={showApplicationData}>{visible?'Show Less':'View All'}</button> */}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((obj) => (
                <SkillCard key={obj.id} {...obj} />
              ))
            ) : (
              <p className="text-slate-500">No skills found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
