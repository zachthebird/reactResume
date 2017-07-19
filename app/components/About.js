import React from "react";
import { $ }from 'jquery';  
  
const About = props => (
    <div className='indigo lighten-2'>
    <div className='container'>
        <h1 className=' white-text text-darken-2'>About Me</h1>
        <div className="row">
            <div className="grid-example col s12 m3"><img style={styles.imgStyle} className='responsive circle' src={'https://avatars7.githubusercontent.com/u/21204403?v=4&s=460'}/></div>
            <div className="grid-example col push-m1 s12 m8"><span className="flow-text white-text push-s4 ">Hi! My name is Zach Bird. I'm a web developer based in Central Texas. I began my journey as a web developer when I started working for a tech startup in 2012. That lead to an interest in entrepreneurship and e-commerce, and I became increasingly involved in building websites shortly thereafter.</span></div>
            <div className="grid-example col s12"><span className="flow-text white-text">That was nearly 5 years ago and I still enjoy building on the web platform just as much today. Although now, the problems I'm solving are much more interesting and complex! Below is my resumé and a few of my projects. Feel free to connect with me or reach out for more copies of my work.</span></div>
        </div>
    </div>
    </div>
);

const styles = {
  imgStyle: {
    width: '100%',
    margin: 10,
    url : 'headshot.jpeg'
  }
};

// Exporting this component as the default (only) export
export default About;