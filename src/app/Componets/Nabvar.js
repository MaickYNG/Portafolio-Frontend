
import Link from "next/link"
import  withUlComponent from "./withUlComponent"
import UlHorizontal from "./UlHorizontal"


function Nabvar (){
    

    const rsList = [

        {id: 1, name: "GitHub" , icon : "FaGithub" ,title : "GitHub", href : "https://github.com/MaickYNG"},
        {id: 2, name: "Linkedin" , icon : "FaLinkedin", title : "Linkedin", href : "https://www.linkedin.com/in/maicol-humberto-ramirez-leal/"}
      ]
    
      const RsHOC = withUlComponent (UlHorizontal, rsList)

    return(
        <>
            
            <nav className="navbar navbar-expand-lg custom-navbar">
                <Link href="/" className="navbar-brand">Mi Portafolio</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                            <Link className="nav-item nav-link active" href="/pages/proyects">Proyects</Link>
                            <Link className="nav-item nav-link" href="/pages/experiences">Experiences</Link>
                            <Link className="nav-item nav-link" href="/pages/tecnologies">Tecnologies</Link>
                            <Link className="nav-item nav-link" href="/pages/contact">Contacto</Link>
                            <Link className="nav-item nav-link" href="/pages/Login">Adm/Login</Link>
                            </div>
                    </div>

                <RsHOC />
                </nav>


        </>

    )

}

export default Nabvar