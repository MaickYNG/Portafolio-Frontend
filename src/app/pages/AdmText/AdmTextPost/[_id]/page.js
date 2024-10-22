"use client"
import { Post } from "@/app/Componets/Adm/AdmTec/Post";
import { PostText } from "@/app/Componets/Adm/AdmText/PostText";
import AuthRedirect from "@/app/Componets/Seguridad";
import { useParams } from "next/navigation"; // Cambia esto a next/navigation

export default function AdmTecPost() {
  const { _id } = useParams(); // usa useParams() para obtener el _id

  return (
    <>
        <AuthRedirect></AuthRedirect>
        <PostText id={_id} ></PostText>
    </>
  );
}