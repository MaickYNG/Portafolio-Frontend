"use client"; 

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRedirect({ redirectTo = "/" }) {
  const username = useSelector((state) => state.app.username);
  const router = useRouter();

  useEffect(() => {
    if (!username) {
      router.replace(redirectTo); // Redirige a la página especificada en "redirectTo"
    }
  }, [username, router, redirectTo]);

  if (username) {
    return null; // Si está autenticado, no hace nada
  }

  return null; // Retorna null porque el componente solo está para redirigir
}