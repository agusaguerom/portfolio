import "./Projects.css";
import Card from "../Card/Card";
import {
  FaJava,
  FaPython,
  FaPhp,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaAndroid,
  FaLaravel,
} from "react-icons/fa";
import { SiAdobephotoshop, SiSqlite, SiMysql } from "react-icons/si";
import Jumbox from "../../assets/img/Jumbox.png";
import GameStop from "../../assets/img/GameStop.png";
import OneKits from "../../assets/img/OneKits.png";
import MusiqIO from "../../assets/img/MusiqIO.png";
import Inmobiliaria from "../../assets/img/Inmobiliaria.webp";

export default function Projects() {
  return (
    <>
      <div className="containerProyectos">
        <Card
          titulo={"Jumbox"}
          img={Jumbox}
          texto={
            "Aplicación Web que permite conectar a mercados de una misma sucursal entre sí, para poder realizar pedidos entre ellos. Desarrollado con el framework Flask de Python y conectado a base de datos SQLite"
          }
          linkgithub={"https://github.com/tomiiroma/Jumbox-Python"}
          icons={[FaHtml5, FaCss3, FaPython, SiSqlite]}
          colors={["#ff6347", "#264de4", "#ffde57", "#90D4F4"]}
        />

        <Card
          titulo={"GameStop"}
          img={GameStop}
          texto={
            "Aplicación Móvil que permite gestionar los productos de la Tienda GameStop. Desarrollado con Java en Android Studio y contando con base de datos SQLite "
          }
          linkgithub={"https://github.com/agusaguerom28/TP2-Android"}
          icons={[FaAndroid, FaJava, SiSqlite]}
          colors={["#a4c639", "#5382a1", "#90D4F4"]}
        />

        <Card
          titulo={"OneKits"}
          img={OneKits}
          texto={
            "Pequeño e-commerce para la venta de productos del emprendimiento One-Kits. Desarrollado en el framework Laravel de PHP y MySQL"
          }
          linkgithub={"https://github.com/agusaguerom28/OneKits-E-Commerce"}
          icons={[FaHtml5, FaCss3, FaPhp, FaLaravel, SiMysql]}
          colors={["#ff6347", "#264de4", "#AEB2D5", "#fb503b", "#f29111"]}
        />

        <Card
          titulo={"MusiqIO"}
          img={MusiqIO}
          texto={
            "Aplicación de Música donde los artistas pueden subir sus creaciones para los oyentes. Creado con React con conexión a una API hecha en ExpressJs y una base de datos MySQL"
          }
          linkgithub={"https://github.com/agusaguerom28/TP2-Plataformas"}
          icons={[FaReact, FaNode, SiMysql]}
          colors={["#61DBFB", "#68A063", "#f29111"]}
        />

        <Card
          titulo={"Sistema de Gestión Inmobiliario"}
          img={Inmobiliaria}
          texto={
            "Sistema de Escritorio para las operaciones habituales de una institución inmobiliaria. Realizado con Java, Java Swing y contando con pruebas unitarias en JUnit"
          }
          linkgithub={"https://github.com/tomiiroma/Tp_Gestor_Inmobiliaria"}
          icons={[FaJava, SiMysql]}
          colors={["#5382a1", "#f29111"]}
        />
      </div>
    </>
  );
}
