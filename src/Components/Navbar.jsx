import { useState, useEffect } from "react";
import assets from "../assets/assets";

const Navbar = ()=>{

    const [menuOpen, setMenuopen] = useState(false);

    const [active, setActive] = useState("#");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["#", "about", "projects", "contact"];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActive(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <nav className="w-full min-h-20 flex items-center justify-between bg-(--bg-color) max-sm:px-4 fixed top-0 z-50">
            <img src={assets.logo} alt="logo" className="w-20 lg:mx-40"/>

            <img src={assets.Close_icon} alt="" className={`w-10 sm:hidden
                ${!menuOpen? 'hidden' : 'block'}`} onClick={()=>setMenuopen(false)}/>

            <img src={assets.Navbar_icon} alt="" className={`w-10 sm:hidden  
                ${!menuOpen? 'block' : 'hidden'}`} onClick={()=>setMenuopen(true)}/>
            
            <div className={`w-full max-sm:h-50 bg-(--bg-color) max-sm:absolute top-full right-0 flex flex-col 
            justify-center text-center gap-4 lg:gap-8 font-bold text-lg transition-all duration-300
            sm:flex-row sm:top-0 sm:h-20 sm:items-center sm:bg-(--bg-color)/0
                ${!menuOpen? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-full'}`}>

                <a href="#" onClick={()=>setMenuopen(false)} className={`${active === "#" ? "text-(--primary-text-color)" : "hover:text-(--secondary-text-color)"} text-(--heading-color)`}>Home</a>

                <a href="#about" onClick={()=>setMenuopen(false)} className={`${active === "about" ? "text-(--primary-text-color)" : "hover:text-(--secondary-text-color)"} text-(--heading-color)`}>About</a>

                <a href="#projects" onClick={()=>setMenuopen(false)} className={`${active === "projects" ? "text-(--primary-text-color)" : "hover:text-(--secondary-text-color)"} text-(--heading-color)`}>Projects</a>

                <a href="#contact" onClick={()=>setMenuopen(false)} className={`${active === "contact" ? "text-(--primary-text-color)" : "hover:text-(--secondary-text-color)"} text-(--heading-color)`}>Contact</a>
            </div>
            
        </nav>
    )
}

export default Navbar;