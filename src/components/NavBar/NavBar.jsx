import React, { useState } from 'react';
import * as styles from './NavBar.module.css';
import { Squash as Hamburger } from 'hamburger-react'

function NavBar(props){
  const [isOpen, setIsOpen] = useState(false);
  
  function toggle(){
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.NavContainer} ${isOpen ? styles.NavContainerOpen:styles.NavContainerClose}`}>
      <nav className={`${styles.NavBar}`}>
        <div className={`${styles.NavItem} ${styles.NavActive}`}>
          Home  
        </div>
        <div className={`${styles.NavItem}`}>
          Projects
        </div>

      </nav>
      
      <div className={`${styles.NavToggleButton}`} onClick={toggle}>
        <Hamburger toggled={isOpen} toggle={toggle} size={22} duration={0.2}/>
      </div>
    </div>
  )
}

export default NavBar;
