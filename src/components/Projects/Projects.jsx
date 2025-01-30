import "./Projects.css";
import Card from "../Card/Card";
import { FaJava, FaPython, FaPhp, FaReact, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiAdobephotoshop, SiSqlite, SiMysql } from "react-icons/si";
import Jumbox from "../../assets/img/Jumbox.png";
import GameStop from "../../assets/img/GameStop.png";
import OneKits from "../../assets/img/OneKits.png";


export default function Projects(){
    return(
        <>
            <div className="containerProyectos">
                <Card titulo={"Jumbox"} img={Jumbox}  texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/tomiiroma/Jumbox-Python"} icons={[FaPython, SiSqlite]} colors={['#ffde57', '#90D4F4']}/>
                <Card titulo={"GameStop"} img={GameStop} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/agusaguerom28/TP2-Android"} icons={[FaJava, SiSqlite]} colors={['#ffde57', '#90D4F4']}/>
                <Card titulo={"OneKits"} img={OneKits} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/agusaguerom28/OneKits-E-Commerce"} icons={[FaPhp, SiMysql]} colors={['#ffde57', '#90D4F4']}/>

            </div>
        </>
    )
}   