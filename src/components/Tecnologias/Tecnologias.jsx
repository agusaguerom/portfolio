import { useState } from "react";
import "./Tecnologias.css";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3
} from "react-icons/fa";
import { SiAdobephotoshop, SiSqlite, SiMysql } from "react-icons/si";

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
  const [sqliteHovered, setSqliteHovered] = useState(false);
  const [mysqlHovered, setMysqliteHovered] = useState(false);
  const [htmlHovered, seHtmlHovered] = useState(false);
  const [cssHovered, setCssHovered] = useState(false);

  return (
    <>
      <div className="contenedorPrincipal">
        <div className="containerTecnologias">
          <div className="iconosLenguajes">
            <FaJava
              title="Java"
              onMouseEnter={() => setJavaHovered(true)}
              onMouseLeave={() => setJavaHovered(false)}
              style={{
                color: javaHovered ? "#5382a1" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
              <FaHtml5
              title="HTML5"
              onMouseEnter={() => seHtmlHovered(true)}
              onMouseLeave={() => seHtmlHovered(false)}
              style={{
                color: htmlHovered ? "#ff6347" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
               <FaCss3
              title="CSS"
              onMouseEnter={() => setCssHovered(true)}
              onMouseLeave={() => setCssHovered(false)}
              style={{
                color: cssHovered ? "#264de4" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaPython
              title="Python"
              onMouseEnter={() => setPythonHovered(true)}
              onMouseLeave={() => setPythonHovered(false)}
              style={{
                color: pythonHovered ? "#ffde57" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaPhp
              title="PHP"
              onMouseEnter={() => setPhpHovered(true)}
              onMouseLeave={() => setPhpHovered(false)}
              style={{
                color: phpHovered ? "#AEB2D5" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaReact
              title="React"
              onMouseEnter={() => setReactHovered(true)}
              onMouseLeave={() => setReactHovered(false)}
              style={{
                color: reactHovered ? "#61DBFB" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaNode
              title="NodeJS"
              onMouseEnter={() => setNodeHovered(true)}
              onMouseLeave={() => setNodeHovered(false)}
              style={{
                color: nodeHovered ? "#68A063" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaGitAlt
              title="GIT"
              onMouseEnter={() => setGitHovered(true)}
              onMouseLeave={() => setGitHovered(false)}
              style={{
                color: gitHovered ? "#ff5722" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <FaGithub
              title="Github"
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
              style={{
                color: githubHovered ? "#24292e" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <SiSqlite
              title="Sqlite"
              onMouseEnter={() => setSqliteHovered(true)}
              onMouseLeave={() => setSqliteHovered(false)}
              style={{
                color: sqliteHovered ? "#90D4F4" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <SiMysql
              title="MySql"
              onMouseEnter={() => setMysqliteHovered(true)}
              onMouseLeave={() => setMysqliteHovered(false)}
              style={{
                color: mysqlHovered ? "#f29111" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
            <SiAdobephotoshop
              title="Photoshop"
              onMouseEnter={() => setPhotoshopHovered(true)}
              onMouseLeave={() => setPhotoshopHovered(false)}
              style={{
                color: photoshopHovered ? "#40D0FB" : "#a3a3a3",
                transition: "color 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
