export const Work = (props)=>{
    return(<>
        <p className="mt-1">{props.title}</p>
        <p className="text-info"><i className="far fa-calendar-alt"></i> {props.from} - {props.to}</p>
        <p className="fs-6 fw-light">{props.desc}</p>
        <hr></hr>
        </>
    )
}