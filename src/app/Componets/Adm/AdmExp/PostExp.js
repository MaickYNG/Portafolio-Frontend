"use client"
import { Card , Form, Button} from "react-bootstrap"
import {useState , useEffect} from "react";
import moment from 'moment';
import { useDispatch} from "react-redux"
import { showMsg } from "../redux/appSlice";
import { useRouter , useParams } from "next/navigation";



export const PostExp =() =>{
    
    async function getPostExp() {
        try{
            if(!_id){
                return
            }
            const resp = await fetch(`http://localhost:3001/api/experiences/${_id}`)
            const data = await  resp.json()
            setNombre(data.nombre)
            setLogros(data.logros)
            setDesde(data.desde)
            setHasta(data.hasta)


            setStatus(data.status)
            setUpdatedAt(data.updatedAt)
            
            console.log(data)
      
      
          }catch(err){
            console.log(err)
      
          }
        
    }


    async function createPost(){
        
        try{
            const response = await fetch ("http://localhost:3001/api/experiences",{

                method: "POST",
                body:JSON.stringify({nombre, logros, desde, hasta}),
                headers:{
                    "Content-Type":"application/json",
                },
    
            })
            
            const data = await response.json()
            
            
            dispatch(showMsg({msgText:data.message}))
            router.push(`/pages/AdmExp`)
            console.log(data)

        }catch(err){
            console.log(err)

        }
        
    }

    async function updatePost(){
        
        try{
            const response = await fetch (`http://localhost:3001/api/experiences/${_id}`,{

                method: "PATCH",
                body:JSON.stringify({nombre, logros, desde, hasta}),
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

    
    const[nombre, setNombre] =useState("")
    const[logros, setLogros] =useState("")
    const[desde, setDesde] =useState("")
    const[hasta, setHasta] =useState("")
    const [status, setStatus]=useState(true)
    const [updatedAt, setUpdatedAt]=useState("")

    const dispatch = useDispatch()
    let {_id} = useParams()
    const router = useRouter(); 

    useEffect(()=>{
        
        console.log(_id);
        getPostExp();
        

    },[])

    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title> {!_id ? "Nueva experiencia" :"Editar Experiencia"}</Card.Title>
                
                    <Form onSubmit={savePost}>
                        
                        {
                            _id && <div>
                                <div>ID: {_id}</div>
                                <div className="mb-3"  >Ultima Actualizacion: {moment(updatedAt).format("YYYY-MM-DD hh:mm")}</div>
                            </div>
                        }
                        
                        <Form.Group className="mb-5" controlId="form.experiencia">
                            <Form.Label>Proyecto</Form.Label>
                            <Form.Control placeholder="Nombre Experiencia" value={nombre} onChange={e => setNombre(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.logros">
                            <Form.Label>logros</Form.Label>
                            <Form.Control placeholder="logro obtenidos" value={logros} onChange={e => setLogros(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.desde">
                            <Form.Label>Desde</Form.Label>
                            <Form.Control placeholder="Inicio" value={desde} onChange={e => setDesde(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.hasta">
                            <Form.Label>Hasta</Form.Label>
                            <Form.Control placeholder="Fin" value={hasta} onChange={e => setHasta(e.target.value)}></Form.Control>
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

                        <Button type="submit" variant="primary" className="mx-2" onClick={() => router.push(`/pages/AdmExp`)}>Guardar</Button>
                        
                    </Form>

                
            </Card.Body>


        </Card>
    )
}