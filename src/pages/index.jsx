import React from 'react';
import NavBar from '../components/NavBar/NavBar';


import '../styles/index.css';
import * as styles from './index.module.css';
import ArrowRight from '../components/Icons/ArrowRight/ArrowRight';
import {Helmet} from 'react-helmet';


// Icons
import NodeJS from '../components/Icons/NodeJS/NodeJS.jsx';
import Javascript from '../components/Icons/Javascript/Javascript.jsx';
import HTML from '../components/Icons/HTML/HTML.jsx';
import CSS from '../components/Icons/CSS/CSS.jsx';
import Github from '../components/Icons/Github/Github.jsx';
import Figma from '../components/Icons/Figma/Figma.jsx';
import ReactIcon from '../components/Icons/React/React.jsx';

function Index() {

  return (
    <div>
      <Helmet>
        <title>WIP Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <NavBar />

      <div className={`${styles.Hero}`}>
        <h1 className="text-4xl font-bold tracking-wide">DUKE LYNDELL</h1>
        <h4 className="text-lg italic tracking-wider font-light text-gray-200">Full Stack Developer</h4>
        <h6 className=" italic text-gray-400 tracking-wider">Based on Mars</h6>

        <div className={`${styles.HeroButtonContainer}`}>
          <button>
            <span>
              See my projects
            </span>
            <ArrowRight />
            
          </button>
        </div>
      </div>

      <div className={`${styles.SectionContainer} mt-16 md:mt-20`}>
        <div className={`${styles.SectionName}`}>
          Tech
        </div>

        <div className={`${styles.SectionContent}`}>
          <NodeJS />
          <Javascript />
          <HTML />
          <CSS />
          <ReactIcon />
          <Github />
          <Figma />
        </div>
      </div>

    </div>
  );
}

export default Index;
