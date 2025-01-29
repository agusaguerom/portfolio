import "./Projects.css";
import Card from "../Card/Card";
import { FaJava, FaPython, FaPhp, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiAdobephotoshop, SiSqlite, SiMysql } from "react-icons/si";


export default function Projects(){
    return(
        <>
            <div className="containerProyectos">
                <Card titulo={"Titulo"} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} icons={[FaPython, SiSqlite]} colors={['#ffde57', '#90D4F4']}/>
            </div>
        </>
    )
}