import "./Home.css";
import Tecnologias from "../components/Tecnologias/Tecnologias";
import Projects from "../components/Projects/Projects";
export default function Home() {
    return (
        <>
        
            <div className="containerInfo"> 
                <div className="containerTitulo" id="inicio">
                    <h1 className="tituloNombre">AGUSTIN <br /> <span className="spanNombre">AGÜERO</span></h1>
                </div>

                <div className="containerMain">
                    <p className="parrafoNombre">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias debitis, sint, nobis amet quos possimus soluta velit eos, perferendis asperiores animi. Ut corporis aperiam dolor officiis, exercitationem sint nihil unde!
                    </p>
                </div>

                {/* Nuevo contenedor para elementos adicionales */}
                <div className="Tecnologias" id="tecnologias">
                    <h1 className="tituloTecnologias">Tecnologias</h1>

                    <Tecnologias/>
                </div>

                <div className="Proyectos" id="proyectos">
                    <h1 className="tituloProyectos">Proyectos</h1>
                        <Projects/>
                </div>
            </div>
        </>
    );
}