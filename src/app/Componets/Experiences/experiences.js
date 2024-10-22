"use client"; 
import { useEffect, useState } from "react";
import { UserList } from "./expeList";

function Experiences(){
    const [Factorys , setExperiences]= useState([])

    async function getPosts() {
        try {
          const resp = await fetch("http://localhost:3001/api/experiences");
          const data = await resp.json();
          setExperiences({ items: data }); // Ajusta si el formato de datos es diferente
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
        <h1>Experiences</h1>

        <UserList dataList={Factorys.items} />
        
        </>
    )
}
export default Experiences