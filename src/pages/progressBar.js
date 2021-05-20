export const ProgressBar= (props)=>{
    return(
        <>
            <p>{props.name}</p>
            <div className="progress">
                <div className="progress-bar bg-info rounded" role="progressbar" style={{width: props.value+'%'}} aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100">{props.value}</div>
              </div>
        </>
    )
}