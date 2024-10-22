"use client"; 
import { useEffect, useState } from "react";
import { UserList } from "./TextandTList";

function TextosAndT(){
    const [textos , setTextos]= useState([{ items: [] }])


    async function getPosts() {
        try {
          const resp = await fetch("http://localhost:3001/api/sections");
          const data = await resp.json();
          setTextos({ items: data }); // Ajusta si el formato de datos es diferente
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
        

        <UserList dataList={textos.items} />
        
        </>
    )
}
export default TextosAndT