

import "../ListarTec/StyleIcon.css"
import YI2con from "./YI2con"


export const UserList =({dataList}) =>{
    return(
        <div className="row">
            {dataList?.map((user, index) => (
                <UserCard key={`${user.id}-${index}`} user={user} /> 
            ))}




        </div>
    )
}
function UserCard({user}){
    const { nombre, icono}=user
    const style = { color: "white", fontSize: "1.5em" }

    return(
                <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card tech-card text-center">
                <div className="card-body">
                    <div className="icon-name-container">
                        <YI2con className="custom-icon" iconoNombre={icono} />
                        <h4 className="card-title mt-3">{nombre}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}



