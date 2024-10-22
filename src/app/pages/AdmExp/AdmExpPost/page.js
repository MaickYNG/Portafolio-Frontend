import { PostExp } from "@/app/Componets/Adm/AdmExp/PostExp";
import AuthRedirect from "@/app/Componets/Seguridad";

export default function HomePost() {

 

    return (
      <>
        
          
          <AuthRedirect></AuthRedirect>
          <PostExp></PostExp>
        
      </>
    );
  }