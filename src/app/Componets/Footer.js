import UlVertical from "./UlVertical"
import  withUlComponent  from "./withUlComponent"


function Footer (){

    const rsList = [

        {id: 1, name: "GitHub" , icon : "FaGithub" },
        {id: 2, name: "Twiter" , icon : "FaTwitter" },
        {id: 2, name: "Linkedin" , icon : "FaLinkedin"},
        {id: 2, name: "Naomi" , icon : "FaShieldDog"},
        {id: 2, name: "WhatsApp" , icon : "FaSquareWhatsapp"}
    
      ]

      const RsHOC = withUlComponent(UlVertical, rsList)

    return(
        <>
           <div className="custom-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <h5>Sobre Nosotros</h5>
                            <p>Información sobre la empresa o el sitio web.</p>
                        </div>
                        <div className="col-6 text-center">
                            <h5>Enlaces</h5>
                            <ul className="list-unstyled">
                            <li><a href="#!">Inicio</a></li>
                            <li><a href="#!">Servicios</a></li>
                            <li><a href="#!">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="col-3 text-right">
                            <RsHOC />
                            <p>© 2024 Mi Sitio Web</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )


}

export default Footer