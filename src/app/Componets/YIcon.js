
import * as allIcons from 'react-icons/fa6';


function YIcon({ iconoNombre }) {
  const IconoAUsar = allIcons[iconoNombre];
  const style = { color: "white", fontSize: "1.6em" }

  if (!IconoAUsar) {
    console.error(`El icono ${iconoNombre} no se encontró en react-icons/fa`);
    return <div>Icono no encontrado</div>;
  }

  return <IconoAUsar style={style} />;
}

export default YIcon;