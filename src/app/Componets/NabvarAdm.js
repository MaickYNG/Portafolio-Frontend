"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {useSelector, useDispatch} from "react-redux"
import { hideMsg, setProfile, showMsg } from './Adm/redux/appSlice';
import Link from "next/link"
import { useRouter  } from "next/navigation";
import { useEffect } from "react";




export default  function NavbarAdm(){

    
      async function doLogout() {
        try {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/adm/logout`);
            if (!resp.ok) throw new Error('Error during logout');
    
            // Mostrar mensaje opcionalmente
            const data = await resp.json();
            dispatch(showMsg({ msgText: data.message }));
    
            // Borrar localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("fullname");
            
            dispatch(setProfile({ username: "", fullname: "" }));
    
            // Redirigir después de limpiar localStorage
            router.push("/", { replace: true });
        } catch (err) {
            console.error("Logout failed:", err);
        }
    }
    
    

  const msgShow= useSelector ( state => state.app.msgShow)
  const msgText= useSelector (state => state.app.msgText)
  const msgType= useSelector ( state=> state.app.msgType)
  const username = useSelector((state) => state.app.username);

  const dispatch = useDispatch()
  const router = useRouter();
  useEffect(() => {
    const storage = window.localStorage;
    const username = storage.getItem("username");
    const fullname = storage.getItem("fullname");
    dispatch(
      setProfile({
        username: username || "",
        fullname: fullname || "",
      })
    );
  }, []);


    return(
        <>

            <nav className="navbar navbar-expand-lg custom-navbar mt-4 mb-4">
                <div className="container"> {/* El contenedor limita el ancho */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto"> 
                        { username && <Link className="nav-item nav-link" href="/pages/AdmTec">AdmTec</Link>}
                        { username && <Link className="nav-item nav-link" href="/pages/AdmPro">AdmProyects</Link>}
                        { username && <Link className="nav-item nav-link" href="/pages/AdmExp">AdmExperiences</Link>}
                        { username && <Link className="nav-item nav-link" href="/pages/AdmNet">AdmNetworks</Link>}
                        { username && <Link className="nav-item nav-link" href="/pages/AdmText">AdmText</Link>}
                        { username && <Link className="nav-item nav-link" href="/" onClick={doLogout}>Log Out </Link>}
                        </div>
                    </div>
                    {msgShow && <Alert variant={msgType} onClose={() => dispatch(hideMsg())} dismissible>
                        <p>{msgText}</p>
                        </Alert> }
                </div>
            </nav>
        
        
        
        </>
    )
}





