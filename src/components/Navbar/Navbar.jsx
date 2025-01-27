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


            <div className="containerIcon" onMouseEnter={() => setIsHoveredHome(true)} onMouseLeave={()=>setIsHoveredHome(false)}>
                {isHoveredHome ? (
                <CiHome size={40}/>
                ): 
                <CiHome size={32}/>
                }
            </div>

                
            <div className="containerIcon" onMouseEnter={() => setIsHoveredCategory(true)} onMouseLeave={()=>setIsHoveredCategory(false)}>
                {isHoveredCategory ?(
                <BiSolidCategoryAlt size={40}/>
                ):
                <BiSolidCategoryAlt size={32}/>
                }
                
               
            </div>

                    
            <div className="containerIcon" onMouseEnter={() => setIsHoveredCode(true)} onMouseLeave={()=>setIsHoveredCode(false)}>
                {isHoveredCode ?(
                <FaCode size={40}/>
                ):
                <FaCode size={32}/>
            }
                
            </div>

                    
            <div className="containerIcon" onMouseEnter={() =>setIsHoveredGithub(true)} onMouseLeave={()=>setIsHoveredGithub(false)}>
                {isHoveredGithub ?(
                <FaGithub size={40}/>
                ):
                <FaGithub size={32}/>
                }
                
            </div>

            </div>
        </nav>
        </>
    );
    }
