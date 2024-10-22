"use client"; 
import { useEffect, useState } from "react";
import { UserList } from "./proyecList";

function Proyects (){
    const [proyectos , setProyects]= useState([{ items: [] }])


    async function getPosts() {
        try {
          const resp = await fetch("http://localhost:3001/api/projects");
          const data = await resp.json();
          setProyects({ items: data }); // Ajusta si el formato de datos es diferente
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

    return(
        <>
        <h1>Projects</h1>

        <UserList dataList={proyectos.items} />
        
        </>
    )
}
export default Proyects