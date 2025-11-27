import { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [activeSession, setActiveSection] = useState('fecha');

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['fecha', 'programa', 'ubicacion', 'fotos'];
            const scrollY = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (scrollY >= offsetTop && scrollY < offsetTop + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

    window.addEventListener('scroll',  handleScroll);

    return () => window.removeEventListener('scroll',handleScroll);
},[]);

    const NAV_ITEMS = [
        { id: 'fecha', label: 'Inicio' },
        { id: 'programa', label: 'Información' },
        { id: 'ubicacion', label: 'Ubicación' },
        // { id: 'fotos', label: 'Fotos' },
    ];
    return (
        <nav className="navbar">
            {NAV_ITEMS.map(item => (
                <div className="nav-container" key={item.id}>
                    <a  className={`nav-icon ${activeSession === item.id ? 'active' : ''}`}
                        href={`#${item.id}`}
                        onClick={e => {
                            e.preventDefault();
                            handleNavClick(item.id);
                        }}>
                            {item.label}
                        </a>
                </div>
            ))}

        </nav>
    )
}

export default Navbar;