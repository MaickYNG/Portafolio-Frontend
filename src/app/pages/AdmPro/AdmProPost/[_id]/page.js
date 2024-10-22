"use client"
import { PostPro } from "@/app/Componets/Adm/AdmPro/PostPro";
import AuthRedirect from "@/app/Componets/Seguridad";

import { useParams } from "next/navigation"; 

export default function AdmProPost() {
  const { _id } = useParams(); // usa useParams() para obtener el _id

  return (
    <>
        <AuthRedirect></AuthRedirect>
        <PostPro id={_id}></PostPro>
    </>
  );
}