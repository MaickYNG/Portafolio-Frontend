
import { PostNet } from "@/app/Componets/Adm/AdmNet/PostNet";
import AuthRedirect from "@/app/Componets/Seguridad";
export default function HomePost() {

 

    return (
      <>
        
          <AuthRedirect></AuthRedirect>
          
          <PostNet></PostNet>
        
      </>
    );
  }