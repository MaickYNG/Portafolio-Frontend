
//import Usuarios from "@/app/Componets/Adm/AdmTec/Home"

import HomeTec from "@/app/Componets/Adm/AdmTec/Home";
import NavbarAdm from "@/app/Componets/NabvarAdm";
import AuthRedirect from "@/app/Componets/Seguridad";



export default  function Home(){
    return(
        <>
            <AuthRedirect></AuthRedirect>
            <NavbarAdm></NavbarAdm>
            <HomeTec></HomeTec>
            
        
        </>
    )
}