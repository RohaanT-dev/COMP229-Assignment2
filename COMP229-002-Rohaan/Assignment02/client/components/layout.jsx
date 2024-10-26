//Rohaan Talpur, 301372121, and 28th September 2024
import React from 'react';

import { Link } from 'react-router-dom';


export default function Layout() {

  return (

    <>
      <img src='favicon.ico' width="100px" height="auto" style={{float: "left", marginRight:"10px"}}></img>
      <h1 style={{marginTop:"0px", paddingTop:"20px"}}>My Portfolio</h1>

      <nav>

        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>

         <br/>

      

      

    </>

    

  );

}