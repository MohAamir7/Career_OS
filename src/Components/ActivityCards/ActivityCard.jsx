


function ActivityCard(props){
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col gap-3">
            <img src="" alt="Icon"  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"/>
            <h2 className="text-sm font-medium text-slate-500">{props.children.type}</h2>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{props.children.title}</h3>
            <p>{props.children.description}</p>
            <p>{props.children.date}</p>
            <p>{props.children.time}</p>
        </div>
    )
}

export default ActivityCard;