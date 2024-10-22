import "./StyleRedes.css"
import YI3con from "./YIconRedes"


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
    const { nombre, enlace, icono}=user
    

    return(
        <div className="col-12 d-flex justify-content-center mb-4">
            <div className="card custom-card text-center">
                    <div className="card-body">
                        <div className="icon-name-container">
                            <h4 className="card-title">
                            <i className="fas fa-user"></i> {nombre} {/* Ícono al lado del nombre */}
                            <YI3con className="custom-icon" iconoNombre={icono} />
                            </h4>
                            <a href={enlace} target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-3">
                            Visitar Red
                            </a>
                                <div className="image-container">
                                
                                <img
                                    
                                    
                                    className="custom-image"
                                />
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}