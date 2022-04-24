import React from 'react';
import Helmet from 'react-helmet';
import NavBar from '../NavBar/NavBar';

function Layout(props){
    return (
        <div className="pt-12 md:pt-16">
            <Helmet>
                <title>WIP Portfolio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />
             </Helmet>
            <NavBar isHomepage={props.isHomepage} isProjectspage={props.isProjectspage}/>
            {props.children}
        </div>
    )
}

export default Layout;