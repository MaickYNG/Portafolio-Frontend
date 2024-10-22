import { Post } from "@/app/Componets/Adm/AdmTec/Post";
import AuthRedirect from "@/app/Componets/Seguridad";

export default function HomePost() {

 

    return (
      <>
          <AuthRedirect></AuthRedirect>
          <Post></Post>
        
      </>
    );
  }