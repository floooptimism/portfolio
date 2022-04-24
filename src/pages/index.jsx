import React from 'react';


import '../styles/index.css';
import * as styles from './index.module.css';
import ArrowRight from '../components/Icons/ArrowRight/ArrowRight';
import {Helmet} from 'react-helmet';


// Icons
import NodeJS from '../components/Icons/NodeJS/NodeJS.jsx';
import Javascript from '../components/Icons/Javascript/Javascript.jsx';
import Html from '../components/Icons/HTML/HTML.jsx';
import Css from '../components/Icons/CSS/CSS.jsx';
import Github from '../components/Icons/Github/Github.jsx';
import Figma from '../components/Icons/Figma/Figma.jsx';
import ReactIcon from '../components/Icons/React/React.jsx';


import ReactTooltip from 'react-tooltip';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

function Index() {

  return (
      <div className={`${styles.Container}`}>

        <div className={`${styles.Hero}`}>
          <h1 className="text-4xl font-bold tracking-wide">DUKE LYNDELL</h1>
          <h4 className="text-lg italic tracking-wider font-light text-gray-200">Full Steak Developer</h4>
          <h6 className=" italic text-gray-400 tracking-wider">Based on Mars</h6>

          <div className={`${styles.HeroButtonContainer}`}>
            <Link to="/projects">
              <button>
                <span>
                  See my projects
                </span>
                <ArrowRight />
                
              </button>
            </Link>
          </div>
        </div>

        <div className={`${styles.SectionContainer} mt-16 md:mt-20`}>
          <div className={`${styles.SectionName}`}>
            Tech
          </div>

          <div className={`${styles.SectionContent}`}>
            <NodeJS data-tip="NodeJS" />
            <Javascript data-tip="Javascript"/>
            <Html data-tip="HTML5"/>
            <Css data-tip="CSS3"/>
            <ReactIcon data-tip="React"/>
            <Github data-tip="Github/Git Cli"/>
            <Figma data-tip="Figma"/>
          </div>
        </div>
      
        <footer className={`${styles.Footer}`}>
            <h6 className="text-gray-300 mb-4">Contacts</h6>
            <div className="text-gray-400 text-sm space-y-2 underline flex flex-col">

              <div className={`${styles.FooterContactItem}`}>
                <svg width="24" height="23" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 0H1.58333C0.7125 0 0.00791666 0.7125 0.00791666 1.58333L0 11.0833C0 11.9542 0.7125 12.6667 1.58333 12.6667H14.25C15.1208 12.6667 15.8333 11.9542 15.8333 11.0833V1.58333C15.8333 0.7125 15.1208 0 14.25 0ZM14.25 3.16667L7.91667 7.125L1.58333 3.16667V1.58333L7.91667 5.54167L14.25 1.58333V3.16667Z" fill="#CECECE"/>
                </svg>
                <a href="mailto:feline.sr15m@aleeas.com" rel="noopener noreferrer">feline.sr15m@aleeas.com</a>
              </div>

            </div>

        </footer>

        <ReactTooltip backgroundColor="#1B1B1B" textColor="white" clickable/>
      </div>
  );
}

export default Index;
