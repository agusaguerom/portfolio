import "./Home.css";
import Tecnologias from "../components/Tecnologias/Tecnologias";
import Projects from "../components/Projects/Projects";
import { FaUserPen } from "react-icons/fa6";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
        
            <div className="containerInfo"> 
                <div className="containerTitulo" id="inicio">
                    <h1 className="tituloNombre">AGUSTÍN<br /> <span className="spanNombre">AGÜERO</span></h1>
                </div>

                <div className="containerMain">
                    <p className="parrafoNombre">
                    Estudiante de Analista de Sistemas con experiencia en desarrollo de aplicaciones tanto de web como de escritorio. Interesado en la programación, bases de datos y el desarrollo de soluciones eficientes.
                    </p>
                </div>

                {/* Nuevo contenedor para elementos adicionales */}
                <div className="Tecnologias" id="tecnologias">
                    <h1 className="tituloTecnologias">Tecnologías</h1>

                    <Tecnologias/>
                </div>

                <div className="Proyectos" id="proyectos">
                    <h1 className="tituloProyectos">Proyectos</h1>
                        <Projects/>
                </div>

                <div className="aboutme" id="aboutme">
                    <h1 className="tituloAcerca"> <FaUserPen size={25}/>  Sobre mí</h1>
                    <AboutMe/>

                </div>

                <Footer/>
            </div>
        </>
    );
}