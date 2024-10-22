import * as allIcons from "react-icons/si";





function YI4con({ iconoNombre }) {
  const IconoAUsar = allIcons[iconoNombre] 
  const style = {  fontSize: "4em" }

  if (!IconoAUsar) {
    console.error(`El icono ${iconoNombre} no se encontró en react-icons/si`);
    return <div>Icono no encontrado</div>;
  }

  return <IconoAUsar className="custom-icon" style={style} />;
}

export default YI4con;
