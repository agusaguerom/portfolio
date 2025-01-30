import "./Projects.css";
import Card from "../Card/Card";
import { FaJava, FaPython, FaPhp, FaReact, FaNode, FaGitAlt, FaGithub, FaHtml5, FaCss3, FaAndroid, FaLaravel   } from "react-icons/fa";
import { SiAdobephotoshop, SiSqlite, SiMysql } from "react-icons/si";
import Jumbox from "../../assets/img/Jumbox.png";
import GameStop from "../../assets/img/GameStop.png";
import OneKits from "../../assets/img/OneKits.png";
import MusiqIO from "../../assets/img/MusiqIO.png";
import Inmobiliaria from "../../assets/img/Inmobiliaria.webp";


export default function Projects(){
    return(
        <>
            <div className="containerProyectos">
                <Card titulo={"Jumbox"} img={Jumbox}  texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/tomiiroma/Jumbox-Python"} icons={[FaHtml5, FaCss3, FaPython, SiSqlite]} colors={['#ff6347', '#264de4', '#ffde57', '#90D4F4']}/>
                <Card titulo={"GameStop"} img={GameStop} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/agusaguerom28/TP2-Android"} icons={[FaAndroid, FaJava, SiSqlite]} colors={['#a4c639','#ffde57', '#90D4F4']}/>
                <Card titulo={"OneKits"} img={OneKits} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/agusaguerom28/OneKits-E-Commerce"} icons={[FaHtml5,FaCss3, FaPhp,FaLaravel, SiMysql]} colors={['#ff6347', '#264de4','#AEB2D5', '#fb503b', '#f29111']}/>
                <Card titulo={"MusiqIO"} img={MusiqIO} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/agusaguerom28/TP2-Plataformas"} icons={[FaReact, FaNode, SiMysql]} colors={['#61DBFB','#68A063','#f29111']}/>
                <Card titulo={"Sistema de Gestion Inmobiliario"} img={Inmobiliaria} texto={"lorem e wrhr e ewhuihuie  wehuirehiu hui ewhue huiewuhier hweriuehur herwuiherui"} linkgithub={"https://github.com/tomiiroma/Tp_Gestor_Inmobiliaria"} icons={[FaJava, SiMysql]} colors={['#5382a1', '#f29111']}/>

            </div>
        </>
    )
}   