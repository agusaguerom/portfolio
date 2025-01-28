import React, { useState } from "react";
import "./Tecnologias.css";
import { FaJava, FaPython, FaPhp, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

export default function Tecnologias() {
    // Estado individual para cada ícono
    const [javaHovered, setJavaHovered] = useState(false);
    const [pythonHovered, setPythonHovered] = useState(false);
    const [phpHovered, setPhpHovered] = useState(false);
    const [reactHovered, setReactHovered] = useState(false);
    const [nodeHovered, setNodeHovered] = useState(false);
    const [gitHovered, setGitHovered] = useState(false);
    const [githubHovered, setGithubHovered] = useState(false);
    const [photoshopHovered, setPhotoshopHovered] = useState(false);

    return (
        <>
            <div className="contenedorPrincipal">
                <div className="containerTecnologias">
                    <div className="iconosLenguajes">
                        <FaJava 
                            onMouseEnter={() => setJavaHovered(true)} 
                            onMouseLeave={() => setJavaHovered(false)}
                            style={{ color: javaHovered ? '#5382a1' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaPython 
                            onMouseEnter={() => setPythonHovered(true)} 
                            onMouseLeave={() => setPythonHovered(false)}
                            style={{ color: pythonHovered ? '#ffde57' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaPhp 
                            onMouseEnter={() => setPhpHovered(true)} 
                            onMouseLeave={() => setPhpHovered(false)}
                            style={{ color: phpHovered ? "#AEB2D5" : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaReact 
                            onMouseEnter={() => setReactHovered(true)} 
                            onMouseLeave={() => setReactHovered(false)}
                            style={{ color: reactHovered ? '#61DBFB' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaNode 
                            onMouseEnter={() => setNodeHovered(true)} 
                            onMouseLeave={() => setNodeHovered(false)}
                            style={{ color: nodeHovered ? '#68A063' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaGitAlt 
                            onMouseEnter={() => setGitHovered(true)} 
                            onMouseLeave={() => setGitHovered(false)}
                            style={{ color: gitHovered ? '#ff5722' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <FaGithub 
                            onMouseEnter={() => setGithubHovered(true)} 
                            onMouseLeave={() => setGithubHovered(false)}
                            style={{ color: githubHovered ? '#24292e' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                        <SiAdobephotoshop 
                            onMouseEnter={() => setPhotoshopHovered(true)} 
                            onMouseLeave={() => setPhotoshopHovered(false)}
                            style={{ color: photoshopHovered ? '#40D0FB' : '#a3a3a3', transition: 'color 0.3s ease' }} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
