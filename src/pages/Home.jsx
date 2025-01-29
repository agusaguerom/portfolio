import "./Home.css";
import Tecnologias from "../components/Tecnologias/Tecnologias";
import Projects from "../components/Projects/Projects";
export default function Home() {
    return (
        <>
            <div className="containerInfo">
                <div className="containerTitulo">
                    <h1 className="tituloNombre">LOREM <br /> <span className="spanNombre">IPSUM</span></h1>
                </div>

                <div className="containerMain">
                    <p className="parrafoNombre">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias debitis, sint, nobis amet quos possimus soluta velit eos, perferendis asperiores animi. Ut corporis aperiam dolor officiis, exercitationem sint nihil unde!
                    </p>
                </div>

                {/* Nuevo contenedor para elementos adicionales */}
                <div className="Tecnologias">
                    <h1 className="tituloTecnologias">Tecnologias</h1>

                    <Tecnologias/>
                </div>

                <div className="Proyectos">
                    <h1 className="tituloProyectos">Proyectos</h1>
                        <Projects/>
                </div>
            </div>
        </>
    );
}