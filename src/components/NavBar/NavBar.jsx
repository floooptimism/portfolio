import React, { useState } from 'react';
import * as styles from './NavBar.module.css';
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'gatsby';

function NavBar({isHomepage, isProjectspage}){
  const [isOpen, setIsOpen] = useState(false);
  
  function toggle(){
    setIsOpen(!isOpen);
  }



  return (
    <div className={`${styles.NavContainer} ${isOpen ? styles.NavContainerOpen:styles.NavContainerClose}`}>
      <nav className={`${styles.NavBar}`}>
        <Link to="/" activeClassName={`${styles.NavActive}`} onClick={toggle}>
          <div className={`${styles.NavItem}`}>
            Home  
          </div>
        </Link> 

        <Link to="/projects" activeClassName={`${styles.NavActive}`} onClick={toggle}>
          <div className={`${styles.NavItem}`}>
            Projects
          </div>
        </Link>

      </nav>
      
      <div className={`${styles.NavToggleButton}`} onClick={toggle}>
        <Hamburger toggled={isOpen} toggle={toggle} size={22} duration={0.2}/>
      </div>
    </div>
  )
}

export default NavBar;
