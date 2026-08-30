
import {applicationData} from '../../Data/ApplicationData'
import ApplicationCard from '../ApplicationCards/ApplicationCards'

function ApplicationOverview() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applicationData.map((obj) => (
                <ApplicationCard
                    key={obj.id}
                    company={obj.company}
                    position={obj.position}
                    date={obj.appliedDate}
                />
            ))}
        </div>
    );
}

export default ApplicationOverview;