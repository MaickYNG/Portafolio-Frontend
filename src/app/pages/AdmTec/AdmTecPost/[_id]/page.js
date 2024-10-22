"use client"
import { Post } from "@/app/Componets/Adm/AdmTec/Post";
import AuthRedirect from "@/app/Componets/Seguridad";
import { useParams } from "next/navigation"; // Cambia esto a next/navigation

export default function AdmTecPost() {
  const { _id } = useParams(); // usa useParams() para obtener el _id

  return (
    <>  
        <AuthRedirect></AuthRedirect>
        <Post id={_id}></Post> {/* Asegúrate de pasar el _id aquí */}
    </>
  );
}