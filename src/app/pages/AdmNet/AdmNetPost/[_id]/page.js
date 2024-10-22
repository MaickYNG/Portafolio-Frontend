"use client"
import { PostNet } from "@/app/Componets/Adm/AdmNet/PostNet";
import AuthRedirect from "@/app/Componets/Seguridad";


import { useParams } from "next/navigation"; 

export default function AdmProPost() {
  const { _id } = useParams(); // usa useParams() para obtener el _id

  return (
    <>
        
        
        <AuthRedirect></AuthRedirect>
        <PostNet id={_id} ></PostNet>
    </>
  );
}