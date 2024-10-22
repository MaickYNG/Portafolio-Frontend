
import HomeText from "@/app/Componets/Adm/AdmText/HomeText";
import NavbarAdm from "@/app/Componets/NabvarAdm";
import AuthRedirect from "@/app/Componets/Seguridad";



export default  function Home(){
    return(
        <>
            <AuthRedirect></AuthRedirect>
            <NavbarAdm></NavbarAdm>
            <HomeText></HomeText>
            
        
        </>
    )
}