import { activityData } from "../../Data/ActivityData";
import { useState } from "react";
import ActivityCard from "../ActivityCards/ActivityCard";
import SectionHeader from "../SectionHeader/SectionHeader";
function RecentActivity() {
  const [visible, setVisible] = useState(false);

  function showActivityData() {
    const nextVisible = !visible;
    setVisible(nextVisible);
  }
  const ActivityList = visible ? activityData : activityData.slice(0, 3);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <SectionHeader
        title="Recent Activity"
        onClick={showActivityData}
        linkText={visible ? "Show Less" : "View All"}
      />
      <div className="mt-4 space-y-3">
        {ActivityList.map((obj) => (
          <ActivityCard key={obj.id} activity={obj}></ActivityCard>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;