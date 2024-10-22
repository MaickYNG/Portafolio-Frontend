"use client"
import { Card , Form, Button} from "react-bootstrap"
import {useState , useEffect} from "react";
import moment from 'moment';
import { useDispatch} from "react-redux"
import { showMsg } from "../redux/appSlice";
import { useRouter , useParams } from "next/navigation";



export const PostPro =() =>{
    
    async function getPostTec() {
        try{
            if(!_id){
                return
            }
            const resp = await fetch(`http://localhost:3001/api/projects/${_id}`)
            const data = await  resp.json()
            setProyecto(data.proyecto)
            setTecnologias(data.tecnologias)
            setFunciones(data.funciones)


            setStatus(data.status)
            setUpdatedAt(data.updatedAt)
            
            console.log(data)
      
      
          }catch(err){
            console.log(err)
      
          }
        
    }


    async function createPost(){
        
        try{
            const response = await fetch ("http://localhost:3001/api/projects",{

                method: "POST",
                body:JSON.stringify({proyecto, tecnologias, funciones}),
                headers:{
                    "Content-Type":"application/json",
                },
    
            })
            
            const data = await response.json()
            
            
            dispatch(showMsg({msgText:data.message}))
            router.push(`/pages/AdmPro`)
            console.log(data)

        }catch(err){
            console.log(err)

        }
        
    }

    async function updatePost(){
        
        try{
            const response = await fetch (`http://localhost:3001/api/projects/${_id}`,{

                method: "PATCH",
                body:JSON.stringify({proyecto, tecnologias, funciones}),
                headers:{
                    "Content-Type":"application/json",
                },
    
            })
            
            const data = await response.json()
            
            
            dispatch(showMsg({msgText:data.message}))
            
            console.log(data)

        }catch(err){
            console.log(err)

        }
        
    }
    

    async function savePost(e){
        e.preventDefault();
        if (_id) {
            updatePost()

        }else {
            createPost()
        }   
    }

    
    const [proyecto, setProyecto]=useState("")
    const [tecnologias, setTecnologias]=useState("")
    const [funciones, setFunciones]=useState("")
    const [status, setStatus]=useState(true)
    const [updatedAt, setUpdatedAt]=useState("")

    const dispatch = useDispatch()
    let {_id} = useParams()
    const router = useRouter(); 

    useEffect(()=>{
        
        console.log(_id);
        getPostTec();
        

    },[])

    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title> {!_id ? "Nuevo proyecto" :"Editar Proyecto"}</Card.Title>
                
                    <Form onSubmit={savePost}>
                        
                        {
                            _id && <div>
                                <div>ID: {_id}</div>
                                <div className="mb-3"  >Ultima Actualizacion: {moment(updatedAt).format("YYYY-MM-DD hh:mm")}</div>
                            </div>
                        }
                        
                        <Form.Group className="mb-5" controlId="form.proyecto">
                            <Form.Label>Proyecto</Form.Label>
                            <Form.Control placeholder="Nombre  proyecto" value={proyecto} onChange={e => setProyecto(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.tecnologias">
                            <Form.Label>Tecnologias utilizadas</Form.Label>
                            <Form.Control placeholder="nombres de las tecnologias utilizadas" value={tecnologias} onChange={e => setTecnologias(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.funciones">
                            <Form.Label>Funciones</Form.Label>
                            <Form.Control placeholder="resultado del proyecto" value={funciones} onChange={e => setFunciones(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.image">
                            <Form.Label>Posible Imagen</Form.Label>
                            <Form.Control type="file" ></Form.Control>
                        </Form.Group>
                        {
                            _id && <Form.Check
                            type="switch"
                            id ="form.status"
                            label="Estado"
                            checked={status}
                            onChange={()=> setStatus(!status)}
                            className="mb-3"

                        >
                            
                        </Form.Check>
                        }

                        <Button type="submit" variant="primary" className="mx-2" onClick={() => router.push(`/pages/AdmPro`)}>Guardar</Button>
                        
                    </Form>

                
            </Card.Body>


        </Card>
    )
}