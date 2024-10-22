import { PostPro } from "@/app/Componets/Adm/AdmPro/PostPro";
import AuthRedirect from "@/app/Componets/Seguridad";

export default function HomePost() {

 

    return (
      <>
        
          <AuthRedirect></AuthRedirect>
          <PostPro></PostPro>
        
      </>
    );
  }