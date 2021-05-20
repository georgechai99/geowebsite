import React from 'react';
import selfie from '../images/selfie.png';
import '../styles/style.css';

function Intro(props) {
    return <img className="selfie" src={selfie} alt="just me" />,
    <h1>Hi!</h1>;
  }

export default Intro;
