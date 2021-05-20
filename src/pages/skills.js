
import { ProgressBar } from "./progressBar";
/* import 'bootstrap/dist/css/bootstrap.min.css';
 */

export const MainData = (props) =>
{
    const skills = [
        {
            name:'IT',
            value:'90'
        },
        {
            name:'Web Developer',
            value:'80'
        }
    ]
    const languages = [
        {
            name:'Arabic',
            value:'100'
        },
        {
            name:'English',
            value:'80'
        },
        
    ]
    return(
        <div className="col-4  rounded "> 
        <div className="row p-2">
        <div className="position-relative col-12 image">
            <img alt='User Pic' className="img-fluid w-100 h-100" src="./v2.jpg"></img> 
            <h3 id="name" className="text-white position-absolute ">{props.data.userName}</h3>
        </div>
        <div className="card-body bg-white col-12 my-1">
            <p><i className="fas fa-pen text-info"></i>  {props.data.jobDesc} </p>
            <p><i className="fas fa-home text-info"></i> {props.data.address}</p>
            <p><i className="fas fa-birthday-cake text-info"></i>  {props.data.birthday}</p>
            <p><i className="fas fa-birthday-cake text-info"></i> {props.data.phone}</p>
        </div>
        <div className="card-body bg-white col-12 my-1">
        
            <h4><i className="fas fa-star-of-life text-info"></i> Skills</h4>
            {skills.map((skill , index) => {
                return <ProgressBar key={index} name={skill.name} value={skill.value} />
            })}
        </div>
        <div className="card-body bg-white col-12 my-1">
            <h4><i className="fas fa-globe-africa text-info"></i> Languages</h4>
            {languages.map((language , index) => {
                return <ProgressBar key={index} name={language.name} value={language.value} />
            })}
        </div>
            
    </div> 
    </div>
    )
};
