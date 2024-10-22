import "../Proyects/StylePro.css"
//import YI2con from "./YI2con"


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
    const { proyecto, tecnologias, funciones, imagen}=user
    

    return(
        <div className="project-container">
    <div className="card">
        <div className="card-body">
            <div className="icon-name-container">
                <h4 className="card-title">{proyecto}</h4>
                <p className="technologies">{tecnologias}</p>
            </div>
            <h5 className="functions">{funciones}</h5>
            {/* Si tienes una imagen, descomenta esta línea */}
            {/* <img src={imagen} alt={`${proyecto} screenshot`} className="project-image" /> */}
            {/* <YI2con className="custom-icon" iconoNombre={icono} /> */}
        </div>
    </div>
</div>
    )
}