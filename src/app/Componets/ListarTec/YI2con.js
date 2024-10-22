import * as allIcons from 'react-icons/fa6';
import "../ListarTec/StyleIcon.css"


function YI2con({ iconoNombre }) {
  const IconoAUsar = allIcons[iconoNombre];
  //const style = {  fontSize: "3em" }

  if (!IconoAUsar) {
    console.error(`El icono ${iconoNombre} no se encontró en react-icons/fa`);
    return <div>Icono no encontrado</div>;
  }

  return <IconoAUsar className="custom-icon" />;
}

export default YI2con;




//style ={style}