"use client";
import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import withSearchBar from "./withSearchBar";

function Usuarios() {
  const [tecnologies, setTecnologies] = useState({ items: [] });

  async function getPosts() {
    try {
      const resp = await fetch("http://localhost:3001/api/tecnologies?per_page=50");

      const data = await resp.json();
      setTecnologies({ items: data }); // Ajusta si el formato de datos es diferente
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("siempre se ejecuta");
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const UserListWithSearch = withSearchBar(UserList, tecnologies.items, [
    "nombre",
    "icono",
  ]);

  return (
    <>
      <h1>Tecnologias</h1>
      <UserListWithSearch />
    </>
  );
}

export default Usuarios;
