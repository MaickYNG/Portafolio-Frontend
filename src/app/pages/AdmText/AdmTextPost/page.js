
import { PostText } from "@/app/Componets/Adm/AdmText/PostText";
import AuthRedirect from "@/app/Componets/Seguridad";

export default function HomePost() {

 

    return (
      <>
          <AuthRedirect></AuthRedirect>
          <PostText></PostText>
        
      </>
    );
  }