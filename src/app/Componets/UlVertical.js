import YIcon from "./YIcon"

function UlVertical ({list}){

    return (<>

        <ul className="">

            {
                list.map((item)=>(
                    <li key={item.id}><YIcon iconoNombre={item.icon}></YIcon></li>
                ))
            }
        </ul>
    </>   
    )
}

export default UlVertical