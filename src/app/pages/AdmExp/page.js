

import HomeExp from "@/app/Componets/Adm/AdmExp/HomeExp";
import NavbarAdm from "@/app/Componets/NabvarAdm";
import AuthRedirect from "@/app/Componets/Seguridad";



export default  function Home(){
    
    return(
        <>
            <AuthRedirect></AuthRedirect>
            <NavbarAdm></NavbarAdm>
            <HomeExp></HomeExp>
            
        
        </>
    )
}