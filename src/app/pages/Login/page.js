"use client"
import { Login } from "@/app/Componets/Login/Login"
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link"

export default  function Home(){
    const username = useSelector((state) => state.app.username);
    
    const router = useRouter();

  useEffect(() => {
    if (username) {
      
      router.replace("/pages/AdmTec"); 
    }
  }, [username, router]);

  if (username) {
    return null; 
  }
    return(
        <>

        <Login></Login>
        
        
        </>
    )
}