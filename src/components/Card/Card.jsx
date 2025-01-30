import "./Card.css";
import { FaJava, FaPython, FaPhp, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";

import ButtonCard from "../ButtonCard/ButtonCard";

export default function Card({titulo,img, texto,linkgithub, icons = [], colors=[]}) {
  return (
    <div className="containerProjects">
      <div className="projects">
        <div className="imgProjects">
          <img src={img} alt={titulo} />
        </div>

        <div className="information">
          <h1 className="titulo">{titulo}</h1>
          <small>
          {icons.length > 0 &&
  icons.map((Icon, index) => (
    <Icon key={index} className="icon" style={{ color: colors[index] }} />
  ))}
          </small>          
          <p className="parrafo">{texto}</p>
            <div className="botones">
            <ButtonCard link={linkgithub} icon={FaGithub} text={"Codigo"}/>
            <ButtonCard link={"github.com"} icon={CiLink} text={"Enlace"}/>
            </div>
        </div>
      </div>
    </div>
  );
}
