
//import YI2con from "./YI2con"
import moment from 'moment';
import "../Experiences/StyleExp.css"


export const UserList =({dataList}) =>{
    return(
        <div className="row">
            
            {dataList?.items.map((user, index) => (
                <UserCard key={`${user.id}-${index}`} user={user} /> // Genera una clave única
            ))}




        </div>
    )
}
function UserCard({user}){
    const { nombre, logros, desde, hasta}=user
    const style = { color: "white", fontSize: "1.5em" }

    return(
                <div className="col-lg-4 col-md-6 mb-4">
            <div className="card experience-card">
                <div className="card-body">
                    <div className="experience-info">
                        <h4 className="card-title">{nombre}</h4>
                        <p className="logros">{logros}</p>
                        <div className="date-container">
                            <div className="date-block">
                                <h5>Desde:</h5>
                                <p>{moment(desde).format("YYYY-MM-DD hh:mm")}</p>
                            </div>
                            <div className="date-block">
                                <h5>Hasta:</h5>
                                <p>{moment(hasta).format("YYYY-MM-DD hh:mm")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}