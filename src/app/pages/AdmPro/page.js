
//import Usuarios from "@/app/Componets/Adm/AdmTec/Home"

import HomePro from "@/app/Componets/Adm/AdmPro/HomePro";
import NavbarAdm from "@/app/Componets/NabvarAdm";
import AuthRedirect from "@/app/Componets/Seguridad";



export default  function Home(){
    return(
        <> 
            <AuthRedirect></AuthRedirect>     
            <NavbarAdm></NavbarAdm>
            <HomePro></HomePro>
            
        
        </>
    )
}