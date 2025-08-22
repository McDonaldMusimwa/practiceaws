import logo from "../../public/logo3.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  console.log("Its mobile => " + isMobile);
  // Update on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsOpen(false); // close menu on desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { route: "/", name: "Home" },
    { route: "/Questionares", name: "Questionare" },
    { route: "/About", name: "About" },
  ];


  return (
    <nav className={styles.header}>
      {/* Logo */}
  <div className={styles.logocontainer}>
  <NavLink to={"/"} className={styles.brand}>
    <img src={logo} alt="logo" className={styles.logo} />
  </NavLink>

  {/* Mobile Menu Toggle */}
  {isMobile && (
    <div className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <IoCloseOutline size={28} /> : <CiMenuBurger size={28} />}
    </div>
  )}
</div>


      {/* Navigation Links */}
      <div
        className={`${styles.links} ${
          isMobile ? styles.mobile : styles.desktop
        } ${isOpen ? styles.show : ""}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.route}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            onClick={() => isMobile && setIsOpen(false)} // close menu on click in mobile
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Header;
