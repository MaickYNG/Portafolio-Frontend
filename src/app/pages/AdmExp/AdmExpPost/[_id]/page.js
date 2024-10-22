"use client"
import { PostExp } from "@/app/Componets/Adm/AdmExp/PostExp";
import AuthRedirect from "@/app/Componets/Seguridad";


import { useParams } from "next/navigation"; 

export default function AdmProPost() {
  const { _id } = useParams(); // usa useParams() para obtener el _id

  return (
    <>
        
        <AuthRedirect></AuthRedirect>
        <PostExp id={_id}></PostExp>
    </>
  );
}