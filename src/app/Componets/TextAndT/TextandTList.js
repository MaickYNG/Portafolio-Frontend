import "./TextStyle.css"

export const UserList = ({ dataList }) => {
    return (
      <div className="container d-flex justify-content-center align-items-center flex-wrap"> {/* Contenedor centrado */}
        <div className="row justify-content-center text-container"> {/* Centrar el contenido */}
          {dataList?.items.map((user, index) => (
            <UserText key={`${user.id}-${index}`} user={user} /> // Genera una clave única
          ))}
        </div>
      </div>
    );
  };
  
  function UserText({ user }) {
    const { titulo, texto } = user;
  
    return (
      <div className="col-md-8 mb-4"> {/* Columna responsiva y con margen inferior */}
        <div className="user-info">
          <h4 className="user-title">{titulo}</h4>
          <p className="user-text">{texto}</p>
        </div>
      </div>
    );
  }