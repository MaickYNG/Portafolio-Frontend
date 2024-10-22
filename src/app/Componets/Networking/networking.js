"use client"; 
import { useEffect, useState } from "react";
import { UserList } from "./netList";

function RedesSolciales (){
    const [redes , setNetworks]= useState([{ items: [] }])


    async function getPosts() {
        try {
          const resp = await fetch("http://localhost:3001/api/networks");
          const data = await resp.json();
          setNetworks({ items: data }); // Ajusta si el formato de datos es diferente
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
        <h1 className="d-flex justify-content-center mb-4" >Redes Solciales</h1>

        <UserList dataList={redes.items} />
        
        </>
    )
}
export default RedesSolciales