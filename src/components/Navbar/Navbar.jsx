import "./Navbar.css";
import { CiHome } from "react-icons/ci";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredCategory, setIsHoveredCategory] = useState(false);
  const [isHoveredCode, setIsHoveredCode] = useState(false);
  const [isHoveredGithub, setIsHoveredGithub] = useState(false);

  return (
    <>
      <nav className="containerNav">
        <div className="IconsNav">
          <div
            className="containerIcon"
            onMouseEnter={() => setIsHoveredHome(true)}
            onMouseLeave={() => setIsHoveredHome(false)}
          >
            <a
              href="#inicio"
              className="link"
            >
              {isHoveredHome ? (
                <CiHome title="Inicio" size={40} style={{ color: "#ff9c9c" }} />
              ) : (
                <CiHome size={32} />
              )}
            </a>
          </div>

          <div
            className="containerIcon"
            onMouseEnter={() => setIsHoveredCode(true)}
            onMouseLeave={() => setIsHoveredCode(false)}
          >
            <a
              href="#tecnologias"
              className="link"
            >
              {isHoveredCode ? (
                <FaCode title="Tecnologias" size={40} style={{ color: "#ff9c9c" }} />
              ) : (
                <FaCode size={32} />
              )}
            </a>
          </div>

          <div
            className="containerIcon"
            onMouseEnter={() => setIsHoveredCategory(true)}
            onMouseLeave={() => setIsHoveredCategory(false)}
          >
            <a
              href="#proyectos"
              className="link"
            >
              {isHoveredCategory ? (
                <BiSolidCategoryAlt title="Proyectos" size={40} style={{ color: "#ff9c9c" }} />
              ) : (
                <BiSolidCategoryAlt size={32} />
              )}
            </a>
          </div>

       

          <div
            className="containerIcon"
            onMouseEnter={() => setIsHoveredGithub(true)}
            onMouseLeave={() => setIsHoveredGithub(false)}
          >
            <a
              href="https://github.com/agusaguerom28"
              className="link"
            >
              {isHoveredGithub ? (
                <FaGithub title="Github"  size={40} style={{ color: "#ff9c9c" }} />
              ) : (
                <FaGithub size={32} />
              )}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
