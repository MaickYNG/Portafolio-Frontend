"use client"
import { Card , Form, Button} from "react-bootstrap"
import {useState , useEffect} from "react";
import moment from 'moment';
import { useDispatch} from "react-redux"
import { showMsg } from "../redux/appSlice";
import { useRouter , useParams } from "next/navigation";



export const PostNet =() =>{
    
    async function getPostNet() {
        try{
            if(!_id){
                return
            }
            const resp = await fetch(`http://localhost:3001/api/networks/${_id}`)
            const data = await  resp.json()
            setNombre(data.nombre)
            setIcono(data.icono)
            setEnlace(data.enlace)

            setStatus(data.status)
            setUpdatedAt(data.updatedAt)
            
            console.log(data)
      
      
          }catch(err){
            console.log(err)
      
          }
        
    }


    async function createPost(){
        
        try{
            const response = await fetch ("http://localhost:3001/api/networks",{

                method: "POST",
                body:JSON.stringify({nombre, icono, enlace}),
                headers:{
                    "Content-Type":"application/json",
                },
    
            })
            
            const data = await response.json()
            
            
            dispatch(showMsg({msgText:data.message}))
            router.push(`/pages/AdmNet`)
            console.log(data)

        }catch(err){
            console.log(err)

        }
        
    }

    async function updatePost(){
        
        try{
            const response = await fetch (`http://localhost:3001/api/networks/${_id}`,{

                method: "PATCH",
                body:JSON.stringify({nombre, icono, enlace}),
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
    const[icono, setIcono] =useState("")
    const[enlace, setEnlace] =useState("")
    const [status, setStatus]=useState(true)
    const [updatedAt, setUpdatedAt]=useState("")

    const dispatch = useDispatch()
    let {_id} = useParams()
    const router = useRouter(); 

    useEffect(()=>{
        
        console.log(_id);
        getPostNet();
        

    },[])

    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title> {!_id ? "Nueva NetWork" :"Editar NetWork"}</Card.Title>
                
                    <Form onSubmit={savePost}>
                        
                        {
                            _id && <div>
                                <div>ID: {_id}</div>
                                <div className="mb-3"  >Ultima Actualizacion: {moment(updatedAt).format("YYYY-MM-DD hh:mm")}</div>
                            </div>
                        }
                        
                        <Form.Group className="mb-5" controlId="form.red">
                            <Form.Label>Nombre de la Red</Form.Label>
                            <Form.Control placeholder="Nombre de la tacnologia" value={nombre} onChange={e => setNombre(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.icono">
                            <Form.Label>enlace</Form.Label>
                            <Form.Control placeholder="enlace  red social" value={enlace} onChange={e => setEnlace(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.icono">
                            <Form.Label>Nombre del inoco</Form.Label>
                            <Form.Control placeholder="icono de la red, debe iniciar por Si" value={icono} onChange={e => setIcono(e.target.value)}></Form.Control>
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

                        <Button type="submit" variant="primary" className="mx-2" onClick={() => router.push(`/pages/AdmNet`)}>Guardar</Button>
                        
                    </Form>

                
            </Card.Body>


        </Card>
    )
}