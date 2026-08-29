
function StatsCard(props){
    return (
        <div style={{padding:'24px'}}>
            <h2>{props.text}</h2>
            <p>{props.value}</p>
        </div>
    )
}

export default StatsCard;