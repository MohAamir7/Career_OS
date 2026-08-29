
function StatsCard(props){
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1/2 hover:shadow-md flex flex-col gap-3">
            <img src="" alt="Icon"  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"/>
            <h2 className="text-sm font medium text-slate-500">{props.text}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{props.value}</p>
        </div>
    )
}

export default StatsCard;