import React from "react";
import { $ }from 'jquery';

// Our Container component's only purpose will be to hold and center the rest of our content
// props.children will be substituted for any nested components deployed
const Container = props => (
  <nav>
    <div className="nav-wrapper indigo darken-1 row">
      <a href="#!" className="brand-logo myLogo"><img className='responsive-img' style={styles.containerStyle.logoStyle} src={styles.containerStyle.logoURL}/></a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a className='scrollBtn' href="#about">about</a></li>
        <li><a className='scrollBtn' href="#experience">experience</a></li>
        <li><a className='scrollBtn' href="#skillset">skillset</a></li>
        <li><a className='scrollBtn' href="#projects">projects</a></li>
        <li><a className='scrollBtn' href="">contact</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a className='scrollBtn' href="#about">about</a></li>
        <li><a className='scrollBtn' href="#experience">experience</a></li>
        <li><a className='scrollBtn' href="#skillset">skillset</a></li>
        <li><a className='scrollBtn' href="#projects">projects</a></li>
        <li><a className='scrollBtn' href="">contact</a></li>
      </ul>
    </div>
  </nav>
);

// An object we'll use to apply inline styles to this component
const styles = {
  containerStyle: {
    logoStyle: {
      height: 45,
      width: 170
    },
    marginTop: 50,
    textAlign: "center",
    logoURL: './logoClear.png'
  }
};

// Exporting this component as the default (only) export
export default Container;
