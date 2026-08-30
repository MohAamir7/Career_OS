import {CardData} from '../../Data/mockData'
import StatsCard from '../StatsCards/StatsCard'
function DashBoardStat(){
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {CardData.map((obj) => {
        return (
          <StatsCard
            key={obj.id}
            text={obj.cardName}
            value={obj.cardValue}
            description={obj.description}
            trend={obj.trend}

          />
        );
      })}
    </div>
    )
}

export default DashBoardStat;