import YIcon from "./YIcon"


function UlHorizontal ({list}){

    return (<>

        <ul className="navbar-nav flex-row ml-md-auto d-flex gap-2 px-4">

            {
                list.map((item)=>(
                    <li  key={item.id}>
                        
                        <a href={item.href} target="_blank" title={item.title}>
                            <YIcon iconoNombre={item.icon}></YIcon>
                            
                            </a>

                            </li>

                            
                ))
            }
        </ul>
    </>   
    )
}

export default UlHorizontal