import {CardData} from '../../Data/mockData'
import StatsCard from '../StatsCards/StatsCard'
function DashBoardStat(){
    return(
        CardData.map(obj=>{
            return <StatsCard  text={obj.cardName} value={obj.cardValue} />
        })
    )
}

export default DashBoardStat;