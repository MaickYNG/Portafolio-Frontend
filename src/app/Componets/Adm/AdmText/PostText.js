"use client"
import { Card , Form, Button} from "react-bootstrap"
import {useState , useEffect} from "react";
import moment from 'moment';
import { useDispatch} from "react-redux"
import { showMsg } from "../redux/appSlice";
import { useRouter , useParams } from "next/navigation";



export const PostText =() =>{
    
    async function getPostText() {
        try{
            if(!_id){
                return
            }
            const resp = await fetch(`http://localhost:3001/api/sections/${_id}`)
            const data = await  resp.json()
            setTitulo(data.titulo)
            setTexto(data.texto)


            setStatus(data.status)
            setUpdatedAt(data.updatedAt)
            
            console.log(data)
      
      
          }catch(err){
            console.log(err)
      
          }
        
    }


    async function createPost(){
        
        try{
            const response = await fetch ("http://localhost:3001/api/sections",{

                method: "POST",
                body:JSON.stringify({titulo, texto}),
                headers:{
                    "Content-Type":"application/json",
                },
    
            })
            
            const data = await response.json()
            
            
            dispatch(showMsg({msgText:data.message}))
            router.push(`/pages/AdmText`)
            console.log(data)

        }catch(err){
            console.log(err)

        }
        
    }

    async function updatePost(){
        
        try{
            const response = await fetch (`http://localhost:3001/api/sections/${_id}`,{

                method: "PATCH",
                body:JSON.stringify({titulo, texto}),
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

    
    const[titulo, setTitulo] =useState("")
    const[texto, setTexto] =useState("")
    const [status, setStatus]=useState(true)
    const [updatedAt, setUpdatedAt]=useState("")

    const dispatch = useDispatch()
    let {_id} = useParams()
    const router = useRouter(); 

    useEffect(()=>{
        
        console.log(_id);
        getPostText();
        

    },[])

    return(
        <Card className="my-2">
            <Card.Body>
                <Card.Title> {!_id ? "Nuevo modeulo de texto" :"Editar texto/estudio"}</Card.Title>
                
                    <Form onSubmit={savePost}>
                        
                        {
                            _id && <div>
                                <div>ID: {_id}</div>
                                <div className="mb-3"  >Ultima Actualizacion: {moment(updatedAt).format("YYYY-MM-DD hh:mm")}</div>
                            </div>
                        }
                        
                        <Form.Group className="mb-5" controlId="form.Titulo">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control placeholder="titulo del modulo" value={titulo} onChange={e => setTitulo(e.target.value)}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="form.logros">
                            <Form.Label>Texto</Form.Label>
                            <Form.Control placeholder="Texto" value={texto} onChange={e => setTexto(e.target.value)}></Form.Control>
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

                        <Button type="submit" variant="primary" className="mx-2" onClick={() => router.push(`/pages/AdmText`)}>Guardar</Button>
                        
                    </Form>

                
            </Card.Body>


        </Card>
    )
}