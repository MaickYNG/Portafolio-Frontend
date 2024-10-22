


import HomeNet from "@/app/Componets/Adm/AdmNet/HomeNet";
import NavbarAdm from "@/app/Componets/NabvarAdm";
import AuthRedirect from "@/app/Componets/Seguridad";



export default  function Home(){
    return(
        <>
            <AuthRedirect></AuthRedirect>
            <NavbarAdm></NavbarAdm>
            <HomeNet></HomeNet>
            
        
        </>
    )
}